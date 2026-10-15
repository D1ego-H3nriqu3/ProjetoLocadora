import PromptSync from "prompt-sync"
const prompt = PromptSync()

export default function attVeiculos(veiculos){
    console.log("\n-----------------------------\n")
    let id = Number(prompt("Qual o ID do veículo que gostaria de alterar? "))
    if(isNaN(id)){
        console.log("\nID inválido! Digite um ID válido!")
        return false
    }
    const indice = veiculos.findIndex((veiculo) => veiculo.id === id)
    if(indice === -1){
        console.log("\nVeículo não encontrado!")
        return false
    }

    let novoModelo = (prompt("Digite o novo modelo (Enter para manter): ")).trim()

    let novoAno = (prompt("Digite o novo ano (Enter para manter): ")).trim()
    let novoAnoATT = Number(novoAno)
    if(novoAno === ""){

    }else{
    if(isNaN(novoAnoATT) || novoAnoATT <= 0){
        console.log("Ano inválido! Digite um ano válido!")
        return attVeiculos(veiculos)
    }
    }

    let novoAcessorios = []

    let resposta = (prompt("Trocar o(s) acessorio(s): (sim/Enter) ")).trim().toLowerCase()
    if(resposta === "sim"){
    do{
        let acessorio = (prompt("Digite um acessório do veículo: ")).trim()
        if(acessorio === ""){
            console.log("Acessório inválido! Digite um acessório válido!")
            return attVeiculos(veiculos)
        }else{
            novoAcessorios.push(acessorio)
        }
        resposta = (prompt("Adicionar outro acessório? (sim/nao) ")).trim().toLowerCase()
    }while(resposta === "sim")
    }

    veiculos[indice].modelo = novoModelo || veiculos[indice].modelo
    veiculos[indice].ano = novoAnoATT || veiculos[indice].ano
    veiculos[indice].acessorios = novoAcessorios || veiculos[indice].acessorios
    
    console.log("\nVeículo atualizado com sucesso!")

}