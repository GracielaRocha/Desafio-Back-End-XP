const ativosServices = require('../services/investimentoServices');

const findByCod = async (req, res) => {
  const { codAtivo } = req.params;
  
  const ativo = await ativosServices.findByCod(codAtivo);
  console.log('console log', ativo);

  if(ativo === null) {
    return res.status(404).json({ message: 'Ativo não encontrado'});
  }
    return res.status(201).json(ativo);
}

const createBuy = async (req, res) => {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;
  console.log(req.body);

  const create = await ativosServices.createBuy(codCliente, codAtivo, qtdeAtivo);

  if (create === null) {
    return res.status(404).json({ message: 'Quantidade de ativo a ser comprado maior que a quantidade disponível'});
  }
    return res.status(201).json(create);

}

const findByClient = async (req, res) => {
  const { codCliente } = req.params;
  
  const cliente = await ativosServices.findByClient(codCliente);
  console.log('console log', cliente);

  if(cliente === null) {
    return res.status(404).json({ message: 'Cliente não encontrado'});
  }
    return res.status(201).json(cliente);
}

const createSell = async (req, res) => {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;
  console.log(req.body);

  const create = await ativosServices.createSell(codCliente, codAtivo, qtdeAtivo);

  if (create === null) {
    return res.status(404).json({ message: 'Quantidade de ativo a ser vendido maior que a quantidade em carteira'});
  }

  return res.status(201).json(create);
}
// createBuyActive({
//   codCliente: 1,
//   codAtivo: 2,
//   qtdeAtivo: 100
// });
module.exports = {
  findByCod,
  createBuy,
  findByClient,
  createSell,
}