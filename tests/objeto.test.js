// objeto = pacote que guarda as informações
// pode ter quaisquer tipos de dados

const carro = {
    cor: 'Amarelo',
    marca: 'Nissan',
    modelo: 'Kicks',
    ano: 2024,
    quitado: true, 
}

// toMatchObject()  compara os objetos e vê se eles tem similaridades ou não

const carroDesejado = {
    portas: 4,
    cor: 'prata',
        mecanica: {
            motorizacao: [2.0, 'turbo', '140 cv']
    },
    tetoSolar: true,
}

const carroAVenda = {
    portas: 4,
    cor: 'preto',
    mecanica: {
        motorizacao: [1.0, 'aspirado', '60 cv'],
        cambio: 'manual',
    },
    tetoSolar: false,
    
}

const carroOlx = {
    portas: 4,
    cor: 'prata',
        mecanica: {
            motorizacao: [2.0, 'turbo', '140 cv'],
            cambio: 'automático',
            tracao: '4x4'
    },
    ano: 2022,
    tetoSolar: true,
    wifi: true,
    assistenteDeEstacionamento: true,
    centralMultiMidia: true

}
test('Características do carro desejado', ()=>{
    expect(carroOlx).toMatchObject(carroDesejado)
})