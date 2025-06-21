const axios = require('axios');
const fs = require('fs');
const path = require('path');

const cacheService = {
    cache: new Map(),
    getFromCache: function(key) {
        return this.cache.get(key);
    },
    setToCache: function(key, value) {
        this.cache.set(key, value);
    }
};

const { fetchWithRetry } = {
    fetchWithRetry: async function(url, maxRetries = 3) {
        for (let i = 0; i < maxRetries; i++) {
            try {
                const response = await axios.get(url, { timeout: 30000 });
                return response.data;
            } catch (error) {
                console.warn(`Tentativa ${i + 1} falhou para ${url}: ${error.message}`);
                if (i === maxRetries - 1) throw error;
                await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
            }
        }
    }
};

const geometryUtils = {
    extractLatLong: function(geometriaWkt) {
        if (!geometriaWkt) return null;
        
        try {
            const pointMatch = geometriaWkt.match(/POINT\s*\(\s*([+-]?\d*\.?\d+)\s+([+-]?\d*\.?\d+)\s*\)/i);
            if (pointMatch) {
                return {
                    longitude: parseFloat(pointMatch[1]),
                    latitude: parseFloat(pointMatch[2])
                };
            }
            
            const polygonMatch = geometriaWkt.match(/POLYGON\s*\(\s*\(\s*([^)]+)\s*\)\s*\)/i);
            if (polygonMatch) {
                const coords = polygonMatch[1].split(',').map(coord => {
                    const [lon, lat] = coord.trim().split(/\s+/).map(parseFloat);
                    return { lon, lat };
                });
                
                if (coords.length > 0) {
                    const avgLon = coords.reduce((sum, coord) => sum + coord.lon, 0) / coords.length;
                    const avgLat = coords.reduce((sum, coord) => sum + coord.lat, 0) / coords.length;
                    return { longitude: avgLon, latitude: avgLat };
                }
            }
            
            return null;
        } catch (error) {
            console.warn('Erro ao extrair coordenadas:', error.message);
            return null;
        }
    }
};

async function fetchObrasPorUF(uf, pagina = 0, tamanhoDaPagina = 50) {
    const url = `https://api.obrasgov.gestao.gov.br/obrasgov/api/projeto-investimento?uf=${uf}&pagina=${pagina}&tamanhoDaPagina=${tamanhoDaPagina}`;

    try {
        const response = await axios.get(url, { timeout: 30000 });

        if (response.data && Array.isArray(response.data.content)) {
            console.log(`📄 Página ${pagina} carregada com ${response.data.content.length} obras.`);
            return response.data;
        } else {
            console.error("Formato inesperado de resposta ao buscar obras.");
            return { content: [], totalElements: 0 };
        }
    } catch (error) {
        console.error(`❌ Erro ao buscar obras da página ${pagina}:`, error.message);
        return { content: [], totalElements: 0 };
    }
}

async function fetchGeometria(idUnico) {
    const url = `https://api.obrasgov.gestao.gov.br/obrasgov/api/geometria?idUnico=${idUnico}`;
    try {
        const geometria = await fetchWithRetry.fetchWithRetry(url);
        return geometria;
    } catch (error) {
        throw new Error(`Erro ao buscar geometria para ID ${idUnico}: ${error.cause || error.message}`);
    }
}

async function processObra(obra) {
    try {
        let geometriaData = cacheService.getFromCache(obra.idUnico);

        if (!geometriaData) {
            geometriaData = await fetchGeometria(obra.idUnico);
            if (geometriaData && geometriaData[0]) {
                cacheService.setToCache(obra.idUnico, geometriaData);
            }
        }

        if (geometriaData && geometriaData[0] && geometriaData[0].geometriaWkt) {
            const coords = geometryUtils.extractLatLong(geometriaData[0].geometriaWkt);
            if (coords) {
                obra.latitude = coords.latitude;
                obra.longitude = coords.longitude;
            }
        }
        return obra;
    } catch (error) {
        console.error(`⚠️ Erro ao processar geometria para ID ${obra.idUnico}:`, error.message);
        obra.latitude = null;
        obra.longitude = null;
        return obra;
    }
}

async function updateObras() {
    try {
        console.log('🔄 Starting obras data update...');
        
        const uf = process.env.UF_TARGET || 'DF';
        const maxPages = parseInt(process.env.MAX_PAGES) || 50;
        const pageSize = parseInt(process.env.PAGE_SIZE) || 50;
        
        console.log(`📡 Fetching obras from ${uf}, max ${maxPages} pages, ${pageSize} per page`);
        
        let todasAsObras = [];
        let pagina = 0;
        let totalPages = 1;
        
        while (pagina < totalPages && pagina < maxPages) {
            const resultado = await fetchObrasPorUF(uf, pagina, pageSize);
            
            if (resultado.content && resultado.content.length > 0) {
                todasAsObras = todasAsObras.concat(resultado.content);
                totalPages = resultado.totalPages || 1;
                
                console.log(`📊 Página ${pagina + 1}/${Math.min(totalPages, maxPages)} processada. Total de obras: ${todasAsObras.length}`);
            } else {
                console.log(`📭 Página ${pagina} sem conteúdo, finalizando busca.`);
                break;
            }
            
            pagina++;
            
            if (pagina < totalPages && pagina < maxPages) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
        
        console.log(`✅ Total de ${todasAsObras.length} obras carregadas`);
        
        console.log('🗺️ Processando geometrias das obras...');
        const obrasProcessadas = [];
        let processedCount = 0;
        
        for (const obra of todasAsObras) {
            try {
                const obraProcessada = await processObra(obra);
                obrasProcessadas.push(obraProcessada);
                processedCount++;
                
                if (processedCount % 10 === 0) {
                    console.log(`📍 ${processedCount}/${todasAsObras.length} obras processadas`);
                }
                
                await new Promise(resolve => setTimeout(resolve, 200));
                
            } catch (error) {
                console.error(`❌ Erro ao processar obra ${obra.idUnico}:`, error.message);
                obra.latitude = null;
                obra.longitude = null;
                obrasProcessadas.push(obra);
            }
        }

        console.log(`✅ Processamento concluído: ${obrasProcessadas.length} obras`);
        
        const obrasComCoordenadas = obrasProcessadas.filter(obra => 
            obra.latitude && obra.longitude && 
            !isNaN(obra.latitude) && !isNaN(obra.longitude)
        );
        
        console.log(`📍 ${obrasComCoordenadas.length} obras com coordenadas válidas`);

        const dataDir = path.join(process.cwd(), 'obrasgov');
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        const obrasFilePath = path.join(dataDir, 'obras_com_lat_long.json');
        const summaryFilePath = path.join(dataDir, 'obras_summary.json');
        
        let hasChanges = true;
        if (fs.existsSync(obrasFilePath)) {
            const existingData = JSON.parse(fs.readFileSync(obrasFilePath, 'utf8'));
            hasChanges = JSON.stringify(existingData) !== JSON.stringify(obrasComCoordenadas);
        }

        if (hasChanges) {
            fs.writeFileSync(obrasFilePath, JSON.stringify(obrasComCoordenadas, null, 2));
            console.log(`💾 Dados salvos em: ${obrasFilePath}`);
            
            const summary = {
                totalObrasAPI: todasAsObras.length,
                totalObrasComCoordenadas: obrasComCoordenadas.length,
                lastUpdate: new Date().toISOString(),
                uf: uf,
                pagesProcessed: pagina,
                obrasByStatus: obrasComCoordenadas.reduce((acc, obra) => {
                    const status = obra.situacao || 'Não informado';
                    acc[status] = (acc[status] || 0) + 1;
                    return acc;
                }, {}),
                obrasByEspecie: obrasComCoordenadas.reduce((acc, obra) => {
                    const especie = obra.especie || 'Não informado';
                    acc[especie] = (acc[especie] || 0) + 1;
                    return acc;
                }, {}),
                valorTotal: obrasComCoordenadas.reduce((sum, obra) => {
                    const valor = obra.fontesDeRecurso?.[0]?.valorInvestimentoPrevisto || 0;
                    return sum + valor;
                }, 0)
            };

            fs.writeFileSync(summaryFilePath, JSON.stringify(summary, null, 2));
            console.log(`📈 Resumo gerado: ${summaryFilePath}`);
            console.log('📊 Estatísticas:', {
                total: summary.totalObrasAPI,
                comCoordenadas: summary.totalObrasComCoordenadas,
                percentual: ((summary.totalObrasComCoordenadas / summary.totalObrasAPI) * 100).toFixed(1) + '%'
            });
            
        } else {
            console.log('ℹ️ Nenhuma alteração detectada nos dados das obras');
        }

        console.log('✅ Atualização das obras concluída com sucesso');

    } catch (error) {
        console.error('❌ Erro na atualização das obras:', error.message);
        if (error.response) {
            console.error('API Response:', {
                status: error.response.status,
                statusText: error.response.statusText,
                data: error.response.data
            });
        }
        process.exit(1);
    }
}

updateObras();