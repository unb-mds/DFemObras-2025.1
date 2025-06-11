import os
import pandas as pd
import json

def carregaDados(json_path=None):
    """
    Carrega dados de um arquivo JSON e retorna um DataFrame.
    Lança FileNotFoundError ou ValueError em caso de erro.
    """
    base_dir = os.path.dirname(__file__)
    if json_path is None:
        json_path = os.path.join(base_dir, '..', 'TestesMapa', 'obrasgov', 'src', 'obras_com_lat_long.json')
    try:
        dados = pd.read_json(json_path, encoding='utf-8')
    except FileNotFoundError:
        raise FileNotFoundError(f"Arquivo não encontrado: {json_path}")
    except ValueError as e:
        raise ValueError(f"Erro ao ler o JSON: {e}")
    return dados

def normaliza_coluna_lista_dict(df, coluna, chave='descricao', padrao='Desconhecido', valor_se_vazio='Desconhecido'):
    """
    Normaliza uma coluna do DataFrame que contém listas de dicionários.
    Extrai o valor de 'chave' de cada dicionário, explode a lista em linhas e preenche valores vazios.
    """
    df = df.copy()
    df[coluna] = df[coluna].apply(
        lambda lista: [item.get(chave, padrao) for item in lista] if isinstance(lista, list) else []
    )
    df = df.explode(coluna)
    df[coluna] = df[coluna].fillna(valor_se_vazio)
    return df