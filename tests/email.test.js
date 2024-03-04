test("Verifica se a função que recebe email está funcionando corretamente'", ()=>{
    const email = "ronaldodrodrigues@gmail.com"

    const verificar = /^[a-z0-9.]+@[a-z09]+\.[a-z]+\.([a-z]+)?$/i

    expect(verificar).toMatch(email)
})