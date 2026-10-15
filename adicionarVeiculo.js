import PromptSync from "prompt-sync"
const prompt = PromptSync()

function informacoesVeiculo(veiculos){
    console.log("\n-----------------------------\n")
    let placa = (prompt("Digite a placa do veículo: ")).trim()
    if(placa === "" || placa.length > 7){
        console.log("Placa inválida! Digite uma placa válida!")
        return informacoesVeiculo(veiculos)
    }
    for(let i = 0; i < veiculos.length; i++){
        if(veiculos[i].placa === placa){
            console.log("Essa placa já está cadastrada!")
            return informacoesVeiculo(veiculos)
        }
    }

    let modelo = (prompt("Digite o modelo do veículo: ")).trim()
    if(modelo === ""){
        console.log("Modelo inválido! Digite algo válido!")
        return informacoesVeiculo(veiculos)
    }

    let ano = Number(prompt("Digite o ano do veículo: "))
    if(isNaN(ano) || ano <= 0){
        console.log("Ano inválido! Digite um ano válido!")
        return informacoesVeiculo(veiculos)
    }

    let acessorios = []
    let resposta = ""

    do{
        let acessorio = (prompt("Digite um acessório do veículo: ")).trim()
        if(acessorio === ""){
            console.log("Acessório inválido! Digite um acessório válido!")
            return informacoesVeiculo(veiculos)
        }else{
            acessorios.push(acessorio)
        }
        resposta = (prompt("Adicionar outro acessório? (sim/nao) ")).trim().toLowerCase()
    }while(resposta === "sim")
        
        return {
            placa: placa,
            modelo: modelo,
            ano: ano,
            acessorios: acessorios
        }
}

function addVeiculo(veiculos, novoVeiculo){
    if(veiculos.length > 0){
        let uElemento = veiculos[veiculos.length - 1]
        novoVeiculo.id = uElemento.id + 1
    }else{
        novoVeiculo.id = 1
    }

    if(veiculos.push(novoVeiculo)){
        console.log("\nVeículo adicionado com sucesso!")
    }else{
        console.log("\nHouve um erro no cadastro!")
    }
}

export default {informacoesVeiculo, addVeiculo}