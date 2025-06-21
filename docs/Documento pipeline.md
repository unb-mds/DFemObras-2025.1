# Pipeline de Análise de Obras Públicas do DF

## 📌 Visão Geral

Este pipeline foi desenvolvido para coletar, processar, analisar e apresentar dados sobre obras públicas do Distrito Federal. O sistema visa promover transparência, identificar anomalias e oferecer uma interface acessível ao cidadão.

---

## 🧭 Etapas do Pipeline

### 1. Coleta de Dados

**Fontes:**
- Portais públicos de transparência (ex: Portal da Transparência do GDF)
- Redes sociais e RSS de órgãos governamentais
- APIs públicas

---

### 2. Processamento e Limpeza

**Ações realizadas:**
- Conversão de formatos (JSON, CSV, HTML)
- Padronização de campos (datas, números, status)
- Remoção de duplicatas e dados incompletos

**Bibliotecas utilizadas:**
- `pandas`
- `unidecode`


---

### 3. Armazenamento

**Método atual:**
- Armazenamento em arquivos `.csv` e `.json` organizados por data



---

### 4. Análise de Dados

**Objetivos:**
- Detectar anomalias em valores (obras com valores muito altos ou baixos)
- Verificar status de andamento
- Gerar indicadores (ex: obras atrasadas, em andamento, concluídas)

**Tecnologias:**
- Scripts Python com lógica de regras


---

### 5. Visualização

**Interface do usuário:**
- Mapa interativo com filtros por status, valor e localização
- Gráficos com dados agregados

**Ferramentas:**
- Front-end com JavaScript (e possivelmente Leaflet.js)
- Back-end com Python ou Node.js servindo dados via API

---

### 6. Divulgação e Integração

**Canais:**
- Redes sociais com postagens automatizadas (em desenvolvimento)
- Integração futura com bots para resposta a dúvidas

---

## 🛠 Tecnologias Utilizadas

- Python (pandas, requests, bs4)
- Node.js (para APIs)
- JavaScript (para visualização)
- HTML/CSS (interface básica)
- CSV/JSON (armazenamento)

---

## 🎯 Objetivos Finais

- Transparência pública
- Engajamento cidadão
- Monitoramento contínuo das obras
- Identificação proativa de problemas

---

