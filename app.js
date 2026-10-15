import PromptSync from "prompt-sync";
const prompt = PromptSync()
import veiculos from "./veiculos.js";
import adicionarVeiculo from "./adicionarVeiculo.js";

let indice = true

do{
    console.log(`\n===== LOCADORA LIONSCAR =====\n
1 - Cadastrar veículo
2 - Listar veículos
3 - Atualizar veículo
4 - Remover veículo
0 - Sair`)
    let resposta = (prompt("Escolha uma opção: ")).trim()
    switch(resposta){
        case("1"):
        let novoVeiculo = adicionarVeiculo.informacoesVeiculo(veiculos)
        adicionarVeiculo.addVeiculo(veiculos, novoVeiculo)
        break
        case("2"):

        break
        case("3"):

        break
        case("4"):

        break
        case("0"):
        indice = false
        console.log("\n...Saindo do sistema da locadora!...\n")
        break
        default:
        console.log("\nEscolha uma opção correspondente!")
    }
}while(indice === true)