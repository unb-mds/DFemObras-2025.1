import pandas as pd
import os
import matplotlib.pyplot as plt
from modulo_tratamento_dados import carregaDados, normaliza_coluna_lista_dict

def salvar(fig, nome):
    """
    Salva a figura em uma pasta 'TestesMapa/graficos' relativa ao projeto.
    """
    base_dir = os.path.dirname(os.path.dirname(__file__))  # volta para a raiz do projeto
    output_dir = os.path.join(base_dir, 'TestesMapa', 'graficos')
    os.makedirs(output_dir, exist_ok=True)
    path = os.path.join(output_dir, nome)
    fig.savefig(path, bbox_inches='tight')
    plt.close(fig)

def grafico_barras_situacao(df, nome_arquivo="situacao_obras.png"):
    """
    Gera e salva gráfico de barras horizontais da coluna 'situacao'.
    """
    contagem = df['situacao'].value_counts()
    fig, ax = plt.subplots(figsize=(10, 6))
    barras = ax.barh(contagem.index, contagem.values, color='skyblue')
    for barra in barras:
        largura = barra.get_width()
        ax.text(largura + 2, barra.get_y() + barra.get_height()/2,
                f'{int(largura)}', va='center', fontsize=12)
    ax.set_xlabel("Quantidade de Obras", fontsize=13)
    ax.set_title("Distribuição das Obras por Situação", fontsize=15, fontweight='bold')
    ax.invert_yaxis()
    ax.grid(axis='x', linestyle='--', alpha=0.5)
    salvar(fig, nome_arquivo)

def grafico_pizza_coluna(df, coluna, nome_arquivo):
    """
    Gera e salva gráfico de pizza para a coluna especificada.
    """
    contagem = df[coluna].value_counts()
    explode = [0.1 if label == 'Sem eixo' else 0 for label in contagem.index] if coluna == 'eixos' else None
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
    ax.set_title(f"Percentual de Obras por {coluna.capitalize()}",
                 fontsize=22, fontweight='bold', loc='center', pad=20, fontstyle='italic')
    ax.legend(wedges, contagem.index, title=coluna.capitalize(), loc="center left", bbox_to_anchor=(1, 0, 0.5, 1))
    salvar(fig, nome_arquivo)

def grafico_barras_coluna(df, coluna, nome_arquivo):
    """
    Gera e salva gráfico de barras horizontais para a coluna especificada.
    """
    if coluna not in df.columns:
        raise ValueError(f"A coluna '{coluna}' não existe no DataFrame.")
    contagem = df[coluna].value_counts()
    fig, ax = plt.subplots(figsize=(12, 8))
    ax.barh(contagem.index, contagem.values, color='skyblue')
    ax.set_xlabel('Quantidade')
    ax.set_title(f'Distribuição por {coluna.capitalize()}')
    ax.invert_yaxis()
    ax.grid(axis='x', linestyle='--', alpha=0.7)
    for i, v in enumerate(contagem.values):
        ax.text(v + max(contagem.values) * 0.01, i, str(v), va='center')
    fig.tight_layout()
    salvar(fig, nome_arquivo)

def grafico_barras_empilhadas(df, coluna_categoria, coluna_situacao, nome_arquivo):
    """
    Gera e salva gráfico de barras empilhadas mostrando a distribuição de situações por categoria.
    """
    if coluna_categoria not in df.columns or coluna_situacao not in df.columns:
        raise ValueError("Colunas não encontradas no DataFrame.")
    tabela = pd.crosstab(df[coluna_categoria], df[coluna_situacao])
    fig, ax = plt.subplots(figsize=(12, 8))
    tabela.plot(kind='bar', stacked=True, ax=ax, colormap='tab20')
    ax.set_xlabel(coluna_categoria.capitalize())
    ax.set_ylabel('Quantidade')
    ax.set_title(f'Situação das Obras por {coluna_categoria.capitalize()}')
    ax.legend(title=coluna_situacao.capitalize())
    fig.tight_layout()
    salvar(fig, nome_arquivo)

if __name__ == "__main__":
    # Carrega e normaliza dados necessários
    dados = carregaDados()
    dados = normaliza_coluna_lista_dict(dados, 'eixos')
    dados = normaliza_coluna_lista_dict(dados, 'tipos')

    grafico_barras_situacao(dados)
    grafico_pizza_coluna(dados, 'eixos', "pizza_obras_por_eixo.png")
    grafico_barras_coluna(dados, 'tipos', "tipos_obras_colunas.png")
    grafico_barras_empilhadas(dados, 'eixos', 'situacao', "barras_empilhadas_eixo_situacao.png")
    # Gráfico associando espécie (tipos) com situação
    grafico_barras_empilhadas(dados, 'tipos', 'situacao', "barras_empilhadas_tipos_situacao.png")