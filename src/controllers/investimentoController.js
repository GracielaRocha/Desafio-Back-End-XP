const ativosServices = require('../services/investimentoServices');

const findByCod = async (req, res) => {
  const { codAtivo } = req.params;
  
  const ativo = await ativosServices.findByCod(codAtivo);

  if(ativo === null) {
    return res.status(404).json({ message: 'Ativo não encontrado'});
  }
    return res.status(200).json(ativo);
}

const postComprar = async (req, res) => {
  const { codCliente, codAtivo, qtdeAtivo, valorAtivo } = req.body;
  // console.log('console controller createBuy', req.body);

  const comprarAtivo = await ativosServices.postComprar(codCliente, codAtivo, qtdeAtivo, valorAtivo);
  // console.log('console controller create', create);
  if (comprarAtivo === null) {
    return res.status(404).json({ message: 'Quantidade de ativo a ser comprado maior que a quantidade disponível'});
  }
    return res.status(201).json({ message: 'Compra realizada com sucesso' });

}

const findByClient = async (req, res) => {
  const { codCliente } = req.params;
  
  const cliente = await ativosServices.findByClient(codCliente);

  if(cliente === null) {
    return res.status(404).json({ message: 'Cliente não encontrado'});
  }
    return res.status(200).json(cliente);
}

// const updateClient = async (req, res) => {
//   const { codCliente } = req.params;
//   const { codAtivo, qtdeAtivo, valorAtivo } = req.body;

//   await ativosServices.updateClient(codCliente, codAtivo, qtdeAtivo, valorAtivo);

//   return res.status(200).json({ message: 'Alteração realizada com sucesso'});
// }

const putVender = async (req, res) => {
  const { idCarteira } = req.params;
  const { codCliente, codAtivo, qtVendida, valorAtivo } = req.body;
  // console.log('eu sou req.body', req.body);
  const venderAtivo = await ativosServices.putVender(idCarteira, codCliente, codAtivo, qtVendida, valorAtivo);

  if (venderAtivo === null) {
    return res.status(404).json({ message: 'Quantidade de ativos em carteira insuficiente para venda' });
  }
  return res.status(201).json({ message: 'Venda realizada com sucesso' });
}

const putSubAtivo = async (req, res) => {
  const { codAtivo } = req.params;
  const { newQuantity, valorAtivo } = req.body;
 
  await ativosServices.putSubAtivo(codAtivo, newQuantity, valorAtivo);

  return res.status(200).json({ message: 'Quantidade do ativo alterado com sucesso' });
};

const putAdiAtivo = async (req, res) => {
  const { codAtivo } = req.params;
  const { newQuantity, valorAtivo } = req.body;
 
  const graciela = await ativosServices.putAdiAtivo(codAtivo, newQuantity, valorAtivo);
  
  return res.status(200).json({ message: 'Quantidade do ativo alterado com sucesso' });
}

const getBalance = async (req, res) => {
  const { codCliente } = req.params;
  
  const salCliente = await ativosServices.getBalance(codCliente);

  return res.status(200).json(salCliente);
}

const editSaldo = async (req, res) => {
  const { codCliente } = req.params;
  const { valor } = req.body;
 
  const saldo = await ativosServices.editSaldo(codCliente, valor);
  
  if (saldo === null) {
    return res.status(404).json({ message: 'Saldo insuficiente' });
  }
    return res.status(200).json({ message: 'Saque realizado com sucesso'});
}

const updateDeposito = async (req, res) => {
  const { codCliente } = req.params;
  const { valor } = req.body;
 
  await ativosServices.updateDeposito(codCliente, valor);

  return res.status(200).json({ message: 'Depósito realizado com sucesso'});
};

const getAllAtivos = async (req, res) => {
  const ativos = await ativosServices.getAllAtivos();

  return res.status(200).json(ativos);
};

module.exports = {
  findByCod,
  postComprar,
  findByClient,
  putSubAtivo,
  putVender,
  putAdiAtivo,
  getBalance,
  editSaldo,
  updateDeposito,
  getAllAtivos
}