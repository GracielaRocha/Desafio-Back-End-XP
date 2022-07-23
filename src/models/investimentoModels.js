const { query } = require('./connection');
const connection = require('./connection');

const findByCod = async (codAtivo) => {
  const query = 'SELECT * FROM carteiraDigital.ativos WHERE codAtivo=?;';

  const [[ativo]] = await connection.execute(query, [codAtivo]);
  // console.log('console model', ativo);

  return ativo;
};

const putComprar = async (idCarteira, codCliente, codAtivo, qtVendida, valorAtivo) => {
  console.log('qtVendida', qtVendida);
  const query = 'UPDATE carteiraDigital.carteira_cliente SET cliente_id = ?, ativo_id = ?, qtdeAtivo = qtdeAtivo + ?, valorAtivo = ? WHERE idCarteira=?';

  const [comprarAtivo] = await connection.execute(query, [codCliente, codAtivo, qtVendida, valorAtivo, idCarteira]);

  return comprarAtivo;
}

const postComprar = async (codCliente, codAtivo, qtdeAtivo, valorAtivo) => {
  const query = 'INSERT INTO carteiraDigital.carteira_cliente (cliente_id, ativo_id, qtdeAtivo, valorAtivo) VALUES(?, ?, ?, ?)';

  const [comprarAtivo] = await connection.execute(query, [codCliente, codAtivo, qtdeAtivo, valorAtivo]);
  // console.log('console models compraAtivo', compraAtivo);
  return comprarAtivo;
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

const putVender = async (idCarteira, codCliente, codAtivo, qtVendida, valorAtivo) => {
  const query = 'UPDATE carteiraDigital.carteira_cliente SET cliente_id = ?, ativo_id = ?, qtdeAtivo = qtdeAtivo - ?, valorAtivo = ? WHERE idCarteira=?';

  const [venderAtivo] = await connection.execute(query, [codCliente, codAtivo, qtVendida, valorAtivo, idCarteira]);

  return venderAtivo;
}

const putSubAtivo = async (codAtivo, newQuantity, valorAtivo) => {
  const query = 'UPDATE carteiraDigital.ativos SET quantity = quantity - ?, valorAtivo = ? WHERE codAtivo=?';
  
  const [subAtivo] = await connection.execute(query, [newQuantity, valorAtivo, codAtivo]);
  
  return subAtivo;
}

const putAdiAtivo = async (codAtivo, newQuantity, valorAtivo) => {
  const query = 'UPDATE carteiraDigital.ativos SET quantity = quantity + ?, valorAtivo = ? WHERE codAtivo=?';
  
  const [adiAtivo] = await connection.execute(query, [newQuantity, valorAtivo, codAtivo]);
  
  return adiAtivo;
}

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

const editSaldo = async (codCliente, valor) => {
  const query = 'UPDATE carteiraDigital.conta_cliente SET saldo = saldo - ? WHERE cliente_id=?;';
  
  const saldo = await connection.execute(query, [ valor, codCliente]);
 
  return saldo;
}

const updateDeposito = async (codCliente, valor) => {
  const query = 'UPDATE carteiraDigital.conta_cliente SET saldo = saldo + ? WHERE cliente_id=?;';
  
  const deposito = await connection.execute(query, [ valor, codCliente]);
  
  return deposito;
}

const getAllAtivos = async () => {
  const query = `SELECT * FROM carteiraDigital.carteira_cliente qtdeAtivo * valorAtivo AS valorTotal;`;

  const ativos = await connection.execute(query);

  return ativos;
}

module.exports = {
  findByCod,
  putComprar,
  postComprar,
  findByClient,
  putVender,
  putAdiAtivo,
  putSubAtivo,
  getBalance,
  editSaldo,
  updateDeposito,
  getAllAtivos
}