# Documento Técnico – Back-end do Projeto "DF em Obras"

## 1. Visão Geral do Projeto

Sistema que exibe um mapa interativo do Distrito Federal com a localização de obras públicas. Cada obra inclui dados como status, valor e situação (em andamento, atrasada, etc.). O objetivo é aumentar a transparência e permitir fácil acompanhamento das obras pela população.

## 2. Arquitetura do Back-end

O sistema é composto por três componentes principais:

### 2.1. Bot do Twitter (Python)

- Desenvolvido em Python usando a biblioteca Tweepy (a confirmar).  
- É responsável por identificar obras com status "atrasada" e publicar atualizações automáticas no Twitter.  
- Consome dados diretamente dos arquivos gerados ou formatados via API Node.js.  
- Pode ser executado como um serviço agendado (ex.: cron) para postagens periódicas.

**Exemplo de tweet automático:**

> Obra “Recapeamento da via W3 Sul” está atrasada há 75 dias. Valor total: R$ 3.200.000. #ObrasDF #Transparência

### 2.2. API Node.js (Serviço de Dados e Visualização)

- Responsável por buscar os dados das obras diretamente da fonte (ex: API pública do governo) e formatá-los para o front-end.  
- Realiza chamadas à API do governo para obter dados atualizados.  
- Também fornece esses dados ao front-end (mapa) e ao bot Python, se necessário.

### 2.3. Módulos Python para Análise

- Além do bot, o Python também será usado para análises e geração de gráficos, utilizando bibliotecas como **Pandas** e **Matplotlib**.

## 3. Armazenamento de Dados

Os dados são armazenados localmente em arquivos `.json`, organizados por tipo ou data de atualização.

**Exemplo de estrutura:**

/data/ obras.json categorias.json historico_atrasos.json

## 4. Comunicação Entre Componentes

- O Node.js atua como coletor e formatador dos dados, e serve tanto o front-end quanto o bot.  
- O Python (bot) consome os dados gerados pelo Node.js, seja via HTTP ou leitura direta de arquivos.

## 5. Segurança e Manutenção

- Autenticação com token para proteger o endpoint usado pelo bot (evita uso indevido).  
- CORS configurado apenas para domínios confiáveis.

## 6. Extensões Futuras

- Dashboard administrativo para gestão de dados.  
- Gráficos e indicadores (ex: número de obras por status, por região, por valor total, etc.).
