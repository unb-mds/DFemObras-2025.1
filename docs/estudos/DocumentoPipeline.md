# 🏗️ Pipeline de Análise de Obras Públicas do Distrito Federal

## 📖 Introdução

Este documento descreve o pipeline do **Sistema de Análise de Obras Públicas do DF**, uma solução desenvolvida para coletar, processar, analisar e divulgar dados relacionados a obras públicas. O objetivo central é promover a **transparência**, o **monitoramento inteligente** e o **acesso fácil à informação** para gestores e cidadãos.

---

## 🔁 Visão Geral do Pipeline

O pipeline é composto por seis etapas principais:

1. **Coleta de Dados**
2. **Processamento e Limpeza**
3. **Armazenamento**
4. **Análise Automatizada**
5. **Visualização Interativa**
6. **Divulgação e Integração com Usuários**

---

## 1. 📥 Coleta de Dados

### Fontes utilizadas:
- Portais governamentais
- APIs públicas de obras e orçamento
- Redes sociais e canais institucionais

### Tecnologias aplicadas:
- Python: `requests`, `BeautifulSoup`, `json`
- Agendamento automático: `schedule`, `cron`

---

## 2. 🧹 Processamento e Limpeza

### Atividades realizadas:
- Normalização de campos
- Conversão entre formatos 
- Tratamento de inconsistências e dados ausentes
- Validação de tipos e estruturas

### Ferramentas:
- `pandas` para manipulação de dados


---

## 3. 💾 Armazenamento

### Estrutura atual:
- Dados salvos em arquivos `.csv` e `.json` organizados por data e tipo

### Considerações:
- Estrutura leve e de fácil transporte


---

## 4. 📊 Análise Automatizada

### Objetivos:
- Identificar obras com possíveis anomalias 
- Classificar status de obras
- Gerar indicadores e KPIs

### Tecnologias:
- Scripts Python com regras lógicas
- Possibilidade de uso futuro de algoritmos de machine learning

---

## 5. 🗺️ Visualização Interativa

### Componentes:
- Mapa dinâmico com geolocalização das obras
- Filtros por status, tipo de obra, região administrativa, valor e data
- Gráficos e dashboards com dados resumidos

### Tecnologias:
- Front-end: JavaScript, Leaflet.js ou Mapbox
- API de dados: Python (Flask/FastAPI) ou Node.js
- Estilização com HTML/CSS e bibliotecas gráficas

---

## 6. 📣 Divulgação e Integração

### Canais previstos:
- Postagens automatizadas em redes sociais
- Respostas via bot a perguntas frequentes da população


---

## ⚙️ Tecnologias Utilizadas

| Categoria           | Ferramentas/Frameworks          |
|---------------------|----------------------------------|
| Linguagens          | Python, JavaScript, Node.js      |
| Coleta de dados     | requests, BeautifulSoup, cron    |
| Processamento       | pandas, unidecode, regex         |
| Armazenamento       | CSV, JSON                        |
| Visualização        | Leaflet.js, HTML/CSS             |
| API e Integração    | Flask, FastAPI ou Express        |

---

## 🎯 Benefícios Esperados

- ✅ Aumento da transparência pública
- ✅ Monitoramento contínuo e em tempo real
- ✅ Apoio à fiscalização e tomada de decisão
- ✅ Engajamento da sociedade civil
- ✅ Redução de fraudes, atrasos e sobrecustos

---


