// 1 - Crie um caso de teste onde verifique as receitas que levam leite e passe apenas aquele em que não possua lactose

const receitaUm ={
    farinha: '2 xicaras',
    ovo: 1,
    leite: true,
}
const receitaDois ={
    farinha: '2 xicaras',
    ovo: 1,
    leite: false,
}


test("Ver se tem lactose", ()=>{
    expect(receitaUm).not.toMatchObject(receitaDois)
})