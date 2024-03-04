const converterTempCelsiuParaFarenheint = require('../JS/index');

// eslint-disable-next-line no-undef
describe('Testa a função converterTempCelsiusParaFarenheit', () => {
  // eslint-disable-next-line no-undef
  test('Verifica se a temperatura é convertida corretamente', () => {
    // declara o valor da variável
    const celsius = 30;
    // Chama a função e adiciona valor do salario
    const tempConvertida = converterTempCelsiuParaFarenheint(celsius);
    // testa funcao bonus
    // eslint-disable-next-line no-undef
    expect(tempConvertida).toBe(86);
  });
});
