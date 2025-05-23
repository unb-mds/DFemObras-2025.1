# 🚦 Backlog Prioritário – Sistema de Acompanhamento de Obras Públicas

Organizado por prioridade com base em valor para o usuário, dependências e impacto.

---

## 🔝 Alta Prioridade (MVP)

1. **US 2.1.1** – Exibir cores do mapa conforme status das obras  
   - Definir esquema de cores para status: concluída, inacabada, atrasada.  
   - Aplicar estilos personalizados nos marcadores do mapa.  

2. **US 2.2.1 / 2.3.1** – Filtros por Região Administrativa e Status  
   - Adicionar filtros dropdown para RA e status.  
   - Atualizar visualização do mapa dinamicamente conforme seleção.  

3. **US 2.6.1** – Tornar o mapa responsivo  
   - Ajustar layout do mapa com media queries e grid flexível.  
   - Testar visualização em celulares, tablets e desktop.  

4. **US 4.1.1 a 4.1.3** – Exibir gráficos no site (concluídas vs inacabadas, gastos)  
   - Integrar biblioteca de gráficos (Ex: Chart.js, Recharts).  
   - Criar gráficos:  
     - Proporção obras concluídas x inacabadas.  
     - Valor total gasto com obras atrasadas.  
     - Valor total gasto com obras concluídas.  

5. **US 5.1** – Tornar todo o site responsivo  
   - Refatorar layout geral com CSS responsivo.  
   - Garantir leitura e navegação em telas menores.  

6. **US 1.1.1** – Exibir informações organizadas de obras atrasadas  
   - Criar componente visual com informações essenciais: nome, status, valor, localização.  
   - Implementar ordenação e agrupamento (por data ou valor).  

7. **US 1.2.1** – Mostrar motivo de atraso das obras  
   - Adicionar campo "motivo do atraso" na base de dados.  
   - Exibir essa informação na lista e/ou detalhes da obra.  

8. **US 1.3.1** – Comparar valor final e inicial de obras concluídas  
   - Exibir valores inicial e final.  
   - Calcular e exibir percentual de variação (se houver).  

9. **US 1.4.1** – Criar página de obras concluídas  
   - Criar uma nova página dedicada à exibição de obras concluídas.  
   - Exibir para cada obra:  
     - Se foi concluída dentro do prazo ou com atraso.  
     - Tempo de atraso (caso aplicável).  
     - Valor previsto inicialmente e valor final.  
   - Garantir visual claro e acessível para facilitar comparação e análise.  
   - Incluir componente de navegação para acessar esta página a partir do menu principal.

10. **US 5.3** – Garantir compatibilidade com navegadores modernos  
    - Testar e corrigir eventuais erros no Chrome e Firefox (últimas 2 versões).  
    - Usar recursos compatíveis e evitar funções depreciadas.

---

## 🔄 Média Prioridade

11. **US 4.2.1** – Publicar gráficos com bot do Twitter  
    - Publicar via API do Twitter em horários definidos.  
    - Garantir mensagens com texto explicativo e hashtags.  

12. **US 2.4.1** – Filtro por ano de início da obra  
    - Adicionar seletor de ano.  
    - Implementar lógica de filtragem por campo "ano de início".  

13. **US 2.5.1** – Filtro por valor mínimo/máximo da obra  
    - Adicionar campos numéricos ou sliders.  
    - Filtrar resultados entre os valores informados.  

14. **US 3.1.1** – Opção para aumentar o tamanho da fonte  
    - Adicionar botão para alterar tamanho da fonte.  
    - Usar classes CSS ajustáveis para diferentes níveis de zoom.  

15. **US 3.2.1** – Modo de alto contraste  
    - Adicionar botão de alternância de contraste.  
    - Criar tema CSS de alto contraste acessível.  

16. **US 3.3** – Melhorar navegação e usabilidade geral  
    - Reorganizar menus e navegação.  
    - Utilizar feedback visual para ações do usuário (ex: cliques, filtros).  
    - Garantir textos claros e legíveis nas telas.

---

## 🔧 Baixa Prioridade Técnica

17. **US 5.2** – Padronização e documentação do código-fonte  
    - Documentar componentes principais com comentários e README.
