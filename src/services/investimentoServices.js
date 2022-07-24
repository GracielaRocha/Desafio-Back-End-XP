const ativosModels = require('../models/investimentoModels');

const getAtivo = async (codAtivo) => {
  const ativo = await ativosModels.getAtivo(codAtivo);

  if (!ativo) return null;

  return ativo;
};

const getCliente = async (codCliente) => {
  const cliente = await ativosModels.getCliente(codCliente);

  if (cliente.length === 0) return null;

  return cliente;
};

const putComprar = async (idCarteira, codCliente, codAtivo, qtVendida, valorAtivo) => {
  const comprarAtivo = await ativosModels.putComprar(idCarteira, codCliente, codAtivo, qtVendida, valorAtivo);

  return comprarAtivo;
};

const postComprar = async (codCliente, codAtivo, qtdeAtivo, valorAtivo) => {
  const ativo = await getAtivo(codAtivo);
  // console.log('ativo', ativo);
  if (!ativo || ativo.quantity < qtdeAtivo) return null;

  const cliente = await getCliente(codCliente);
  console.log('cliente', cliente);
  if (cliente !== null) {
    const buscarAtivo = cliente.find((item) => item.ativo_id === codAtivo);
    console.log('buscarAtivo', buscarAtivo);
    if (buscarAtivo !== undefined) {
      return await putComprar(buscarAtivo.idCarteira, buscarAtivo.cliente_id, buscarAtivo.ativo_id, qtdeAtivo, buscarAtivo.valorAtivo);
    }
  }
    return await ativosModels.postComprar(codCliente, codAtivo, qtdeAtivo, valorAtivo); 
    
};

const putVender = async (idCarteira, codCliente, codAtivo, qtVendida, valorAtivo) => {
  const [qtAtivos] = await getCliente(codCliente);
  
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

const getAllAtivos = async () => {
  return await ativosModels.getAllAtivos();
};

module.exports = {
  getAtivo,
  putComprar,
  postComprar,
  getCliente,
  putVender,
  putSubAtivo,
  putAdiAtivo,
  getAllAtivos
};