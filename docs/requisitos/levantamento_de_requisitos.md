# Documento de Requisitos

## 1. Introdução
Este documento descreve os requisitos funcionais e não funcionais para o aprimoramento do sistema de acompanhamento de obras públicas. O objetivo é tornar o sistema mais acessível, intuitivo e informativo, proporcionando uma melhor experiência ao usuário e maior transparência na exibição de dados.

---

## 2. Requisitos Funcionais

### 2.1 Página de Obras Atrasadas
**Objetivo:** Melhorar o design e a usabilidade da página de obras atrasadas.

**Requisitos:**
- As informações devem ser organizadas e visualmente intuitivas.
- O sistema deve mostrar o **motivo de atraso** de cada obra.
- Para obras concluídas, o sistema deve exibir o **valor final** e o **valor inicial**, permitindo comparação.

**User Stories:**
- Como **usuário**, quero ver as informações das obras atrasadas de forma organizada para entender rapidamente a situação.
- Como **cidadão**, quero ver o motivo de cada obra estar atrasada para ter mais transparência.
- Como **cidadão**, quero comparar o valor final e o valor inicial de obras concluídas para entender se houve aumento de custo.

---

### 2.2 Mapa Responsivo com Filtros
**Objetivo:** Fornecer um mapa interativo com filtros que facilitem a visualização das obras.

**Filtros:**
- Por **Região Administrativa (RA)**.
- Por **status**: obras concluídas / inacabadas.
- Por **ano de início** da obra.
- Por **valor mínimo/máximo** da obra (filtro a confirmar).

**Outros Requisitos:**
- Cores do mapa devem estar de acordo com o status das obras.
- O mapa deve ser responsivo.

**User Stories:**
- Como **usuário**, quero acessar o mapa em qualquer dispositivo (PC, celular, tablet).
- Como **usuário**, quero filtrar obras por RA para ver as que me interessam.
- Como **usuário**, quero filtrar obras por status (concluída ou inacabada).
- Como **usuário**, quero filtrar obras por ano de início para comparar entre períodos.
- Como **usuário**, quero definir um intervalo de valor mínimo/máximo das obras para entender os investimentos por faixa de valor.
- Como **usuário**, quero que as cores do mapa sejam condizentes com o status da obra, facilitando a visualização.

---

### 2.3 Acessibilidade
**Objetivo:** Tornar o sistema acessível a todos os usuários, independentemente de suas limitações visuais.

**Requisitos:**
- Opção para o usuário **aumentar o tamanho da fonte**.
- Disponibilizar **modo de alto contraste**.
- Melhorar a comunicação entre o usuário e o sistema, com **telas mais intuitivas** e **navegação facilitada**.

**User Stories:**
- Como **usuário com baixa visão**, quero aumentar o tamanho da fonte para ler melhor os textos.
- Como **usuário com sensibilidade visual**, quero ativar um modo de alto contraste para navegar confortavelmente.

---

### 2.4 Comunicação e Visualização dos Dados
**Objetivo:** Aprimorar a comunicação visual dos dados por meio de gráficos e redes sociais.

**Gráficos desejados:**
- Proporção de **obras concluídas x inacabadas**.
- **Valor total gasto** com obras atrasadas.
- **Valor total gasto** com obras concluídas.

**Integração com Twitter:**
- O bot do Twitter deve **publicar os gráficos de gasto**, informando o valor gasto com obras atrasadas.

**User Stories:**
- Como **cidadão**, quero ver gráficos que mostrem a proporção de obras concluídas vs inacabadas.
- Como **cidadão**, quero ver gráficos que mostrem o valor total gasto com obras atrasadas.
- Como **cidadão**, quero ver gráficos que mostrem o valor total gasto com obras concluídas.
- Como **cidadão que acompanha o projeto no Twitter**, quero que o bot publique os gráficos com os valores atualizados automaticamente.

---

## 3. Requisitos Não Funcionais
**Objetivo:** Garantir qualidade técnica, desempenho e compatibilidade do sistema.

**Requisitos:**
- O site deve ser **responsivo**, funcionando corretamente em dispositivos móveis, tablets e desktops.
- O **código-fonte** deve seguir o **padrão de codificação** definido pela equipe de desenvolvimento, garantindo legibilidade e manutenibilidade.
- O sistema deve ser **compatível com as duas últimas versões** dos navegadores **Google Chrome** e **Mozilla Firefox**.

---

## 4. Backlog do Projeto

### Épico 1: Melhorar a usabilidade e clareza da página de obras
- User Stories já descritas no item 2.1

### Épico 2: Melhorar o mapa de obras com filtros interativos
- User Stories já descritas no item 2.2

### Épico 3: Garantir acessibilidade para todos os usuários
- User Stories já descritas no item 2.3

### Épico 4: Melhorar a comunicação visual com gráficos e redes sociais
- User Stories já descritas no item 2.4

### Épico 5: Requisitos técnicos
**Tarefas técnicas:**
- Tornar o site responsivo em diferentes tamanhos de tela.
- Padronizar o código conforme as diretrizes da equipe.
- Garantir compatibilidade com as duas últimas versões do Chrome e Firefox.




