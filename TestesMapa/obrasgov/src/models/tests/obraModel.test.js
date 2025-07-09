const { processObra } = require('../obraModel');
const cacheService = require('../../services/cacheService');
const apiService = require('../../services/apiService');
const geometryUtils = require('../../utils/geometryUtils');

jest.mock('../../services/cacheService');
jest.mock('../../services/apiService');
jest.mock('../../utils/geometryUtils');

describe('processObra', () => {
<<<<<<< HEAD
    test('deve processar uma obra com geometria válida', async () => {
        const obra = { idUnico: '123', nome: 'Obra 1' };
        const mockGeometria = [{ geometriaWkt: 'POINT (-47.1234 -15.5678)' }];
        const mockCoords = { longitude: -47.1234, latitude: -15.5678 };

        cacheService.getFromCache.mockReturnValue(null);
        apiService.fetchGeometria.mockResolvedValue(mockGeometria);
        geometryUtils.extractLatLong.mockReturnValue(mockCoords);

        const result = await processObra(obra);

        expect(result).toEqual({
            ...obra,
            latitude: mockCoords.latitude,
            longitude: mockCoords.longitude,
        });
    });

    test('deve lidar com erro ao processar geometria', async () => {
        const obra = { idUnico: '123', nome: 'Obra 1' };

        cacheService.getFromCache.mockReturnValue(null);
        apiService.fetchGeometria.mockRejectedValue(new Error('Erro na API'));

        const result = await processObra(obra);

        expect(result).toEqual({
            ...obra,
            latitude: null,
            longitude: null,
        });
    });
});
=======
  test('deve processar uma obra com geometria válida', async () => {
    const obra = { idUnico: '123', nome: 'Obra 1' };
    const mockGeometria = [{ geometriaWkt: 'POINT (-47.1234 -15.5678)' }];
    const mockCoords = { longitude: -47.1234, latitude: -15.5678 };

    cacheService.getFromCache.mockReturnValue(null);
    apiService.fetchGeometria.mockResolvedValue(mockGeometria);
    geometryUtils.extractLatLong.mockReturnValue(mockCoords);

    const result = await processObra(obra);

    expect(result).toEqual({
      ...obra,
      latitude: mockCoords.latitude,
      longitude: mockCoords.longitude,
    });
  });

  test('deve lidar com erro ao processar geometria', async () => {
    const obra = { idUnico: '123', nome: 'Obra 1' };

    cacheService.getFromCache.mockReturnValue(null);
    apiService.fetchGeometria.mockRejectedValue(new Error('Erro na API'));

    const result = await processObra(obra);

    expect(result).toEqual({
      ...obra,
      latitude: null,
      longitude: null,
    });
  });
});
>>>>>>> 9f36ec1879030b2c6b5452007a57d8b36fe0b9f6
