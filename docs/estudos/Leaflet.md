# Introdução ao Leaflet: Mapeamento Interativo para a Web

🌍 **Leaflet** é a principal biblioteca JavaScript de código aberto para mapas interativos compatíveis com dispositivos móveis. Leve (~42 KB) e de alto desempenho, oferece recursos essenciais para integração com *tiles*, marcadores, popups e camadas vetoriais.

## 🧩 Principais Características
- **Multiplataforma**: Funciona em todos navegadores modernos (desktop/mobile)
- **Extensível**: Arquitetura de plugins (1.200+ disponíveis)
- **Simplicidade**: API intuitiva e documentação excelente
- **Open Source**: Licença BSD 2-clause (uso livre comercial/pessoal)

## 💻 Exemplo Básico (HTML + JavaScript)
```html
<!DOCTYPE html>
<html>
<head>
    <title>Mapa Leaflet</title>
    <!-- Folha de estilo CSS -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <!-- Biblioteca Leaflet JS -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <style>
        #map { height: 400px; }
    </style>
</head>
<body>
    <div id="map"></div>

    <script>
        // Inicializa o mapa no container "map"
        const map = L.map('map').setView([-23.5505, -46.6333], 13); // Coordenadas de São Paulo

        // Adiciona camada de tiles (OpenStreetMap)
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // Adiciona um marcador
        L.marker([-23.5505, -46.6333])
         .addTo(map)
         .bindPopup('Praça da Sé, SP')
         .openPopup();
    </script>
</body>
</html>
```

## 🚀 Casos de Uso Comuns
- Logística: Rastreamento de veículos em tempo real

- Turismo: Mapas interativos de pontos turísticos

- Agricultura: Monitoramento de plantações com georreferenciamento

- Emergências: Visualização de áreas de risco/desastres

- Imobiliária: Localização de propriedades com filtros geográficos

## 🔌 Plugins Populares

- Leaflet.markercluster	Agrupamento de marcadores
- Leaflet.draw	Ferramentas de desenho no mapa
- Leaflet.heat	Mapas de calor
- Leaflet.geosearch	Busca de endereços
- Leaflet.routing	Cálculo de rotas

## ✅ Por que escolher Leaflet?

- Performance otimizada para grandes conjuntos de dados

- Comunidade ativa com atualizações constantes

- Integração simples com React, Vue, Angular

- Customização total de estilos e interações
