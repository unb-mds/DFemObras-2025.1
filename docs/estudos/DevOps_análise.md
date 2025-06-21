# **Análise Técnica e Levantamento de Melhorias — DevOps**

## ✨ Visão Geral

O projeto **DF em Obras** faz uso extensivo de práticas DevOps por meio de workflows do GitHub Actions, scripts automatizados e organização de dependências. Abaixo está documentada a análise das funções DevOps aplicadas no repositório.

---

## Ferramentas Utilizadas

- **GitHub Actions**: Plataforma de automação para CI/CD.
- **Node.js**: Ambiente de execução para scripts JavaScript.
- **Python + Tweepy**: Utilizado por bots automatizados.
- **Cohere API**: Geração de texto via IA.
- **GitHub Pages**: Publicação de páginas web estáticas.

---

## Testes Automatizados

### 1. [Testes Unitários do `map.js`](https://github.com/unb-mds/DFemObras/blob/main/.github/workflows/test_map.yml)

```yaml
name: Testes unitários do map.js
```

**Descrição**: Executa testes usando o `Jest` com cobertura de código, sempre que há *push* para a branch `main` ou execução manual via `workflow_dispatch`.

**Etapas principais**:

- Instalação de dependências com `npm install`.
- Execução dos testes com `npx jest --coverage`.

**Boas práticas DevOps**:

- Garantir qualidade contínua do código JavaScript com testes automatizados.
- Integrar testes ao pipeline de CI.

---

## Geração e Publicação de Arquivo JSON

### 2. [Workflow: `ci: gerar-json-obras`](https://github.com/unb-mds/DFemObras/blob/main/.github/workflows/gerar-json.yml)

```yaml
name: "ci: gerar-json-obras"
```

**Frequência**: Diariamente (`cron`) e via execução manual.

```yaml
on:
schedule:
- cron: '0 0 * * *' # Executa o workflow diariamente à meia-noite UTC
workflow_dispatch: # Permite execução manual do workflow
```

**Função**:

- Executa o script `obras_map.js` para gerar um arquivo JSON com informações de obras.
- Comita e envia o arquivo atualizado automaticamente para o repositório.
- Publica o conteúdo na *GitHub Pages*.

**Boas práticas DevOps**:

- Atualização automática de dados.
- Deploy contínuo para visualização pública via GitHub Pages.
- Configuração segura com nome de bot e email do GitHub Actions.

---

## Automatização com Bot Twitter

### 3. [Workflow: `Test Bot_Twitter`](https://github.com/unb-mds/DFemObras/blob/main/.github/workflows/test_bot_Twitter.yml)

```yaml
name: Test Bot_Twitter
```

**Descrição**: Executa testes automatizados no script Python responsável por interagir com a API da Cohere e com o Twitter.

**Recursos**:

- Instala dependências Python a partir de `requirements.txt`.
- Roda testes com `pytest`.

**Boas práticas DevOps**:

- Validar funcionamento do bot antes do deploy.
- Evitar falhas de publicação.

---

### 4. [Workflow: `Weekly Run Bot`](https://github.com/unb-mds/DFemObras/blob/main/.github/workflows/weekly_run_bot_Twitter.yml)

```yaml
name: Weekly Run Bot
```

**Frequência**: Executado semanalmente às quartas-feiras às 11h UTC.

```yaml
on:
  workflow_dispatch:
  schedule:
    - cron: '0 11 * * 3'

jobs:
  weekly_run:
    runs-on: ubuntu-latest
```

**Função**:

- Executa o bot Twitter (`bot_Twitter.py`) automaticamente.
- Gera e comita o arquivo `anomalias.html`.

**Boas práticas DevOps**:

- Automatização de tarefas recorrentes.

---

## Gerenciamento de Dependências

### Arquivo `requirements.txt` (Bots)

```
cohere==4.9.0
tweepy==4.14.0
python-dotenv==1.0.0
Pillow==10.0.1
python-dateutil==2.8.2
requests==2.31.0
```

**Função**: Define as bibliotecas necessárias para execução do bot e automações.

**Função de cada pacote:**

- `cohere`: gera textos automáticos para o Twitter
- `tweepy`: integração com a API do Twitter/X
- `python-dotenv`: gestão de variáveis sensíveis via `.env`
- `Pillow`: geração e edição de imagens
- `python-dateutil`: manipulação flexível de datas
- `requests`: requisições HTTP para APIs externas

**Boas práticas DevOps**:

- Documentação clara de dependências para facilitar o versionamento e reprodutibilidade dos ambientes.

---

## Práticas DevOps Identificadas

| Prática | Exemplo no Repositório |
| --- | --- |
| Integração Contínua (CI) | Testes com Jest e Pytest via GitHub Actions |
| Entrega Contínua (CD) | Atualização do JSON e anomalias.html automáticos |
| Deploy Automatizado | Publicação no GitHub Pages |
| Scripts Agendados | Uso de `cron` para execuções semanais e diárias |

---

## Conclusão

O repositório DFemObras implementa com sucesso várias práticas DevOps modernas, como automação de testes, integração e entrega contínua, uso de pipelines CI/CD e publicação contínua de artefatos. Isso garante maior confiabilidade, manutenção e escalabilidade do projeto.
