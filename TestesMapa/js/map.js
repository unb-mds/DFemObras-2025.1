// Inicializar o mapa 
let mapa;

let allMarkers = [];
let layerGroups = {
    concluida: L.layerGroup(),
    emExecucao: L.layerGroup(),
    inativada: L.layerGroup()
};

function inicializaMapa() {
    // Definir os limites do DF
    const bounds = L.latLngBounds(
        L.latLng(-16.1000, -48.2000), // Sudoeste do DF
        L.latLng(-15.5000, -47.5000)  // Nordeste do DF
    );

    // Criar o mapa com restrições
    mapa = L.map('map', {
        center: [-15.802825, -47.798767], // Posição inicial
        zoom: 10.4,   // Zoom inicial
        minZoom: 10,  // Zoom mínimo permitido
        maxZoom: 18,  // Zoom máximo permitido
        maxBounds: bounds,  // Limites do mapa para o DF
        maxBoundsViscosity: 1.0 // Mantém o usuário dentro da área
    });

    // Adicionar camada do OpenStreetMap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapa);
}


if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        inicializaMapa();
        buscarObras();
        const popup = document.getElementById('popup');
        const fecharPopup = document.getElementById('close-popup');

        // Mostra o popup quando a página é carregada
        popup.style.display = 'flex';

        // Fecha o popup ao clicar no botão "X"
        fecharPopup.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        // Fecha o popup ao clicar fora do conteúdo
        popup.addEventListener('click', (event) => {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    });
}

function formatarBRL(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace(/\s/, '');
}

// Função para criar os ícones dos pins
function criarIconesDosPins() {
    return {
        concluida: L.icon({
            iconUrl: './js/pins/concluida.png',
            iconSize: [30, 30],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32],
        }),
        emExecucao: L.icon({
            iconUrl: './js/pins/em_execucao.png',
            iconSize: [30, 30],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32],
        }),
        cadastrada: L.icon({
            iconUrl: './js/pins/cadastrada.png',
            iconSize: [30, 30],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32],
        }),
        inativada: L.icon({
            iconUrl: './js/pins/inativada.png',
            iconSize: [30, 30],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32],
        }),
    };
}

// Função para validar a resposta da API
function verificarResposta(resposta) {
    if (!resposta.ok) {
        throw new Error('Erro ao carregar o JSON');
    }
    return resposta;
}

// Função para obter os dados das obras
function obterDadosDasObras() {
    return fetch('./obrasgov/obras_com_lat_long.json')
        .then(verificarResposta)
        .then(resposta => resposta.json());
}

// Função para criar um marcador no mapa
function criarMarcador(lat, lng, icone, mapa) {
    return L.marker([lat, lng], { icon: icone }).addTo(mapa);
}

// Função para gerar conteúdo do popup
function gerarConteudoDoPopup(nome, situacao, valorBRL, indice) {
    return `
        <div style="font-family: Arial, sans-serif; padding: 10px; width: 250px; background-color:rgb(255, 255, 255);">
            <h3 style="font-size: 18px; margin-bottom: 10px; color: #333;">${nome}</h3>

            <p style="margin: 5px 0; font-size: 14px; color: #666;"><strong style="color: #333;">Valor Previsto:</strong> ${valorBRL}</p>
            <a href="detalhamento.html?obra=${indice}" target="_blank" style="display: block; margin-top: 10px; text-align: center; padding: 8px; background-color: #133e79; color: white; text-decoration: none; border-radius: 4px; font-size: 14px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);">
                Ver detalhes
            </a>
        </div>
    `;
}

// Função para determinar o ícone correto
function obterIconeDoMarcador(situacao, icones) {
    const mapaIcones = {
        'Concluída': icones.concluida,
        'Em execução': icones.emExecucao,
        'Cadastrada': icones.cadastrada,
        'Inativada': icones.inativada
    };
    return mapaIcones[situacao] || null;
}

// Função principal para processar os dados
function processarDadosDasObras(dados, mapa) {
    const icones = criarIconesDosPins();
    
    // Limpar marcadores existentes
    allMarkers = [];
    Object.values(layerGroups).forEach(group => group.clearLayers());

    // Ordenar dados
    dados.sort((a, b) => {
        const valorA = a.fontesDeRecurso?.[0]?.valorInvestimentoPrevisto || 0;
        const valorB = b.fontesDeRecurso?.[0]?.valorInvestimentoPrevisto || 0;
        return valorB - valorA;
    });

    dados.forEach((obra, indice) => {
        const { nome, fontesDeRecurso, latitude, longitude, situacao } = obra;
        
        if (!latitude || !longitude) return;

        const iconeMarcador = obterIconeDoMarcador(situacao, icones);
        if (!iconeMarcador) return;

        const marcador = criarMarcador(latitude, longitude, iconeMarcador, mapa);
        const valor = fontesDeRecurso?.[0]?.valorInvestimentoPrevisto || 0;
        const conteudoPopup = gerarConteudoDoPopup(nome, situacao, formatarBRL(valor), indice);
        
        marcador.bindPopup(conteudoPopup);
        marcador.obraData = obra; // Armazenar dados completos

        // Adicionar aos grupos
        switch(situacao) {
            case 'Concluída':
                layerGroups.concluida.addLayer(marcador);
                break;
            case 'Em execução':
                layerGroups.emExecucao.addLayer(marcador);
                break;
            case 'Inativada':
                layerGroups.inativada.addLayer(marcador);
                break;
        }

        allMarkers.push(marcador);
    });

    // Adicionar grupos ao mapa
    Object.values(layerGroups).forEach(group => group.addTo(mapa));
    atualizarFiltros();
}

// Função principal modificada
function buscarObras() {
    obterDadosDasObras()
        .then(dados => processarDadosDasObras(dados, mapa))
        .catch(error => console.error('Erro ao carregar as obras:', error));
}

// Exportações para testes
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatarBRL,
        inicializaMapa,
        criarIconesDosPins,
        verificarResposta,
        obterDadosDasObras,
        criarMarcador,
        buscarObras,
        gerarConteudoDoPopup,
        obterIconeDoMarcador,
        processarDadosDasObras
    };
}
function atualizarFiltros() {
    // Atualizar visibilidade por situação
    const situacoes = {
        concluida: document.getElementById('concluidas').checked,
        emExecucao: document.getElementById('em-execucao').checked,
        inativada: document.getElementById('inativadas').checked
    };

    Object.entries(layerGroups).forEach(([key, group]) => {
        situacoes[key] ? group.addTo(mapa) : group.remove();
    });

    // Atualizar ordenação
    const ordenacao = document.getElementById('ordenacao').value;
    allMarkers.sort((a, b) => {
        if (ordenacao === 'valor') {
            return (b.obraData.fontesDeRecurso?.[0]?.valorInvestimentoPrevisto || 0) - 
                   (a.obraData.fontesDeRecurso?.[0]?.valorInvestimentoPrevisto || 0);
        } else {
            return a.obraData.nome.localeCompare(b.obraData.nome);
        }
    });

    // Reordenar marcadores (para z-index)
    allMarkers.forEach((marker, index) => {
        marker.setZIndexOffset(10000 - index);
    });
}

// Implementar busca
document.getElementById('search-input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    allMarkers.forEach(marker => {
        const nome = marker.obraData.nome.toLowerCase();
        const match = nome.includes(searchTerm);
        marker.setOpacity(match ? 1 : 0.3);
        marker.setZIndexOffset(match ? 10000 : 0);
    });
});

// Event listeners para controles
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', atualizarFiltros);
});

document.getElementById('ordenacao').addEventListener('change', atualizarFiltros);
// Exibir coordenadas no console ao clicar no mapa
// mapa.on('click', (e) => {
//     console.log(`Coordenadas: ${e.latlng}`);
// });
