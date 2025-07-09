import pandas as pd
import os
from moduloDeGraficos import (
    grafico_barras_situacao,
    grafico_pizza_coluna,
    grafico_barras_coluna,
    grafico_barras_empilhadas,
)

def test_grafico_barras_situacao(tmp_path):
    df = pd.DataFrame({'situacao': ['A', 'B', 'A']})
    output = tmp_path / "barras_situacao.png"
    grafico_barras_situacao(df, str(output))
    assert output.exists()

def test_grafico_pizza_coluna(tmp_path):
    df = pd.DataFrame({'eixos': ['X', 'Y', 'X']})
    output = tmp_path / "pizza_eixos.png"
    grafico_pizza_coluna(df, 'eixos', str(output))
    assert output.exists()

def test_grafico_barras_coluna(tmp_path):
    df = pd.DataFrame({'tipos': ['T1', 'T2', 'T1']})
    output = tmp_path / "barras_tipos.png"
    grafico_barras_coluna(df, 'tipos', str(output))
    assert output.exists()

def test_grafico_barras_empilhadas(tmp_path):
    df = pd.DataFrame({
        'tipos': ['T1', 'T1', 'T2'],
        'situacao': ['A', 'B', 'A']
    })
    output = tmp_path / "empilhadas.png"
    grafico_barras_empilhadas(df, 'tipos', 'situacao', str(output))
    assert output.exists()