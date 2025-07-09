# DF em Obras – Transparência e Monitoramento de Obras Públicas no Distrito Federal


## 📑 Descrição do Projeto
Este projeto consiste na evolução do projeto DF em Obras, uma plataforma para análise e monitoramento das obras públicas do Distrito Federal. O objetivo é oferecer uma ferramenta acessível para cidadãos, estudantes e profissionais acompanharem o andamento, status e gastos das obras, promovendo transparência e controle social.

## 📌 Objetivos
- Monitorar e organizar dados públicos sobre obras no DF.  
- Visualizar informações de forma clara e intuitiva.  
- Promover transparência e engajamento da sociedade no acompanhamento das obras.  
- Aplicar práticas colaborativas de desenvolvimento usando Git e GitHub, conforme discutido na disciplina.

## 🚀 Melhorias em Desenvolvimento
- Implementação de **filtros por Região Administrativa**, permitindo uma busca mais precisa das obras por localidade.
- Implementação de **filtros por status da obra**, categorizando como:  
  ✅ Finalizada  
  🚧 Em construção  
  ⏳ Atrasada  
- **Melhoria no bot do X (Twitter)**, que permitirá atualizações automáticas mais completas, com gráficos, informações detalhadas e maior alcance de dados para os usuários.

## ⚙️ Tecnologias Utilizadas
- **HTML, CSS e JavaScript** para o front-end.  
- **Frameworks e bibliotecas para mapas interativos e gráficos** no front-end.  
- **Python, Pandas e Matplotlib** para processamento de dados e geração de gráficos estatísticos.  
- **Node.js** e **NPM** para gerenciamento do backend da API.  
- **API Nominatim (OpenStreetMap)** para geocodificação de endereços e filtragem por Região Administrativa.  

---

## 👥 Equipe

| Nome | GitHub |
|------|--------|
| Beatriz Figueiredo dos Santos | [BeatrizSants](https://github.com/BeatrizSants) |
| Heloisa Laura Santos Silva | [Heloisa-Santos](https://github.com/Heloisa-Santos) |
| Laura Rogelin Lisboa Silva | [Laurarogelin](https://github.com/laurarogelin) |
| Leonardo Rodrigues Martins | [Antedeguemon21](https://github.com/Antedeguemon21) |
| Lucas de Oliveira Rodrigues | [LORliveira](https://github.com/LORliveira) |
| Pedro Henrique Conceição de Souza | [PedroHenriqueCo](https://github.com/PedroHenriqueCo) |
| Samuel Alessandro Lima dos Santos | [samuel-a-santos](https://github.com/samuel-a-santos) |

🗂️ **Documentação**: [LandingPage](https://unb-mds.github.io/DFemObras-2025.1/TestesMapa/documentação/index.html), [StoryMap](https://miro.com/app/board/uXjVI47Atug=/)

# 🛠 Guia de Configuração - DF em Obras

## 📋 Pré-requisitos
- Node.js (versão LTS mais recente)  
- NPM (vem com o Node.js)  
- Git  

## 🚀 Instalação e Configuração

### 1. Clone o repositório
```bash
git clone https://github.com/unb-mds/2025-1-Squad11.git
cd 2025-1-Squad11
```

### 2. Configuração da API (Backend)

- Navegue até o diretório da API

```bash
cd TestesMapa/obrasgov
```

- Instale as dependências

```bash
npm install
```

- Execute os testes da API

```bash
npm test
```

- Execute os testes com cobertura

```bash
npm test:coverage
```

- Rode localmente

```bash
node obras_map.js
```


### 3. Configuração do Frontend

O frontend é um site estático que pode ser servido usando qualquer servidor web. Você pode:

1. Abrir diretamente no navegador:
   - Navegue até o diretório raiz do projeto
   - Abra o arquivo `index.html`no seu navegador

2. Usar um servidor de desenvolvimento local (recomendado):
   bash
   ### Usando Python (se instalado)
   ```bash
   python -m http.server 8000
   ```

   ### Usando Node.js
    ```bash
   npx serve
     ```
   


## 📁 Estrutura do Projeto

```
TestesMapa/
│
├── obrasgov/           → Backend da API
│   ├── src/            → Código fonte da API
│   ├── tests/          → Testes automatizados
│   └── package.json    → Dependências e scripts do Node.js
│
├── documentação/       → Documentação do projeto
├── js/                 → Scripts JavaScript do frontend
├── css/                → Estilos CSS do frontend
└── index.html          → Página inicial do site
```



# ❗ Observações

- Certifique-se de que todas as dependências foram instaladas corretamente
- Em caso de problemas, verifique se as versões do Node.js e NPM estão atualizadas
- Para desenvolvimento, recomenda-se usar o Visual Studio Code com as extensões recomendadas no projeto





 


