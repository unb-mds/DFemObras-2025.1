import pandas as pd
import os
import json
import matplotlib.pyplot as plt


base_dir = os.path.dirname(__file__)  # pasta onde está o script
json_path = os.path.join(base_dir, '..', 'TestesMapa', 'obrasgov', 'src', 'obras_com_lat_long.json')
output_dir = os.path.join(base_dir, 'static', 'graficos')

try:
    with open(json_path, 'r', encoding='utf-8') as arquivo:
        dados = pd.read_json(arquivo)
except FileNotFoundError:
    print("Arquivo não encontrado.")
    dados = None
except json.JSONDecodeError:
    print("Erro ao decodificar o JSON.")
    dados = None

if dados is None:
    raise SystemExit("Dados não carregados. Encerrando o programa.")

 # Função para salvar gráfico
def salvar(fig, nome):
     os.makedirs(output_dir, exist_ok=True)  # garante que pasta exista
     path = os.path.join(output_dir, nome)
     fig.savefig(path, bbox_inches='tight')
     plt.close(fig)



def grafico_barras_situacao(dados):
    """
    Gera um gráfico de barras horizontais com a contagem da coluna 'situacao'
    e salva usando a função salvar().
    """
    contagem = dados['situacao'].value_counts()

    fig, ax = plt.subplots(figsize=(10, 6))
    barras = ax.barh(contagem.index, contagem.values, color='skyblue')

    # Rótulos nas barras
    for barra in barras:
        largura = barra.get_width()
        ax.text(largura + 2, barra.get_y() + barra.get_height()/2,
                f'{int(largura)}', va='center', fontsize=12)

    # Estilo
    ax.set_xlabel("Quantidade de Obras", fontsize=13)
    ax.set_title("Distribuição das Obras por Situação", fontsize=15, fontweight='bold')
    ax.invert_yaxis()
    ax.grid(axis='x', linestyle='--', alpha=0.5)

    # Salvar gráfico usando sua função
    salvar(fig, "situacao_obras.png")
grafico_barras_situacao(dados)

# # Preparar coluna eixos
# dados['eixos'] = dados['eixos'].apply(lambda lista:
#     [eixo.get('descricao', 'Eixo desconhecido') for eixo in lista] if isinstance(lista, list) else [])

# dados = dados.explode("eixos")
# dados['eixos'] = dados['eixos'].fillna('Sem eixo')



# def grafico_pizza_eixos(dados):
#     contagem = dados['eixos'].value_counts()
#     explode = [0.1 if label == 'Sem eixo' else 0 for label in contagem.index]

#     fig, ax = plt.subplots(figsize=(10, 10))
#     wedges, texts, autotexts = ax.pie(
#         contagem,
#         labels=None,
#         autopct='%1.1f%%',
#         startangle=140,
#         explode=explode, 
#         textprops={'fontsize': 15, 'fontweight':'bold'},
#         colors=plt.cm.tab20.colors,
#     )

#     for autotext in autotexts:
#         autotext.set_rotation(25)
#     ax.set_title("Percentual de Obras por Eixo",    
#                  fontsize=22,
#                  fontweight='bold',
#                  loc='center',
#                  pad=20,
#                  fontstyle='italic')
#     ax.legend(wedges, contagem.index, title="Eixos", loc="center left", bbox_to_anchor=(1, 0, 0.5, 1))
#     salvar(fig, "pizza_obras_por_eixo.png")


# grafico_pizza_eixos(dados)
