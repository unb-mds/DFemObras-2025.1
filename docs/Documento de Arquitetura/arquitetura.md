# 🗺️ Sistema de Análise de Obras Públicas do DF

Este projeto tem como objetivo apresentar informações sobre obras públicas do Distrito Federal de forma interativa e acessível, utilizando um mapa interativo e integração com redes sociais.

---

## 📐 Arquitetura do Sistema

O sistema é composto por três camadas principais:

### 1. Camada de Apresentação
- **Sistema Web**: Interface web que apresenta um **mapa interativo** com dados das obras públicas.
- **Usuário**: Pessoa interessada em consultar informações sobre obras no DF.

### 2. Camada de Aplicação (Backend)
- **Aplicação Backend (Node.js)**: Automação principal que consome a API de obras públicas, processa os dados e constrói o mapa com a API **Leaflet**.
- **Bot_X (Python)**: Automatiza o envio de tweets para relatar anomalias detectadas nas obras, usando a API **Tweepy**.
- **Cohere (IA)**: Utilizada para gerar mensagens humanizadas para os tweets.

### 3. Camada de Dados
- **Fonte de dados**: API de obras públicas (`Obras gov`) que fornece os dados atualizados.
- **Armazenamento (JSON)**: Dados das obras são armazenados localmente em formato JSON.
- **APIs utilizadas**:
  - **Obras gov**: Fonte principal de dados sobre obras.
  - **Leaflet**: Criação do mapa interativo.
  - **Tweepy**: Envio de mensagens para a rede social **X** (antigo Twitter).
  - **Cohere**: Geração de mensagens com linguagem natural.

---

## 🔁 Fluxo de Funcionamento

1. O **usuário** acessa a aplicação web.
2. A aplicação carrega os dados via API pública de obras.
3. O **Backend (Node.js)** processa e exibe os dados no mapa via **Leaflet**.
4. O **Bot_X (Python)** detecta possíveis anomalias e usa **Cohere** para escrever tweets.
5. Os tweets são postados na rede social **X** com **Tweepy**.

---

## 🔧 Tecnologias Utilizadas

- **Node.js** (Backend principal)
- **Python** (Bot para rede social)
- **Leaflet.js** (Mapas interativos)
- **Tweepy** (Integração com Twitter/X)
- **Cohere AI** (Geração de linguagem natural)
- **JSON** (Armazenamento de dados)
- **API Obras Gov** (Fonte de dados)
- **Java script/CSS** (upgrade do frontend)


---

## 🧠 Futuras Melhorias

Adicionar a API da RA (Responsabilidade de Acompanhamento).

Incluir módulo de gráficos com estatísticas visuais.

Permitir interação dinâmica com os filtros do mapa.
