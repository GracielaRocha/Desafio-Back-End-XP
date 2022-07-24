const contaServices = require('../services/contaServices');

const getSaldo = async (req, res) => {
  const { codCliente } = req.params;
  
  const salCliente = await contaServices.getSaldo(codCliente);

  return res.status(200).json(salCliente);
};

const putSaldo = async (req, res) => {
  const { codCliente } = req.params;
  const { valor } = req.body;
 
  const saldo = await contaServices.putSaldo(codCliente, valor);
  
  if (saldo === null) {
    return res.status(404).json({ message: 'Saldo insuficiente' });
  }
    return res.status(200).json({ message: 'Saque realizado com sucesso'});
};

const putDeposito = async (req, res) => {
  const { codCliente } = req.params;
  const { valor } = req.body;
 
  await contaServices.putDeposito(codCliente, valor);

  return res.status(200).json({ message: 'Depósito realizado com sucesso'});
};

module.exports = {
  getSaldo,
  putSaldo,
  putDeposito,
};