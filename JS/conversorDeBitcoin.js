function conversorDeBitcoin(bitcoin) {
  const convertido = bitcoin * 300000000; // 300 mil reais = 1 bitcoin
  return convertido;
}

module.exports = conversorDeBitcoin;
