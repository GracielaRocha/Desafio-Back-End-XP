const ativosServices = require('../services/investimentoServices');

const findByCod = async (req, res) => {
  const { codAtivo } = req.params;
  
  const ativo = await ativosServices.findByCod(codAtivo);

  if(ativo === null) {
    return res.status(404).json({ message: 'Ativo não encontrado'});
  }
    return res.status(200).json(ativo);
}

// const createBuy = async (req, res) => {
//   const { codCliente, codAtivo, qtdeAtivo, valorAtivo } = req.body;
//   // console.log('console controller createBuy', req.body);

//   const create = await ativosServices.createBuy(codCliente, codAtivo, qtdeAtivo, valorAtivo);
//   // console.log('console controller create', create);
//   if (create === null) {
//     return res.status(404).json({ message: 'Quantidade de ativo a ser comprado maior que a quantidade disponível'});
//   }
//     return res.status(201).json({ message: 'Compra realizada com sucesso' });

// }

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

// const createSell = async (req, res) => {
//   const { codCliente, codAtivo, qtdeAtivo } = req.body;
//   console.log('eu sou req.body', req.body);

//   const create = await ativosServices.createSell(codCliente, codAtivo, qtdeAtivo);

//   if (create === null) {
//     return res.status(404).json({ message: 'Quantidade de ativo a ser vendido maior que a quantidade em carteira'});
//   }

//   return res.status(201).json(create);
// }
// createBuyActive({
//   codCliente: 1,
//   codAtivo: 2,
//   qtdeAtivo: 100
// });

const getBalance = async (req, res) => {
  const { codCliente } = req.params;
  
  const salCliente = await ativosServices.getBalance(codCliente);

  return res.status(200).json(salCliente);
}

const updateSaque = async (req, res) => {
  const { codCliente } = req.params;
  const { valor } = req.body;
 
  const saque = await ativosServices.updateSaque(codCliente, valor);
  
  if (saque === null) {
    return res.status(404).json({ message: 'Saldo insuficiente' });
  }
    return res.status(200).json({ message: 'Saque realizado com sucesso'});
}

const updateDeposito = async (req, res) => {
  const { codCliente } = req.params;
  const { valor } = req.body;
 
  await ativosServices.updateDeposito(codCliente, valor);

  return res.status(200).json({ message: 'Depósito realizado com sucesso'});
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