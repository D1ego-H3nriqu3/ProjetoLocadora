import PromptSync from "prompt-sync";
const prompt = PromptSync()

export default function removerVeiculo(veiculos){
    console.log("\n-----------------------------\n")
    let id = Number(prompt("Qual o ID do veículo que gostaria de remover? "))
    if(isNaN(id)){
        console.log("\nID inválido! Digite um ID válido!")
        return false
    }
    const indice = veiculos.findIndex((veiculo) => veiculo.id === id)
    if(indice === -1){
        console.log("\nVeículo não encontrado!")
        return false
    }else{
        let resposta = (prompt("Tem certeza? (sim/nao) ")).trim().toLowerCase()
        if(resposta === "sim"){
            veiculos.splice(indice, 1)
            console.log("\nRemoção realizada...")
        }else{
            console.log("\nPois bem...")
        }
    }
}