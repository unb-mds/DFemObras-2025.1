import os
import pandas as pd
import json

def carregaDados(json_path=None):
    base_dir = os.path.dirname(__file__)  # pasta onde está o script

    # Caminho padrão se nenhum for fornecido
    if json_path is None:
        json_path = os.path.join(base_dir, '..', 'TestesMapa', 'obrasgov', 'src', 'obras_com_lat_long.json')

    try:
        with open(json_path, 'r', encoding='utf-8') as arquivo:
            dados = pd.read_json(arquivo)
    except FileNotFoundError:
        print(f"Arquivo não encontrado: {json_path}")
        dados = None
    except json.JSONDecodeError:
        print("Erro ao decodificar o JSON.")
        dados = None

    if dados is None:
        raise SystemExit("Dados não carregados. Encerrando o programa.")
    
    return dados

def normaliza_coluna_lista_dict(df, coluna, chave='descricao', padrao='Desconhecido', valor_se_vazio='Desconhecido'):

    df = df.copy()
    df[coluna] = df[coluna].apply(
        lambda lista: [item.get(chave, padrao) for item in lista] if isinstance(lista, list) else []
    )
    df = df.explode(coluna)
    df[coluna] = df[coluna].fillna(valor_se_vazio)
    return df