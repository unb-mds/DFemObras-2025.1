import pandas as pd
import os
import json
import matplotlib.pyplot as plt
from modulo_tratamento_dados import carregaDados
from modulo_tratamento_dados import normaliza_coluna_lista_dict


dados = normaliza_coluna_lista_dict(carregaDados(), 'eixos')

 # Função para salvar gráfico
def salvar(fig, nome):
    base_dir = os.path.dirname(__file__)
    output_dir = os.path.join(base_dir, 'static', 'graficos')
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


def grafico_pizza_eixos(dados):
    """
    Gera um gráfico de pizza das obras divididas por 'eixo'
    e salva usando a função salvar().
    """
    contagem = dados['eixos'].value_counts()
    explode = [0.1 if label == 'Sem eixo' else 0 for label in contagem.index]

    fig, ax = plt.subplots(figsize=(10, 10))
    wedges, texts, autotexts = ax.pie(
        contagem,
        labels=None,
        autopct='%1.1f%%',
        startangle=140,
        explode=explode, 
        textprops={'fontsize': 15, 'fontweight':'bold'},
        colors=plt.cm.tab20.colors,
    )

    for autotext in autotexts:
        autotext.set_rotation(25)
    ax.set_title("Percentual de Obras por Eixo",    
                 fontsize=22,
                 fontweight='bold',
                 loc='center',
                 pad=20,
                 fontstyle='italic')
    ax.legend(wedges, contagem.index, title="Eixos", loc="center left", bbox_to_anchor=(1, 0, 0.5, 1))
    salvar(fig, "pizza_obras_por_eixo.png")


grafico_pizza_eixos(dados)
dados = normaliza_coluna_lista_dict(dados, 'tipos')
def grafico_distribuicao_por_coluna(df, coluna):
    """
    Gera um gráfico de barras horizontais com a contagem dos valores únicos
    da coluna especificada e retorna a figura para salvar externamente.

    Parâmetros:
    - df: pandas.DataFrame
    - coluna: nome da coluna a ser agregada (str)

    Retorna:
    - fig: objeto matplotlib.figure.Figure
    """
    if coluna not in df.columns:
        raise ValueError(f"A coluna '{coluna}' não existe no DataFrame.")

    # Contagem dos valores únicos
    contagem = df[coluna].value_counts()

    # Criar a figura e os eixos
    fig, ax = plt.subplots(figsize=(12, 8))
    ax.barh(contagem.index, contagem.values, color='skyblue')
    ax.set_xlabel('Quantidade')
    ax.set_title(f'Distribuição por {coluna}')
    ax.invert_yaxis()
    ax.grid(axis='x', linestyle='--', alpha=0.7)

    # Mostrar os valores ao lado das barras
    for i, v in enumerate(contagem.values):
        ax.text(v + max(contagem.values) * 0.01, i, str(v), va='center')

    fig.tight_layout()
    salvar(fig, "tipos_obras_colunas.png")

grafico_distribuicao_por_coluna(dados, 'tipos')