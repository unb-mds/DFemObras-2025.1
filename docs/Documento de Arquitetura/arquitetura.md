# Documento de Arquitetura — Sistema de Análise de Obras Públicas do DF

## 1. Introdução

Este documento descreve a arquitetura do **Sistema de Análise de Obras Públicas do Distrito Federal**, que evolui uma versão anterior do mesmo sistema. O objetivo principal é apresentar informações sobre obras públicas do DF de forma interativa e acessível, utilizando um mapa interativo e integração com redes sociais.

O público-alvo do sistema são **cidadãos em geral**, que buscam visualizações claras e atualizadas sobre as obras públicas, facilitando o acompanhamento e a fiscalização social.

Esta arquitetura busca proporcionar uma visualização mais clara para o usuário, com informações aprimoradas sobre as regiões administrativas (RA) e uma evolução no bot de Twitter para comunicação mais humanizada.

---

## 2. Histórico e Justificativas Técnicas

- O backend principal utiliza **Node.js**, em continuidade tecnológica com a versão anterior do sistema, permitindo reaproveitamento de código e da equipe técnica familiarizada com essa tecnologia.
- O armazenamento dos dados das obras públicas é feito em arquivos **JSON**, mantendo compatibilidade com o projeto passado e facilitando a simplicidade de manipulação local.

---

## 3. Arquitetura do Sistema

O sistema é organizado em três camadas principais:

### 3.1 Camada de Apresentação

- **Sistema Web:** Interface web que apresenta o mapa interativo das obras públicas, utilizando a API Leaflet.js para a visualização geográfica.
- **Usuário:** Cidadãos em geral interessados em consultar dados das obras no DF.

### 3.2 Camada de Aplicação (Backend)

- **Backend Node.js:** Responsável por consumir a API pública de obras, processar os dados e construir as visualizações do mapa.
- **Bot Python (Bot_X):** Automatiza o envio de tweets relatando anomalias detectadas nas obras, utilizando a API Tweepy e a inteligência artificial da Cohere para gerar mensagens humanizadas.

### 3.3 Camada de Dados

- **Fonte de dados:** API pública do governo que fornece dados atualizados sobre obras públicas.
- **Armazenamento:** Dados são salvos localmente em formato JSON, seguindo o padrão do sistema anterior.

---

## 4. Integrações e Fluxos

- O backend realiza chamadas à API de obras públicas, com frequência aproximada diária.
- O bot Python executa o monitoramento das informações e a geração dos tweets.
- A comunicação entre os componentes ocorre via consumo da API pública e armazenamento compartilhado em JSON.
- Integrações com APIs externas incluem:
  - API de Obras Públicas do DF.
  - Leaflet.js para visualização.
  - Tweepy para postagem na rede social X (antigo Twitter).
  - Cohere AI para geração de texto natural.

---

## 5. Segurança e Privacidade

- Todos os dados tratados são públicos, provenientes de fontes governamentais abertas.
- O gerenciamento das chaves de API (para Tweepy, Cohere etc.) é importante garantir que fiquem armazenadas de forma segura, idealmente via variáveis de ambiente ou arquivos `.env`.

---


---

## 6. Escalabilidade e Performance

- O sistema espera um número considerável de acessos simultâneos.
- A arquitetura atual é suficiente para o estágio atual do projeto, mas poderá ser revisada conforme o crescimento do uso.

---

## 7. Roadmap de Evolução

| Iteração | Funcionalidade                        | Justificativa                               |
|----------|-------------------------------------|---------------------------------------------|
| 1        | Integração com API da Região Administrativa (RA) | Melhor granularidade e precisão dos dados  |
| 2        | Módulo de gráficos estatísticos     | Visualização avançada do status das obras  |
| 3        | Filtros interativos no mapa         | Melhor experiência e personalização para o usuário |
| 4        | Melhor organização da interface     | Maior clareza e usabilidade para cidadãos  |


---

## 8. Decisões Arquiteturais

- Manutenção de Node.js no backend e JSON para armazenamento baseadas na continuidade do projeto anterior, visando reaproveitamento e facilidade de manutenção.
- Separação do bot em Python, possibilita uso específico de bibliotecas como Tweepy e Cohere.

---


