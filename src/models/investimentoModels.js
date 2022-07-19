const connection = require('./connection');

const findByCod = async (codAtivo) => {
  const query = 'SELECT * FROM ativos WHERE codAtivo=?;';

  const [[ativo]] = await connection.execute(query, [codAtivo]);

  return ativo;
};

const createBuy = async (codCliente, codAtivo, qtdeAtivo) => {
  const query = 'INSERT INTO operacoes_ativos (codCliente, codAtivo, qtdeAtivo) VALUES(?, ?, ?)';

  const [compraAtivo] = await connection.execute(query, [codCliente, codAtivo, qtdeAtivo]);

  return compraAtivo;
}

const createSell = async (codCliente, codAtivo, qtdeAtivo) => {
  const query = 'INSERT INTO operacoes_ativos (codCliente, codAtivo, qtdeAtivo) VALUES(?, ?, ?)';

  const [vendaAtivo] = await connection.execute(query, [codCliente, codAtivo, qtdeAtivo]);

  return vendaAtivo;
}

// const getAll = async () => {
//   const [ativos] = await connection.execute('SELECT * FROM ativos;');

//   return ativos.map(({ codAtivo, quantity, valAtivo }) => ({
//     codAtivo,
//     quantity,
//     valAtivo,
//   }));
// };

module.exports = {
  findByCod, 
  createBuy,
  createSell,
}