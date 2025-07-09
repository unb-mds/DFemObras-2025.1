const axios = require('axios');
const { fetchObrasPorUF, fetchGeometria } = require('../apiService');

// Mock do axios para simular requisições
jest.mock('axios');

describe('apiService', () => {
<<<<<<< HEAD
    beforeEach(() => {
        // Limpa os mocks antes de cada teste
        jest.clearAllMocks();
    });

    test('deve buscar obras por UF com sucesso', async () => {
        const mockData = {
            content: [{ idUnico: '123', nome: 'Obra 1' }],
            totalElements: 1,
        };
        axios.get.mockResolvedValue({ data: mockData });

        const result = await fetchObrasPorUF('DF', 0, 5);
        expect(result).toEqual(mockData);
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    test('deve lidar com erro ao buscar obras por UF', async () => {
        const mockError = new Error('Erro na API');
        axios.get.mockRejectedValue(mockError);

        const result = await fetchObrasPorUF('DF', 0, 5);
        expect(result).toEqual({ content: [], totalElements: 0 });
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    test('deve buscar geometria com sucesso', async () => {
        const mockData = [{ geometriaWkt: 'POINT (-47.1234 -15.5678)' }];
        axios.get.mockResolvedValue({ status: 200, data: mockData });

        const result = await fetchGeometria('123');
        expect(result).toEqual(mockData);
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    test('deve lidar com erro ao buscar geometria', async () => {
        const mockError = new Error('Erro na API');
        axios.get.mockRejectedValue(mockError);
    
        await expect(fetchGeometria('123')).rejects.toThrow(/Erro ao buscar geometria para ID 123: (Erro na API|Max retries exceeded)/);
        expect(axios.get).toHaveBeenCalledTimes(5);
    });
    
});
=======
  beforeEach(() => {
    // Limpa os mocks antes de cada teste
    jest.clearAllMocks();
  });

  test('deve buscar obras por UF com sucesso', async () => {
    const mockData = {
      content: [{ idUnico: '123', nome: 'Obra 1' }],
      totalElements: 1,
    };
    axios.get.mockResolvedValue({ data: mockData });

    const result = await fetchObrasPorUF('DF', 0, 5);
    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test('deve lidar com erro ao buscar obras por UF', async () => {
    const mockError = new Error('Erro na API');
    axios.get.mockRejectedValue(mockError);

    const result = await fetchObrasPorUF('DF', 0, 5);
    expect(result).toEqual({ content: [], totalElements: 0 });
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test('deve buscar geometria com sucesso', async () => {
    const mockData = [{ geometriaWkt: 'POINT (-47.1234 -15.5678)' }];
    axios.get.mockResolvedValue({ status: 200, data: mockData });

    const result = await fetchGeometria('123');
    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test('deve lidar com erro ao buscar geometria', async () => {
    const mockError = new Error('Erro na API');
    axios.get.mockRejectedValue(mockError);

    await expect(fetchGeometria('123')).rejects.toThrow(
      /Erro ao buscar geometria para ID 123: (Erro na API|Max retries exceeded)/,
    );
    expect(axios.get).toHaveBeenCalledTimes(5);
  });
});
>>>>>>> 9f36ec1879030b2c6b5452007a57d8b36fe0b9f6
