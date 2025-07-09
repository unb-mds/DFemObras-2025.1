const axios = require('axios');
const { fetchWithRetry } = require('../utils/retryUtils');

async function fetchObrasPorUF(uf, pagina = 0, tamanhoDaPagina = 5) {
<<<<<<< HEAD
    const url = `https://api.obrasgov.gestao.gov.br/obrasgov/api/projeto-investimento?uf=${uf}&pagina=${pagina}&tamanhoDaPagina=${tamanhoDaPagina}`;

    try {
        const response = await axios.get(url);

        if (response.data && Array.isArray(response.data.content)) {
            console.log(`Página ${pagina} carregada com ${response.data.content.length} obras.`);
            return response.data;
        } else {
            console.error("Formato inesperado de resposta ao buscar obras.");
            return { content: [], totalElements: 0 };
        }
    } catch (error) {
        console.error(`Erro ao buscar obras da página ${pagina}:`, error.message);
        return { content: [], totalElements: 0 };
    }
}

async function fetchGeometria(idUnico) {
    const url = `https://api.obrasgov.gestao.gov.br/obrasgov/api/geometria?idUnico=${idUnico}`;
    try {
        const geometria = await fetchWithRetry(url);
        return geometria;
    } catch (error) {
        throw new Error(`Erro ao buscar geometria para ID ${idUnico}: ${error.cause || error.message}`);
    }
}


module.exports = {
    fetchObrasPorUF,
    fetchGeometria,
};
=======
  const url = `https://api.obrasgov.gestao.gov.br/obrasgov/api/projeto-investimento?uf=${uf}&pagina=${pagina}&tamanhoDaPagina=${tamanhoDaPagina}`;

  try {
    const response = await axios.get(url);

    if (response.data && Array.isArray(response.data.content)) {
      console.log(
        `Página ${pagina} carregada com ${response.data.content.length} obras.`,
      );
      return response.data;
    } else {
      console.error('Formato inesperado de resposta ao buscar obras.');
      return { content: [], totalElements: 0 };
    }
  } catch (error) {
    console.error(`Erro ao buscar obras da página ${pagina}:`, error.message);
    return { content: [], totalElements: 0 };
  }
}

async function fetchGeometria(idUnico) {
  const url = `https://api.obrasgov.gestao.gov.br/obrasgov/api/geometria?idUnico=${idUnico}`;
  try {
    const geometria = await fetchWithRetry(url);
    return geometria;
  } catch (error) {
    throw new Error(
      `Erro ao buscar geometria para ID ${idUnico}: ${error.cause || error.message}`,
    );
  }
}

module.exports = {
  fetchObrasPorUF,
  fetchGeometria,
};
>>>>>>> 9f36ec1879030b2c6b5452007a57d8b36fe0b9f6
