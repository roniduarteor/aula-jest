test("Verifica palavra dentro de um array", ()=>{
    const cestaDeFrutas = ['Pera', 'Uva', 'Maçã', 'Manga', 'Melancia']

    expect(cestaDeFrutas).toContain('Uva')   // toContain é uma função para identificar item em um array
})

test("Verifica se não há cargo de gerente entre os funcionários", ()=>{
    const cargos = ['Auxiliar', 'Assistente', 'Analista', 'Encarregado', 'Coordenador']

    expect(cargos).not.toContain('Gerente')  
})

test("Verifica se há a palavra 'Senai'", ()=>{
    const frase = "O Senai é o melhor lugar do mundo para passar nossas manhãs!"

    const fraseMaiuscula = frase.toUpperCase()

    expect(fraseMaiuscula).toMatch(/SENAI/)  // toMatch é uma função para identificar uma string
})