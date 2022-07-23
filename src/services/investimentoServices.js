const ativosModels = require('../models/investimentoModels');

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

const createBuy = async (codCliente, codAtivo, qtdeAtivo, valorAtivo) => {
  const ativo = await ativosModels.findByCod(codAtivo);
  console.log(ativo);

  if (ativo.quantity < qtdeAtivo) return null;
 // const compraAtivo = await ativosModels.createBuy(codCliente, codAtivo, qtdeAtivo, valorAtivo);
  const comprarAtivo = await ativosModels.createBuy(codCliente, codAtivo, qtdeAtivo, valorAtivo);
  
  return comprarAtivo;
}

// const updateClient = async (idCarteira, { qtdeAtivo }) => {
//   const compraAtivo = await createBuy();

//   const found = await ativosModels.updateClient(idCarteira);
  
//   if (!found) return null;
//   return { 
//    idCarteira,
//    qtdeAtivo: found.qtdeAtivo - quantity,
//   };
// };

const putVender = async (idCarteira, codCliente, codAtivo, qtVendida, valorAtivo) => {
  const [qtAtivos] = await findByClient(codCliente);
  console.log(qtAtivos);
  if (qtAtivos.qtdeAtivo < qtVendida) return null;
  
  const venderAtivo = await ativosModels.putVender(idCarteira, codCliente, codAtivo, qtVendida, valorAtivo);

  return venderAtivo;
};

const putSubAtivo = async (codAtivo, newQuantity, valorAtivo) => {
  return await ativosModels.putSubAtivo(codAtivo, newQuantity, valorAtivo);
};

const putAdiAtivo = async (codAtivo, newQuantity, valorAtivo) => {
  return await ativosModels.putAdiAtivo(codAtivo, newQuantity, valorAtivo);
};

const getBalance = async (codCliente) => {
  const salCliente = await ativosModels.getBalance(codCliente);

  return salCliente;
};

const editSaldo = async (codCliente, valor) => {
  const [saldo] = await getBalance(codCliente);
  // console.log('saldo service', saldo);
  if (saldo.saldo < valor) return null;

  const saldoAlt = await ativosModels.editSaldo(codCliente, valor);

  return saldoAlt;
};

const updateDeposito = async (codCliente, valor) => {
  const deposito = await ativosModels.updateDeposito(codCliente, valor);

  return deposito;
};

module.exports = {
  findByCod,
  createBuy,
  findByClient,
  putVender,
  putSubAtivo,
  putAdiAtivo,
  getBalance,
  editSaldo,
  updateDeposito,
}