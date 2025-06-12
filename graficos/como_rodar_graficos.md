## Pré-requisitos

- Python 3.8 ou superior


1. Instale as dependências:
   ```sh
   pip install -r requirements.txt
   ```
## Como rodar o módulo de gráficos

Execute o módulo diretamente para gerar os gráficos:

```sh
python graficos/moduloDeGraficos.py
```

Os gráficos serão salvos na pasta `graficos/static/graficos`.

## Como rodar o módulo de tratamento de dados

O módulo de tratamento de dados (`graficos/modulo_tratamento_dados.py`) fornece funções utilitárias para carregar e normalizar dados.  
Você pode importar e usar suas funções em outros scripts Python, por exemplo:

```python
from graficos.modulo_tratamento_dados import carregaDados, normaliza_coluna_lista_dict

dados = carregaDados()
dados = normaliza_coluna_lista_dict(dados, 'eixos')
```

## Como rodar os testes

Execute todos os testes unitários com:

```sh
pytest
```