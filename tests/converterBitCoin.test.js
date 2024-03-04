const conversorDeBitcoin = require('../JS/conversorDeBitcoin');

// eslint-disable-next-line no-undef
describe('Testa a função conversorDeBitCoin', () => {
  // eslint-disable-next-line no-undef
  test('Verifica se o valor é convertido corretamente', () => {
    // delcara o valor da variável
    const bitcoin = 2;
    // Chama a função e adiciona valor do salario
    const bitCoinConvertido = conversorDeBitcoin(bitcoin);
    // testa funcao bonus
    // eslint-disable-next-line no-undef
    expect(bitCoinConvertido).toBe(600000);
  });
});
