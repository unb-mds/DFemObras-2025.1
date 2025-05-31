
# API Obrasgov.br e Integração no Projeto DF em Obras

## 1. Introdução

A API **Obrasgov.br** é uma interface pública desenvolvida para fornecer dados transparentes e atualizados sobre obras públicas financiadas com recursos públicos no Brasil. Essa API faz parte do **Cadastro Integrado de Projetos de Investimento (CIPI)** e tem como principal objetivo facilitar o acesso e a integração dos dados para órgãos públicos, desenvolvedores e cidadãos interessados no monitoramento dessas obras.

O presente documento apresenta uma visão detalhada da API, suas principais funcionalidades e uma análise do uso prático da API no projeto **DF em Obras**, que utiliza dados da API para exibir obras públicas em um mapa interativo.

---

## 2. Visão Geral da API Obrasgov.br

### 2.1 Objetivos

- Promover a transparência e controle social sobre investimentos públicos em infraestrutura.
- Facilitar o monitoramento e fiscalização de obras por órgãos de controle e cidadãos.
- Permitir a integração com sistemas externos para análise e acompanhamento de projetos.

### 2.2 Funcionalidades Principais

| Funcionalidade           | Descrição                                                                                      |
|--------------------------|------------------------------------------------------------------------------------------------|
| Consulta de Projetos     | Recupera dados de projetos de investimento: identificação, localização, status, valores, etc. |
| Tabelas de Domínio       | Fornece listas padronizadas para classificação de obras, motivos de paralisação, tipos, etc.   |

### 2.3 Acesso e Autenticação

- A API de consulta pública é **aberta e não requer autenticação** para acesso aos dados.

### 2.4 Documentação Oficial e Recursos

- [Manual do Usuário (versão 1.6.2)](https://www.gov.br/transferegov/pt-br/obrasgov/doc/manual-do-usuario-obrasgovbr-2023_-v1-6-2.pdf)
- [Swagger UI interativo](https://api.obrasgov.gestao.gov.br/obrasgov/api/swagger-ui/index.html)
- Catálogo de APIs governamentais: [Consulta CIPI](https://www.gov.br/conecta/catalogo/apis/consulta-cadastro-integrado-de-projetos-de-investimentos-2013-obrasgov.br)

---

## 3. Uso da API no Projeto DF em Obras

### 3.1 Contexto do Projeto

O projeto **DF em Obras** tem como objetivo visualizar obras públicas do Distrito Federal em um mapa interativo, facilitando o acompanhamento da execução dos investimentos públicos.

### 3.2 Integração com a API Obrasgov.br

A API é utilizada para buscar informações atualizadas sobre obras públicas diretamente da base de dados oficial, permitindo uma visualização confiável e interativa no mapa. As informações extraídas incluem localização, valores, status e outras informações relevantes.

### 3.3 Como a API é chamada no projeto DF em Obras

A chamada para a API é realizada no arquivo:

```
TestesMapa/obrasgov/obras_map.js
```

Abaixo está um trecho do código responsável pela requisição dos dados:

```javascript
async function fetchObrasPorUF(uf, pagina = 0, tamanhoDaPagina = 5) {
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
```
## 4. Recursos da API ainda não utilizados no projeto original

Embora a versão atual do DF em Obras já consuma e exiba informações básicas das obras no mapa, a API oferece outros recursos que ainda **não foram explorados**, mas que **serão incorporados na nova versão** do projeto, com foco em melhorias funcionais e de usabilidade.

### 4.1 Filtros de Consulta

A API oferece suporte a filtros por:

- UF (Unidade Federativa)
- Município
- Status da obra
- Tipo de empreendimento
- Modalidade de execução
- Ano de início
- Entre outros

**Nova implementação prevista:**
Na próxima versão do DF em Obras, será incluído um painel de filtros interativos, permitindo ao usuário selecionar critérios e atualizar dinamicamente os dados exibidos no mapa.

### 4.2 Percentuais de Execução Física e Financeira

Os dados da API incluem:

- Percentual de execução física
- Percentual de execução financeira
- Valor empenhado x pago

**Nova implementação prevista:**
Será desenvolvido um **módulo gráfico**, permitindo a análise do andamento das obras de forma intuitiva.

Essa funcionalidade trará mais profundidade à visualização e facilitará o acompanhamento por cidadãos, pesquisadores e órgãos de fiscalização.

---

## 5. Considerações Finais

A API Obrasgov.br fornece um recurso poderoso e aberto para o acesso a dados de obras públicas no Brasil, incentivando transparência e controle social. Sua integração no projeto DF em Obras demonstra a aplicabilidade prática em soluções que promovem a visualização e análise desses dados de forma interativa e acessível.

A nova versão do projeto irá expandir consideravelmente o uso da API, com implementação de filtros avançados, visualização de percentuais de execução e geração de gráficos. Isso fortalecerá ainda mais o papel da aplicação como ferramenta de transparência e cidadania.
