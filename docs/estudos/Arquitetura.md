# ARQUITETURA DE SOFTWARE – RESUMO ESSENCIAL

## O que é Arquitetura de Software

Arquitetura de software é a **estrutura fundamental** de um sistema de software, composta por seus **componentes**, suas **relações** e os **princípios** que orientam seu design e evolução. É como um “**projeto mestre**” que guia decisões técnicas de alto nível, como:

- Divisão de responsabilidades  
- Comunicação entre módulos  
- Escolha de tecnologias  

---

## Por que é importante

- 🏗️ **Organização e Escalabilidade**: facilita a manutenção, escalabilidade e evolução do sistema.  
- 🔁 **Reuso e Flexibilidade**: permite reutilizar componentes e adaptar o sistema com menos esforço.  
- 💬 **Comunicação Técnica**: serve como linguagem comum entre desenvolvedores, gerentes e stakeholders.  
- ⚠️ **Gerenciamento de Riscos**: ajuda a identificar e mitigar riscos técnicos precocemente.  
- 🚀 **Performance e Qualidade**: impacta diretamente requisitos não-funcionais como desempenho, segurança e confiabilidade.

---

## Principais Estilos Arquiteturais

### 1. Monolítica
- Sistema em um único bloco.  
- Simples para iniciar, mas difícil de escalar e manter.  
- **Exemplo**: aplicações com frameworks como Spring Boot (sem modularização).

### 2. Camadas (Layered)
- Separação lógica em camadas: apresentação, lógica de negócio, acesso a dados.  
- Facilita manutenção e testes.  
- **Exemplo**: Java EE, ASP.NET MVC.

### 3. Cliente-Servidor
- Separação entre cliente (UI) e servidor (lógica/BD).  
- Base para sistemas web e móveis.  
- **Exemplo**: Frontend com React, backend com Node.js ou Django.

### 4. Microserviços
- Sistema dividido em serviços pequenos e independentes.  
- Altamente escalável, mas mais complexo.  
- **Frameworks**: Spring Cloud, Micronaut, Quarkus, Node.js com Express.

### 5. Arquitetura Orientada a Serviços (SOA)
- Similar a microserviços, com foco em interoperabilidade e reuso via serviços bem definidos (frequentemente via SOAP).  
- **Exemplo**: sistemas corporativos com WS-* (Web Services).

### 6. Event-Driven (Orientada a Eventos)
- Componentes reagem a eventos.  
- Boa para sistemas reativos e com alta concorrência.  
- **Frameworks**: Kafka, RabbitMQ, Akka.

### 7. Serverless
- Código executado sob demanda na nuvem, sem gerenciamento de servidor.  
- Escalabilidade automática.  
- **Exemplo**: AWS Lambda, Azure Functions.

---

## Arquitetura vs Frameworks

- **Arquitetura** define a **organização do sistema**.  
- **Frameworks** implementam **padrões arquiteturais** e fornecem **ferramentas** para aplicá-los.  
- Um mesmo framework pode suportar **múltiplas arquiteturas**.  
  - Ex: Spring Boot → usado em arquiteturas monolíticas ou de microserviços.  
- A escolha do framework deve **alinhar-se à arquitetura proposta** e aos **requisitos do projeto**.

---

## Outros Tópicos Relevantes

- 🧩 **Design Patterns**: Soluções reutilizáveis a problemas recorrentes (ex: MVC, Singleton, Factory).  
- 📄 **Documentação Arquitetural**: Diagramas (C4, UML), decisões arquiteturais (ADR), e justificativas técnicas.  
- 🧪 **Qualidade Arquitetural**: Avaliada com base em atributos como modularidade, coesão, acoplamento e testabilidade.  
- 🔄 **Arquitetura Evolutiva**: A arquitetura deve permitir mudanças graduais sem reescrever o sistema do zero.  
- ⚙️ **DevOps e CI/CD**: A arquitetura impacta o pipeline de integração e entrega contínua.  
  - Microserviços, por exemplo, se beneficiam de automação robusta.

---

> 📚 Uma boa arquitetura é invisível quando está funcionando bem, mas fundamental para o sucesso de qualquer sistema de software.
