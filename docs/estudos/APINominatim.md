# Documento Técnico: Uso da API Nominatim

## O que é a API Nominatim?

A **Nominatim** é uma API de geocodificação mantida pelo projeto **OpenStreetMap (OSM)**. Ela permite converter coordenadas geográficas (latitude e longitude) em endereços legíveis por humanos (*reverse geocoding*), e vice-versa (*geocodificação direta*).

A API é gratuita e de código aberto, sendo amplamente utilizada em aplicações que precisam relacionar dados espaciais a localizações específicas.

## O que a Nominatim faz?

A API Nominatim oferece duas funcionalidades principais:

- **Geocodificação direta (forward geocoding):** converte um endereço textual (ex: "Praça dos Três Poderes, Brasília") em coordenadas geográficas.
- **Geocodificação reversa (reverse geocoding):** converte coordenadas geográficas (ex: `-15.7989, -47.8645`) em um endereço estruturado.

Além disso, os dados retornados incluem informações como:

- Nome do lugar
- Cidade, bairro e país
- Região administrativa (dependendo do país)
- Tipo do local (ex: edifício, rua, bairro, etc.)

## Uso da API Nominatim no projeto

No contexto do projeto de mapeamento de obras no Distrito Federal, a API Nominatim será utilizada para realizar **geocodificação reversa**, ou seja, converter as coordenadas geográficas de uma obra em uma **região administrativa**.

### Objetivo

Identificar automaticamente a **Região Administrativa (RA)** do Distrito Federal com base na latitude e longitude cadastradas de cada obra.

### Exemplo de uso

#### Requisição:

```http
GET https://nominatim.openstreetmap.org/reverse?lat=-15.7941&lon=-47.8825&format=json
{
  "address": {
    "suburb": "Asa Norte",
    "city": "Brasília",
    "state": "Distrito Federal",
    "country": "Brazil"
  }
}
Neste exemplo, o campo `"suburb"` ou `"city_district"` pode indicar a Região Administrativa (dependendo da consistência dos dados do OSM para a região do DF).

## Considerações

- A API Nominatim possui **limites de uso** em sua versão pública (restrições por segundo e por IP).
- Para uso em **ambientes de produção**, recomenda-se:
  - Utilizar uma **instância própria da Nominatim**, ou
  - Optar por uma **API comercial compatível**, como [Photon](https://photon.komoot.io/) ou [LocationIQ](https://locationiq.com/).
- É importante implementar **cache** ou **persistência local** dos resultados para evitar requisições repetidas e reduzir a dependência da API externa.
- A qualidade e precisão das informações pode **variar conforme a cobertura dos dados do OpenStreetMap** na região consultada.

## Conclusão

A **API Nominatim** é uma solução eficiente, gratuita e de código aberto para realizar geocodificação reversa.  
No projeto de mapeamento de obras do Distrito Federal, ela será utilizada para **identificar automaticamente a Região Administrativa** de cada obra com base em suas coordenadas geográficas.

Sua integração contribuirá para melhorar a **organização, automação e visualização** das informações geoespaciais no sistema de monitoramento de obras.
