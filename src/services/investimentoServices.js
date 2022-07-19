const ativosModels = require('../models/investimentoModels');

// const getAll = async () => buyAssetsModel.getAll();

const findByCod = async (codAtivo) => {
  const ativo = await ativosModels.findByCod(codAtivo);

  if (!ativo) return null;

  return ativo;
}

const createBuy = async (codCliente, codAtivo, qtdeAtivo) => {
  const ativo = await ativosModels.findByCod(codAtivo);
  console.log(ativo);

  if (ativo.quantity < qtdeAtivo) return null;

  const compraAtivo = await ativosModels.createBuy(codCliente, codAtivo, qtdeAtivo);

  return compraAtivo;
}
// createBuy({
//   codCliente: 1,
//   codAtivo: 2,
//   qtdeAtivo: 100
// });

module.exports = {
  findByCod,
  createBuy,
}