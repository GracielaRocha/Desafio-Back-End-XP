const ativosModels = require('../models/investimentoModels');

// const getAll = async () => buyAssetsModel.getAll();

const findByCod = async (codAtivo) => {
  const ativo = await ativosModels.findByCod(codAtivo);

  if (!ativo) return null;

  return ativo;
}

const findByClient = async (codCliente) => {
  const cliente = await ativosModels.findByClient(codCliente);

  if (!cliente) return null;

  return cliente;
}

// const createBuy = async (codCliente, codAtivo, qtdeAtivo, valorAtivo) => {
//   const ativo = await ativosModels.findByCod(codAtivo);

//   if (ativo.quantity < qtdeAtivo) return null;

//   // const compraAtivo = await ativosModels.createBuy(codCliente, codAtivo, qtdeAtivo, valorAtivo);
//   const comprarAtivo = await ativosModels.createBuy(codCliente, codAtivo, qtdeAtivo, valorAtivo);
  
//   return comprarAtivo;
// }

// const updateClient = async (idCarteira, { qtdeAtivo }) => {
//   const compraAtivo = await createBuy();

//   const found = await ativosModels.updateClient(idCarteira);
  
//   if (!found) return null;
//   return { 
//    idCarteira,
//    qtdeAtivo: found.qtdeAtivo - quantity,
//   };
// };

// const createSell = async (codCliente, codAtivo, qtdeAtivo, valorAtivo) => {
//   const cliente = await ativosModels.findByClient(codCliente);

//   if (cliente.qtdeAtivo < qtdeAtivo) return null;

//   const vendaAtivo = await ativosModels.createSell(codCliente, codAtivo, qtdeAtivo, valorAtivo);

//   return vendaAtivo;
// }
// createBuy({
//   codCliente: 1,
//   codAtivo: 2,
//   qtdeAtivo: 100
// });

const getBalance = async (codCliente) => {
  const salCliente = await ativosModels.getBalance(codCliente);

  return salCliente;
}

const updateSaque = async (codCliente, valor) => {
  const [saldo] = await getBalance(codCliente);
  // console.log('saldo service', saldo);
  if (saldo.saldo < valor) return null;

  const saque = await ativosModels.updateSaque(codCliente, valor);

  return saque;
}

const updateDeposito = async (codCliente, valor) => {
  const deposito = await ativosModels.updateDeposito(codCliente, valor);

  return deposito;
}

module.exports = {
  findByCod,
  // createBuy,
  findByClient,
  // createSell,
  // updateClient,
  getBalance,
  updateSaque,
  updateDeposito,
}