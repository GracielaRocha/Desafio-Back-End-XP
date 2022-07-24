const ativosModels = require('../models/investimentoModels');

const getAtivo = async (codAtivo) => {
  const ativo = await ativosModels.getAtivo(codAtivo);

  if (!ativo) return null;

  return ativo;
};

const getCliente = async (codCliente) => {
  const cliente = await ativosModels.getCliente(codCliente);

  if (!cliente) return null;

  return cliente;
};

const putComprar = async (idCarteira, codCliente, codAtivo, qtVendida, valorAtivo) => {
  const comprarAtivo = await ativosModels.putComprar(idCarteira, codCliente, codAtivo, qtVendida, valorAtivo);

  return comprarAtivo;
};

const postComprar = async (codCliente, codAtivo, qtdeAtivo, valorAtivo) => {
  const ativo = await getAtivo(codAtivo);
  console.log(ativo);
  if (!ativo || ativo.quantity < qtdeAtivo) return null;

  const cliente = await getCliente(codCliente);

  if (!cliente) return await ativosModels.postComprar(codCliente, codAtivo, qtdeAtivo, valorAtivo); 
  
  const buscarAtivo = cliente.find((item) => item.ativo_id === codAtivo);
  console.log(buscarAtivo);
  if (buscarAtivo) {
    return await putComprar(buscarAtivo.idCarteira, buscarAtivo.cliente_id, buscarAtivo.ativo_id, qtdeAtivo, buscarAtivo.valorAtivo);
  }
    return null;
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