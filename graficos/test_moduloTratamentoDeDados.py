import pytest
import pandas as pd
from modulo_tratamento_dados import normaliza_coluna_lista_dict

def test_normaliza_coluna_lista_dict_basico():
    df = pd.DataFrame({
        'id': [1, 2],
        'tipos': [
            [{'descricao': 'Escola'}, {'descricao': 'Hospital'}],
            [{'descricao': 'Ponte'}]
        ]
    })
    df_norm = normaliza_coluna_lista_dict(df, 'tipos')
    assert set(df_norm['tipos']) == {'Escola', 'Hospital', 'Ponte'}
    assert len(df_norm) == 3

def test_normaliza_coluna_lista_dict_vazio():
    df = pd.DataFrame({'id': [1], 'tipos': [[]]})
    df_norm = normaliza_coluna_lista_dict(df, 'tipos')
    # Após explode, DataFrame pode ficar vazio ou conter 'Desconhecido'
    assert df_norm.empty or (df_norm['tipos'].iloc[0] == 'Desconhecido')

def test_normaliza_coluna_lista_dict_sem_coluna():
    df = pd.DataFrame({'id': [1]})
    with pytest.raises(KeyError):
        normaliza_coluna_lista_dict(df, 'tipos')