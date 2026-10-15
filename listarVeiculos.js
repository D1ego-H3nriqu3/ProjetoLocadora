export default function listarVeiculos(veiculos){
    console.log("----------------------------")
    if(veiculos.length === 0){
        console.log("\nNão há nenhum veículo para mostrar!")
    }else{
        veiculos.forEach(veiculo => {
            console.log(`\nID - ${veiculo.id}
Placa - ${veiculo.placa}
Modelo - ${veiculo.modelo} (${veiculo.ano})
Acessório(s) - ${veiculo.acessorios.join(" | ")}`)
        })
    }
}