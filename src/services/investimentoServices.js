const ativosModels = require('../models/investimentoModels');

const findByCod = async (codAtivo) => {
  const ativo = await ativosModels.findByCod(codAtivo);
  console.log(ativo);

  if (!ativo) return null;

  return ativo;
}

const findByClient = async (codCliente) => {
  const cliente = await ativosModels.findByClient(codCliente);

  if (!cliente) return null;

  return cliente;
}

const putComprar = async (idCarteira, codCliente, codAtivo, qtVendida, valorAtivo) => {
  const comprarAtivo = await ativosModels.putComprar(idCarteira, codCliente, codAtivo, qtVendida, valorAtivo);

  return comprarAtivo;
};

const postComprar = async (codCliente, codAtivo, qtdeAtivo, valorAtivo) => {
  const ativo = await findByCod(codAtivo);
  // console.log(ativo);
  if (ativo.quantity < qtdeAtivo) return null;

  const cliente = await findByClient(codCliente);
  // console.log(cliente);
  const buscarAtivo = cliente.find((item) => item.ativo_id === codAtivo);
  // console.log('buscarAtivo', buscarAtivo);
  if (buscarAtivo) {
    return await putComprar(buscarAtivo.idCarteira, buscarAtivo.cliente_id, buscarAtivo.ativo_id, qtdeAtivo, buscarAtivo.valorAtivo);
  }
    return await ativosModels.postComprar(codCliente, codAtivo, qtdeAtivo, valorAtivo);
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
  return await ativosModels.updateDeposito(codCliente, valor);
};

const getAllAtivos = async () => {
  return await ativosModels.getAllAtivos();
}

module.exports = {
  findByCod,
  putComprar,
  postComprar,
  findByClient,
  putVender,
  putSubAtivo,
  putAdiAtivo,
  getBalance,
  editSaldo,
  updateDeposito,
  getAllAtivos
}