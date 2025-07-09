import shutil
import os

def copiar_graficos_para_bots():
    origem = os.path.join("TestesMapa", "graficos")
    destino = os.path.join("Bots", "imagens")
    if not os.path.exists(origem):
        print(f"Pasta de origem não encontrada: {origem}")
        return
    if not os.path.exists(destino):
        os.makedirs(destino)
    for arquivo in os.listdir(origem):
        if arquivo.endswith(".png"):
            shutil.copy2(os.path.join(origem, arquivo), os.path.join(destino, arquivo))
            print(f"Copiado: {arquivo} para {destino}")

if __name__ == "__main__":
    copiar_graficos_para_bots()
    json_file_path = r"./TestesMapa/obrasgov/src/obras_com_lat_long.json"
    output_dir = r"./Bots/imagens"
