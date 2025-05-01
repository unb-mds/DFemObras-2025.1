# Documento de Requisitos — DFemObras

**Descrição do Sistema:**  
O DFemObras é uma aplicação web que consome dados de obras públicas disponibilizados por uma API governamental chamada obrasgov. Seu objetivo é exibir, de forma clara e acessível, a localização, o status e o motivo do atraso das obras no Distrito Federal, utilizando um mapa interativo e filtros que auxiliem a navegação.

---

## 1. Requisitos Funcionais

| Código | Descrição |
|--------|-----------|
| RF01 | O sistema deve informar o motivo do atraso quando uma obra estiver marcada como atrasada. |
| RF02 | O sistema deve permitir filtragem das obras por região administrativa. |
| RF03 | O sistema deve permitir a categorização das obras, agrupando por tipo ou status. |
| RF04 | O sistema deve oferecer uma tela de gastos onde seja possível observar alocação de recursos por região Administrativa, tipo de obra e total gasto em obras atrasadas |
| RF05 | O sistema deve permitir ao usuário ajustar diferentes tamanhos de fonte. |
| RF06 | O código HTML deve utilizar a tag `alt` para todas as imagens, garantindo acessibilidade visual. |

---

## 2. Requisitos Não Funcionais

| Código | Descrição |
|--------|-----------|
| RNF01 | O sistema deve proteger contra ataques de injeção SQL e Cross-site Scripting (XSS). |
| RNF02 | O site deve ser responsivo, funcionando corretamente em dispositivos móveis, tablets e desktops. |
| RNF03 | O código-fonte deve seguir o padrão de codificação definido pela equipe de desenvolvimento, garantindo legibilidade e manutenibilidade. |
| RNF04 | O site deve ser compatível com os navegadores Chrome e Firefox, sempre nas duas últimas versões estáveis. |

---


