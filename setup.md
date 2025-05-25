# Guia de Configuração - DF em Obras

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

Navegue até o diretório da API:
```bash
cd TestesMapa/obrasgov
```

Instale as dependências:
```bash
npm install
```

Execute os testes da API:
```bash
npm test
```

Execute os testes com cobertura:
```bash
npm test:coverage
```

Rode localmente: 
```bash
node obras_map.js
```

### 3. Configuração do Frontend

O frontend é um site estático que pode ser servido usando qualquer servidor web. Você pode:

1. Abrir diretamente no navegador:
   - Navegue até o diretório raiz do projeto
   - Abra o arquivo `index.html` no seu navegador

2. Usar um servidor de desenvolvimento local (recomendado):
   ```bash
   # Usando Python (se instalado)
   python -m http.server 8000

   # Usando Node.js
   npx serve
   ```

## 📁 Estrutura do Projeto

```
TestesMapa/
├── obrasgov/         # Arquivos da API
│   ├── src/          # Código fonte
│   ├── tests/        # Arquivos de teste
│   └── package.json  # Dependências
├── documentação/     # Documentação
├── js/              # JavaScript do Frontend
└── css/             # Estilos do Frontend
```


## 👥 Equipe

Consulte o [README.md](README.md) para a lista completa da equipe e mais detalhes do projeto.

## ❗ Observações

- Certifique-se de que todas as dependências foram instaladas corretamente
- Em caso de problemas, verifique se as versões do Node.js e NPM estão atualizadas
- Para desenvolvimento, recomenda-se usar o Visual Studio Code com as extensões recomendadas no projeto