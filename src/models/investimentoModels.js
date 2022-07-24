const connection = require('./connection');

const getAtivo = async (codAtivo) => {
  const query = 'SELECT * FROM carteiraDigital.ativos WHERE codAtivo=?;';

  const [[ativo]] = await connection.execute(query, [codAtivo]);

  return ativo;
};

const getCliente = async (codCliente) => {
  const query = 'SELECT * FROM carteiraDigital.carteira_cliente WHERE cliente_id=?;';

  const [cliente] = await connection.execute(query, [codCliente]);

  return cliente;
};

const putComprar = async (idCarteira, codCliente, codAtivo, qtVendida, valorAtivo) => {
  console.log('qtVendida', qtVendida);
  const query = 'UPDATE carteiraDigital.carteira_cliente SET cliente_id = ?, ativo_id = ?, qtdeAtivo = qtdeAtivo + ?, valorAtivo = ? WHERE idCarteira=?';

  const [comprarAtivo] = await connection.execute(query, [codCliente, codAtivo, qtVendida, valorAtivo, idCarteira]);

  return comprarAtivo;
};

const postComprar = async (codCliente, codAtivo, qtdeAtivo, valorAtivo) => {
  const query = 'INSERT INTO carteiraDigital.carteira_cliente (cliente_id, ativo_id, qtdeAtivo, valorAtivo) VALUES(?, ?, ?, ?)';

  const [comprarAtivo] = await connection.execute(query, [codCliente, codAtivo, qtdeAtivo, valorAtivo]);
  
  return comprarAtivo;
};

const putVender = async (idCarteira, codCliente, codAtivo, qtVendida, valorAtivo) => {
  const query = 'UPDATE carteiraDigital.carteira_cliente SET cliente_id = ?, ativo_id = ?, qtdeAtivo = qtdeAtivo - ?, valorAtivo = ? WHERE idCarteira=?';

  const [venderAtivo] = await connection.execute(query, [codCliente, codAtivo, qtVendida, valorAtivo, idCarteira]);

  return venderAtivo;
};

const putSubAtivo = async (codAtivo, newQuantity, valorAtivo) => {
  const query = 'UPDATE carteiraDigital.ativos SET quantity = quantity - ?, valorAtivo = ? WHERE codAtivo=?';
  
  const [subAtivo] = await connection.execute(query, [newQuantity, valorAtivo, codAtivo]);
  
  return subAtivo;
};

const putAdiAtivo = async (codAtivo, newQuantity, valorAtivo) => {
  const query = 'UPDATE carteiraDigital.ativos SET quantity = quantity + ?, valorAtivo = ? WHERE codAtivo=?';
  
  const [adiAtivo] = await connection.execute(query, [newQuantity, valorAtivo, codAtivo]);
  
  return adiAtivo;
};

const getAllAtivos = async () => {
  const query = `SELECT *,
  qtdeAtivo * valorAtivo AS valorTotal
  FROM carteiraDigital.carteira_cliente`;

  const ativos = await connection.execute(query);

  return ativos;
};

module.exports = {
  getAtivo,
  putComprar,
  postComprar,
  getCliente,
  putVender,
  putAdiAtivo,
  putSubAtivo,
  getAllAtivos
};