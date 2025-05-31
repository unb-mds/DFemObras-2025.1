# Análise Técnica e Levantamento de Melhorias — Front-End

## 1. Introdução

Este documento apresenta uma análise das ferramentas utilizadas no desenvolvimento frontend do projeto **DF em Obras**, mantido no repositório [unb-mds/DFemObras](https://github.com/unb-mds/DFemObras). O objetivo é identificar as tecnologias empregadas, seu papel no projeto e possíveis observações quanto à escolha e uso dessas ferramentas.

---

## 2. Contexto

O projeto DF em Obras visa fornecer uma visualização pública de obras do Distrito Federal, com foco na transparência e acessibilidade da informação. A interface do usuário é disponibilizada como um site estático hospedado via GitHub Pages.

---

## 3. Ferramentas e Tecnologias Utilizadas

### 3.1 HTML, CSS e JavaScript

O frontend foi construído utilizando tecnologias fundamentais da web:

- **HTML5**: estruturação do conteúdo das páginas.
- **CSS**: estilização visual.
- **JavaScript vanilla**: manipulação da interface e lógica interativa.

### 3.2 Leaflet.js

A biblioteca [Leaflet.js](https://leafletjs.com/) é empregada para exibição de **mapas interativos**, permitindo a visualização georreferenciada das obras.

- Usada para renderização e interação com os dados geográficos no frontend.

---

## 4. Visão Geral da Interface

### 4.1 Página Inicial

![image](https://github.com/user-attachments/assets/9e308266-00d5-41a3-be34-e4e4a5c2eb57)


### 4.2 Visualização do Mapa

![image](https://github.com/user-attachments/assets/35e973eb-e9c2-41d3-8e01-784139aa3231)


### 4.3 Outros Componentes Visuais
- Página **Sobre o Projeto**
![image](https://github.com/user-attachments/assets/b928aa63-881b-4b3a-9db2-0cd11df00a07)

- Página **Obras em Atraso**
  ![image](https://github.com/user-attachments/assets/c4a48e6b-9ce3-4068-baf8-44db5d26ef67)


---

## 5. Melhorias Propostas

Com o objetivo de aprimorar a experiência do usuário e tornar o projeto DF em Obras mais informativo e acessível, foram propostas as seguintes melhorias para as próximas etapas de desenvolvimento:

### 5.1 Organização da Informação

- **Reestruturação da página de obras atrasadas**, com foco em melhorar a clareza, legibilidade e a hierarquia visual das informações apresentadas.
- Priorização das informações mais relevantes para os cidadãos, como prazos, valores e status da execução.

### 5.2 Ferramenta de Filtragem

- Implementação de um **sistema de filtros por status, região, tipo de obra, entre outros critérios**, permitindo que os usuários localizem obras específicas com mais rapidez e eficiência.
- Integração desses filtros com a visualização no mapa, atualizando os marcadores dinamicamente.

### 5.3 Acessibilidade

- Inclusão de uma **ferramenta de ajuste de fonte e contraste**.
- Facilitação do uso por pessoas com baixa visão ou outras limitações visuais, promovendo uma experiência mais inclusiva.

### 5.4 Experiência com o Mapa

- Otimização da experiência com a visualização no mapa, garantindo carregamento mais rápido, agrupamento de marcadores e melhores descrições nas interações com os ícones.
- Ajustes na responsividade do mapa para dispositivos móveis.

### 5.5 Página de Gráficos

- Criação de uma nova **página de gráficos interativos** que apresente dados agregados das obras públicas.
- Exemplos de informações que serão exibidas:
  - Distribuição de obras por status (em andamento, atrasadas, concluídas).
  - Custo total.
Essas melhorias visam tornar o sistema mais informativo, acessível e amigável, atendendo melhor às necessidades da população e fortalecendo a transparência pública.

## 6. Conclusão

O frontend do DF em Obras utiliza uma abordagem simples com HTML, CSS, JavaScript puro e a biblioteca Leaflet.js para mapas interativos. Essa escolha favorece a manutenção e facilita o entendimento por novos colaboradores.

A nova versão do projeto tem como foco melhorar a organização das informações, a usabilidade do mapa, a acessibilidade para usuárias com limitações visuais e a inclusão de gráficos para visualização de dados sobre as obras.

