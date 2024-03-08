const axios = require('axios')

async function apiHP() {
    const response = await axios.get('https://hp-api.onrender.com/api/characters')

    return response.data


}

test('Verificando se obtém os dados corretamente', async ()=>{
    const data = await apiHP();
    expect(data).toBeDefined();

})