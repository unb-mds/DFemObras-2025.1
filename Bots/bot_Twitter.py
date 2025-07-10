import os
import cohere
import tweepy
from dotenv import load_dotenv
import json
from PIL import Image, ImageDraw, ImageFont
import time

def load_config():
    load_dotenv()
    config = {
        "cohere_api_key": os.getenv("API_COHERE_KEY"),
        "twitter_consumer_key": os.getenv("API_CONSUMER_KEY_X"),
        "twitter_consumer_secret": os.getenv("API_CONSUMER_SECRET_X"),
        "twitter_access_token": os.getenv("API_ACCESS_TOKEN_X"),
        "twitter_access_token_secret": os.getenv("API_ACCESS_TOKEN_SECRET_X")
    }
    return config

def get_cohere_client(api_key):
    return cohere.ClientV2(api_key)

def get_twitter_client(config):
    client_v2 = tweepy.Client(
        consumer_key=config["twitter_consumer_key"],
        consumer_secret=config["twitter_consumer_secret"],
        access_token=config["twitter_access_token"],
        access_token_secret=config["twitter_access_token_secret"]
    )

    client_v1 = tweepy.API(
        tweepy.OAuth1UserHandler(
            consumer_key=config["twitter_consumer_key"],
            consumer_secret=config["twitter_consumer_secret"],
            access_token=config["twitter_access_token"],
            access_token_secret=config["twitter_access_token_secret"]
        )
    )

    return client_v2, client_v1

def generate_message(cohere_client, prompt):
    try:
        response = cohere_client.chat(
            model="command-r-plus",
            messages=[{"role": "user", "content": prompt}]
        )
        return response.message.content[0].text
    except Exception as e:
        print("Erro ao gerar mensagem:", e)
        return None

def post_message(twitter_client, message):
    try:
        tweet = twitter_client.create_tweet(text=message)
        print("Tweet enviado com sucesso:", tweet)
        return tweet
    except Exception as e:
        print("Erro ao enviar o tweet:", e)
        return None



def post_images(twitter_client_v2, twitter_client_v1, image_paths):
    media_ids = []

    for image in image_paths:
        if not os.path.exists(image):
            print(f"Erro: Arquivo de imagem não encontrado - {image}")
            continue

        try:
            media = twitter_client_v1.media_upload(image)
            media_ids.append(media.media_id)
            print(f"Imagem {image} carregada com sucesso.")
            time.sleep(3)  

        except tweepy.TweepError as e:
            if e.api_code == 429: 
                print("Limite de requisições atingido. Aguardando...")
                reset_time = int(e.response.headers.get('x-rate-limit-reset'))
                current_time = int(time.time())
                wait_time = reset_time - current_time + 5  
                print(f"Aguardando {wait_time} segundos antes de tentar novamente.")
                time.sleep(wait_time)
                return post_images(twitter_client_v2, twitter_client_v1, image_paths)

    if media_ids:
        try:
            tweet = twitter_client_v2.create_tweet(media_ids=media_ids)
            print("Tweet enviado com sucesso:", tweet)
            return tweet
        except tweepy.TweepError as e:
            print("Erro ao enviar o tweet:", e)
            return None
    else:
        print("Nenhuma imagem foi carregada.")
        return None
    
IMAGEM_CSV_ASSOC = {
    "situacao_obras.png": "dados_situacao_obras.csv",
    "pizza_obras_por_eixo.png": "dados_eixos_pizza.csv",
    "tipos_obras_colunas.png": "dados_tipos_barras.csv",
    "barras_empilhadas_eixo_situacao.png": "dados_eixos_situacao_empilhadas.csv",
    "barras_empilhadas_tipos_situacao.png": "dados_tipos_situacao_empilhadas.csv",
    # Adicione outros pares conforme necessário
}

    
def run_bot(out_image_dir, out_data_dir):
    try:
        config = load_config()
        cohere_client = get_cohere_client(config["cohere_api_key"])
        twitter_client_v2, twitter_client_v1 = get_twitter_client(config)

        if not os.path.exists(out_image_dir):
            print(f"Erro: Diretorio de imagens nao encontrado - {out_image_dir}")
            return

        image_files = [f for f in os.listdir(out_image_dir) if f.endswith('.png')]

        if not image_files:
            print("Nenhuma imagem encontrada para enviar.")
            return

        print(f"Encontradas {len(image_files)} imagens para processar")

        for image_file in image_files:
            print(f"\nProcessando: {image_file}")
            image_path = os.path.join(out_image_dir, image_file)

            # Associa o CSV correto à imagem
            csv_name = IMAGEM_CSV_ASSOC.get(image_file)
            csv_content = "Dados do grafico nao encontrados."
            
            if csv_name:
                csv_path = os.path.join(out_data_dir, csv_name)
                if os.path.exists(csv_path):
                    with open(csv_path, "r", encoding="utf-8") as f:
                        csv_content = f.read()
                    print(f"[OK] CSV encontrado: {csv_name}")
                else:
                    print(f"[ERRO] CSV nao encontrado: {csv_path}")
            else:
                print(f"[ERRO] Associacao nao encontrada para: {image_file}")

            if os.path.exists(image_path):
                try:
                    print("Fazendo upload da imagem...")
                    media = twitter_client_v1.media_upload(image_path)
                    print(f"[OK] Upload realizado: {media.media_id}")

                    prompt = (
    f"Crie uma mensagem crítica e bem humorada para acompanhar uma postagem sobre obras públicas no Distrito Federal. "
    f"o gráfico é baseado nos seguintes dados:\n{csv_content}\n"
    
    "METADADOS - Situações das Obras: (use se relevante)\n"
    "• Cadastrada: Possui identificador único, mas ainda não iniciou efetivamente\n"
    "• Em execução: Possui autorização de início e não está paralisada\n"
    "• Paralisada: Projeto/obra iniciados mas temporariamente suspensos\n"
    "• Cancelada: Não há mais interesse em dar continuidade, sem funcionalidade\n"
    "• Concluída: Possui termo de recebimento definitivo ou aceitação\n"
    "• Inacabada: Intervenções não concluídas sem instrumentos vigentes\n"
    
    "A mensagem deve ter no máximo 150 caracteres e direcionar para esse endereço para obter mais informações https://unb-mds.github.io/DFemObras-2025.1/index.html. não use emojis"
)
                    
                    print("Gerando mensagem...")
                    message = generate_message(cohere_client, prompt)

                    if message:
                        print(f"Mensagem gerada: {message}")
                        tweet = twitter_client_v2.create_tweet(text=message, media_ids=[media.media_id])
                        print(f"[OK] Tweet enviado com sucesso: {tweet.data['id']}")
                    else:
                        print("Enviando apenas imagem...")
                        tweet = twitter_client_v2.create_tweet(media_ids=[media.media_id])
                        print(f"[OK] Tweet enviado (sem mensagem): {tweet.data['id']}")

                    print("Aguardando 10 segundos...")
                    time.sleep(10)

                except tweepy.TooManyRequests:
                    print("[ERRO] 429: Limite atingido. Aguardando 15 minutos...")
                    time.sleep(900)
                    continue

                except tweepy.Forbidden as e:
                    print(f"[ERRO] 403: Sem permissao - {e}")
                    print("Verifique as permissoes da aplicacao no Twitter Developer Portal")
                    break

                except tweepy.Unauthorized as e:
                    print(f"[ERRO] 401: Credenciais invalidas - {e}")
                    break

                except Exception as e:
                    print(f"[ERRO] Inesperado: {e}")
                    continue

            else:
                print(f"[ERRO] Imagem nao encontrada: {image_path}")

    except Exception as e:
        print(f"Erro durante a execucao do bot: {e}")



def main():

    output_dir = r"./Bots/imagens"

    # Crie o diretório de saída, se não existir

    out_data_dir = r"./Bots/dados_graficos"
    os.makedirs(output_dir, exist_ok=True)
    os.makedirs(out_data_dir, exist_ok=True)
    
    run_bot(output_dir, out_data_dir)

if __name__ == "__main__":
    main()
