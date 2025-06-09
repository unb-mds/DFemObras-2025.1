# 📄 Guia de Uso do Linter (ESLint) no Projeto DFemObras-2025.1

## 📌 O que é um Linter?

Um **linter** é uma ferramenta de análise estática de código que verifica automaticamente se o código-fonte está em conformidade com determinadas regras de estilo, padrões de boas práticas e possíveis erros. Ele aponta problemas antes mesmo do código ser executado ou testado.

---

## 🎯 Por que utilizar um Linter?

### ✅ **Padronização de Código**

- Uniformiza a escrita do código, independentemente do desenvolvedor.
- Facilita revisões (code review).

### ✅ **Redução de Bugs**

- Detecta variáveis não usadas, escopos incorretos, entre outros.

### ✅ **Facilidade na Manutenção**

- Código mais limpo e legível.

### ✅ **Melhoria da Qualidade**

- Garante boas práticas de desenvolvimento.

---

## 🛠️ Como utilizar o ESLint no Projeto DFemObras-2025.1

### 1. Acesse a raiz do projeto

```bash
cd /(caminho para)/DFemObras-2025.1
```

### 2. Inicialize o projeto Node

```bash
npm init -y
```

### 3. Instale o ESLint

```bash
npm install eslint --save-dev
```

### 4. Inicialize o ESLint

```bash
npx eslint --init
```

### Perguntas reais do ESLint:

```bash
✔ How would you like to use ESLint? ·
❯ To check syntax and find problems

✔ What type of modules does your project use? ·
❯ JavaScript modules (import/export)

✔ Which framework does your project use? ·
❯ None of these

✔ Does your project use TypeScript? ·
❯ No

✔ Where does your code run? ·
❯ Browser, Node

✔ How would you like to define a style for your project? ·
❯ Use a popular style guide

✔ Which style guide do you want to follow? ·
❯ Airbnb

✔ What format do you want your config file to be in? ·
❯ JSON
```

Ao final, o ESLint perguntará se deve instalar dependências com o npm. Responda **Sim**.

### 5. Rodar o ESLint

```bash
npx eslint js/             # Verifica erros
npx eslint js/ --fix       # Corrige automaticamente
```

### 6. Ignorar arquivos/pastas desnecessários

Crie um arquivo `.eslintignore`:

```
node_modules/
dist/
```

### 7. Adicionar scripts ao `package.json`

```json
"scripts": {
  "lint": "eslint js/",
  "lint:fix": "eslint js/ --fix"
}
```

---

## 🧪 Exemplo de Uso do ESLint

### Antes (sem linting)

```jsx
function carregarDados() {
let dados = fetch("api/obras").then(res => res.json())
console.log(dados)
}
```

### Depois (com ESLint)

```jsx
async function carregarDados() {
  try {
    const resposta = await fetch("api/obras");
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error("Erro ao carregar dados:", erro);
  }
}
```

Diferenças:

- Indentação padronizada
- Uso adequado de `const`
- Uso de `async/await`
- Tratamento de erros
- Melhor legibilidade

---

## 🤖 Automatizando o ESLint no Projeto

### 1. Executar ESLint antes de commits — Git Hooks com Husky

O Husky permite rodar scripts antes de um commit ou push, bloqueando commits com erros de lint.

**Passos básicos:**

```bash
npm install husky --save-dev
npx husky install
```

No `package.json`, adicione o script:

```json
"scripts": {
  "prepare": "husky install"
}
```

Ative o hook de pré-commit para rodar o lint:

```bash
npx husky add .husky/pre-commit "npm run lint"
```

Agora, toda vez que alguém tentar fazer um commit, o ESLint será executado. Se houver erros, o commit será bloqueado até a correção.

---

### 2. Automatizar no CI/CD com GitHub Actions

Configure seu pipeline para rodar ESLint automaticamente a cada push ou pull request.

Exemplo básico do arquivo `.github/workflows/lint.yml`:

```yaml
name: Lint

on: [push, pull_request]

jobs:
  eslint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run lint
```

Assim, qualquer Pull Request que quebre o padrão do código será identificado antes da aprovação.

---

### 3. Configurar IDE para lint automático

IDEs modernas, como VS Code, podem integrar o ESLint para:

- Mostrar erros em tempo real enquanto você digita.
- Aplicar correções automáticas ao salvar o arquivo.

No VS Code, instale a extensão ESLint e configure no `settings.json`:

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true}
```

---

## 📌 Conclusão

Integrar e automatizar o ESLint no DFemObras-2025.1 garante qualidade, padronização e manutenibilidade do código, facilitando o trabalho da equipe e evitando problemas futuros. Recomendamos fortemente sua adoção no fluxo de desenvolvimento e integração contínua.
