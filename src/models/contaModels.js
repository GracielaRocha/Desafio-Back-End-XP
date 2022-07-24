const connection = require('./connection');

const getSaldo = async (codCliente) => {
  const query =  'SELECT * FROM carteiraDigital.conta_cliente WHERE cliente_id=?;';

  const [salCliente] = await connection.execute(query, [codCliente]);

  return salCliente;
};

const putSaque = async (codCliente, valor) => {
  const query = 'UPDATE carteiraDigital.conta_cliente SET saldo = saldo - ? WHERE cliente_id=?;';
  
  const saque = await connection.execute(query, [ valor, codCliente]);
 
  return saque;
};

const putDeposito = async (codCliente, valor) => {
  const query = 'UPDATE carteiraDigital.conta_cliente SET saldo = saldo + ? WHERE cliente_id=?;';
  
  const deposito = await connection.execute(query, [ valor, codCliente]);
  
  return deposito;
};

module.exports = {
  getSaldo,
  putSaque,
  putDeposito,
};