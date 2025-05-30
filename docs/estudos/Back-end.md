# Documento Técnico – Back-end do Projeto "DF em Obras"

## 1. Visão Geral do Projeto

Sistema que exibe um mapa interativo do Distrito Federal com a localização de obras públicas. Cada obra inclui dados como status, valor e situação (em andamento, atrasada, etc.). O objetivo é aumentar a transparência e permitir fácil acompanhamento das obras pela população.

## 2. Arquitetura do Back-end

O sistema é composto por três componentes principais:

### 2.1. Bot do Twitter (Python)

- Desenvolvido em Python usando a biblioteca Tweepy (a confirmar).  
- É responsável por identificar obras com status "atrasada" e publicar atualizações automáticas no Twitter.  
- Consome dados diretamente dos arquivos gerados ou formatados via Node.js.  
- Pode ser executado como um serviço agendado (ex.: cron) para postagens periódicas.

**Mensagem tweet automático:**
> O código completo do bot pode ser encontrado [aqui](https://github.com/unb-mds/DFemObras/blob/main/Bots/bot_Twitter.py).

```python
def run_bot(out_image_dir):
    try:
        config = load_config()
        cohere_client = get_cohere_client(config["cohere_api_key"])
        twitter_client_v2, twitter_client_v1 = get_twitter_client(config)

        if not os.path.exists(out_image_dir):
            print(f"Erro: Diretório de imagens não encontrado - {out_image_dir}")
            return

        image_files = [f for f in os.listdir(out_image_dir) if f.endswith('.png')]

        if not image_files:
            print("Nenhuma imagem encontrada para enviar.")
            return

        for image_file in image_files:
            image_path = os.path.join(out_image_dir, image_file)

            if os.path.exists(image_path):
                media = twitter_client_v1.media_upload(image_path)

                prompt = "Crie uma mensagem criativa para acompanhar essa imagem como um boletim semanal de reporte de obras atrasadas em no máximo 100 caracteres e adicione este link https://unb-mds.github.io/DFemObras/anomalias.html ao texto indicando que lá existem mais informações e marque o perfil do gdf e inclua este perfil https://x.com/Gov_DF com o padrão de marcar no tweet."
                message = generate_message(cohere_client, prompt)

                if message:
                    tweet = twitter_client_v2.create_tweet(text=message, media_ids=[media.media_id])
                    print(f"Tweet enviado com sucesso: {tweet}")
                else:
                    tweet = twitter_client_v2.create_tweet(media_ids=[media.media_id])
                    print(f"Tweet enviado com sucesso (sem mensagem): {tweet}")

                time.sleep(3)
            else:
                print(f"Imagem não encontrada: {image_path}")

    except Exception as e:
        print("Erro durante a execução do bot:", e)
```

### 2.2. Node.js (Serviço de Dados e Visualização)

- Responsável por buscar os dados das obras diretamente da fonte (ex: API pública do governo) e formatá-los para o front-end.  
- Realiza chamadas à API do governo para obter dados atualizados.  
- Também fornece esses dados ao front-end (mapa) e ao bot Python, se necessário.

### 2.3. Módulos Python para Análise

- Além do bot, o Python também será usado para análises e geração de gráficos, utilizando bibliotecas como **Pandas** e **Matplotlib**.

## 3. Armazenamento de Dados

Os dados são armazenados localmente em arquivos `.json`, organizados por tipo ou data de atualização.

**Exemplo de estrutura:**

/data/ obras.json categorias.json historico_atrasos.json

## 4. Comunicação Entre Componentes

- O Node.js atua como coletor e formatador dos dados, e serve tanto o front-end quanto o bot.  
- O Python (bot) consome os dados gerados pelo Node.js, seja via HTTP ou leitura direta de arquivos.

## 5. Segurança e Manutenção

- Autenticação com token para proteger o endpoint usado pelo bot (evita uso indevido).  
- CORS configurado apenas para domínios confiáveis.

## 6. Extensões Futuras

- Dashboard administrativo para gestão de dados.  
- Gráficos e indicadores (ex: número de obras por status, por região, por valor total, etc.).
