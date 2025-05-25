# Documento de Requisitos

## **1. Introdução**

Este documento descreve os requisitos funcionais e não funcionais para a evolução da aplicação web *DF em Obras.* O objetivo é tornar o sistema mais acessível, intuitivo e informativo, proporcionando uma melhor experiência ao usuário e maior transparência na exibição de dados.

---

## **2. Requisitos Funcionais**

### **2.1 Página de Obras Atrasadas**

**Objetivo:** Melhorar a usabilidade e clareza da página de obras.

**Requisitos:**

- RF01: As informações devem ser organizadas e visualmente intuitivas.
- RF02: O sistema deve mostrar o motivo de atraso de cada obra.
- RF03: Para obras concluídas, o sistema deve exibir o valor final e o valor inicial, permitindo comparação.

**User Stories:**

- US 1.1.1 Como usuário, quero ver as informações das obras atrasadas de forma organizada para entender rapidamente a situação.
- US 1.1.2 Como cidadão, quero ver o motivo de cada obra estar atrasada para que eu entenda a situação com mais transparência.
- US 1.1.3 Como cidadão, quero comparar o valor final e o valor inicial de obras concluídas para entender se houve aumento de custo.

---

### **2.2 Mapa Responsivo com Filtros**

**Objetivo:** Melhorar o mapa de obras com filtros interativos.

**Filtros:**

- Por Região Administrativa (RA).
- Por status: obras concluídas / inacabadas.
- Por ano de início da obra.
- Por valor mínimo/máximo da obra (filtro a confirmar).

**Requisitos:**

- RF04: Cores do mapa devem estar de acordo com o status das obras.
- RF05: O mapa deve ser responsivo.

**User Stories:**

- US 2.2.1 Como usuário, quero acessar o mapa em qualquer dispositivo (PC, celular, tablet).
- US 2.2.2 Como usuário, quero filtrar obras por RA para ver as que me interessam.
- US 2.2.3 Como usuário, quero filtrar obras por status (concluída ou inacabada).
- US 2.2.4 Como usuário, quero filtrar obras por ano de início para comparar entre períodos.
- US 2.2.5 Como usuário, quero definir um intervalo de valor mínimo/máximo das obras para entender os investimentos por faixa de valor.
- US 2.2.6 Como usuário, quero que as cores do mapa sejam condizentes com o status da obra, facilitando a visualização.

---

### **2.3 Acessibilidade**

**Objetivo:** Garantir acessibilidade para todos os usuários.

**Requisitos:**

- RF06: Opção para o usuário aumentar o tamanho da fonte.
- RF07: Disponibilizar modo de alto contraste.
- RF08: Melhorar a comunicação entre o usuário e o sistema, com telas mais intuitivas e navegação facilitada.

**User Stories:**

- US 3.3.1 Como usuário com baixa visão, quero aumentar o tamanho da fonte para ler melhor os textos.
- US 3.3.2 Como usuário com sensibilidade visual, quero ativar um modo de alto contraste para navegar confortavelmente.

---

### **2.4 Comunicação e Visualização dos Dados**

**Objetivo:** Melhorar a comunicação visual com gráficos e redes sociais.

**Gráficos desejados:**

- Proporção de obras concluídas x inacabadas.
- Valor total gasto com obras atrasadas.
- Valor total gasto com obras concluídas.

**Requisitos:**

- RF09: O bot do Twitter deve publicar os gráficos de gasto, informando o valor gasto com obras atrasadas.

**User Stories:**

- US 4.4.1 Como cidadão, quero ver gráficos que mostrem a proporção de obras concluídas vs inacabadas.
- US 4.4.2 Como cidadão, quero ver gráficos que mostrem o valor total gasto com obras atrasadas.
- US 4.4.3 Como cidadão, quero ver gráficos que mostrem o valor total gasto com obras concluídas.
- US 4.4.4 Como cidadão que acompanha o projeto no Twitter, quero que o bot publique os gráficos com os valores atualizados automaticamente.

---

## **3. Requisitos Não Funcionais**

**Objetivo:** Requisitos técnicos.

**Requisitos:**

- RNF01: O site deve ser responsivo, funcionando corretamente em dispositivos móveis, tablets e desktops.
- RNF02: O código-fonte deve seguir o padrão de codificação definido pela equipe de desenvolvimento, garantindo legibilidade e manutenibilidade.
- RNF03: O sistema deve ser compatível com as duas últimas versões dos navegadores Google Chrome e Mozilla Firefox.
- RNF04: Melhorar navegação e usabilidade geral.

---

## **4. Backlog do Projeto**

### **Épico 1: Melhorar a usabilidade e clareza da página de obras**

- User Stories descritas na seção 2.1

### **Épico 2: Melhorar o mapa de obras com filtros interativos**

- User Stories descritas na seção 2.2

### **Épico 3: Garantir acessibilidade para todos os usuários**

- User Stories descritas na seção 2.3

### **Épico 4: Melhorar a comunicação visual com gráficos e redes sociais**

- User Stories descritas na seção 2.4

### **Épico 5: Requisitos técnicos**

**Tarefas técnicas:**

- Tornar o site responsivo em diferentes tamanhos de tela.
- Padronizar o código conforme as diretrizes da equipe.
- Garantir compatibilidade com as duas últimas versões do Chrome e Firefox.
- Reorganizar menus e navegação.