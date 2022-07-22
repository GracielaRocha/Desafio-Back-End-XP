const { query } = require('./connection');
const connection = require('./connection');

const findByCod = async (codAtivo) => {
  const query = 'SELECT * FROM carteiraDigital.ativos WHERE codAtivo=?;';

  const [[ativo]] = await connection.execute(query, [codAtivo]);
  // console.log('console model', ativo);

  return ativo;
};

const createBuy = async (codCliente, codAtivo, qtdeAtivo, valorAtivo) => {
  const query = 'INSERT INTO carteiraDigital.carteira_cliente (cliente_id, ativo_id, qtdeAtivo, valorAtivo) VALUES(?, ?, ?, ?)';

  const [compraAtivo] = await connection.execute(query, [codCliente, codAtivo, qtdeAtivo, valorAtivo]);
  // console.log('console models compraAtivo', compraAtivo);
  return compraAtivo;
}

const findByClient = async (codCliente) => {
  const query = 'SELECT * FROM carteiraDigital.carteira_cliente WHERE cliente_id=?;';

  const [cliente] = await connection.execute(query, [codCliente]);
  // console.log('console log finByCliente models', cliente);

  return cliente;
};

// const updateClient = async (idCarteira, { qtdeAtivo }) => {
//   const query = 'UPDATE carteiraDigital.carteira_cliente SET qtdeAtivo = ? WHERE idCarteira=?';
  
//   const [cliente] = await connection.execute(query, [qtdeAtivo, idCarteira]);
  
//   return cliente;
// }

const updateAssest = async (codAtivo, newQuantity, valorAtivo) => {
  const query = 'UPDATE carteiraDigital.ativos SET quantity = quantity - ?, valorAtivo = ? WHERE codAtivo=?';
  
  const [ativo] = await connection.execute(query, [newQuantity, valorAtivo, codAtivo]);
  
  return ativo;
}

// const createSell = async (codCliente, codAtivo, qtdeAtivo, valorAtivo) => {
//   const query = 'INSERT INTO carteiraDigital.carteira_cliente (codCliente, codAtivo, qtdeAtivo, valorAtivo) VALUES(?, ?, ?)';

//   const [vendaAtivo] = await connection.execute(query, [codCliente, codAtivo, qtdeAtivo, valorAtivo]);

//   return vendaAtivo;
// }

// const getBalance = async (codCliente) => {

// }

// const getAll = async () => {
//   const [ativos] = await connection.execute('SELECT * FROM ativos;');

//   return ativos.map(({ codAtivo, quantity, valAtivo }) => ({
//     codAtivo,
//     quantity,
//     valAtivo,
//   }));
// };

const getBalance = async (codCliente) => {
  const query =  'SELECT * FROM carteiraDigital.conta_cliente WHERE cliente_id=?;';

  const [salCliente] = await connection.execute(query, [codCliente]);
  // console.log('console log getBalance models', salCliente);

  return salCliente;
}

const updateSaque = async (codCliente, valor) => {
  const query = 'UPDATE carteiraDigital.conta_cliente SET saldo = saldo - ? WHERE cliente_id=?;';
  
  const saque = await connection.execute(query, [ valor, codCliente]);
 
  return saque;
}

const updateDeposito = async (codCliente, valor) => {
  const query = 'UPDATE carteiraDigital.conta_cliente SET saldo = saldo + ? WHERE cliente_id=?;';
  
  const deposito = await connection.execute(query, [ valor, codCliente]);
  
  return deposito;
}

module.exports = {
  findByCod, 
  createBuy,
  findByClient,
  // createSell,
  // updateClient,
  updateAssest,
  getBalance,
  updateSaque,
  updateDeposito,
}