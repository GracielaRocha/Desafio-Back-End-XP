const ativosServices = require('../services/investimentoServices');

const getAtivo = async (req, res) => {
  const { codAtivo } = req.params;
  
  const ativo = await ativosServices.getAtivo(codAtivo);

  if(ativo === null) {
    return res.status(404).json({ message: 'Ativo não encontrado'});
  }
    return res.status(200).json(ativo);
};

const getCliente = async (req, res) => {
  const { codCliente } = req.params;
  
  const cliente = await ativosServices.getCliente(codCliente);

  if(cliente === null) {
    return res.status(404).json({ message: 'Cliente não encontrado'});
  }
    return res.status(200).json(cliente);
};

const postComprar = async (req, res) => {
  const { codCliente, codAtivo, qtdeAtivo, valorAtivo } = req.body;

  const comprarAtivo = await ativosServices.postComprar(codCliente, codAtivo, qtdeAtivo, valorAtivo);
  
  if (comprarAtivo === null) {
    return res.status(404).json({ message: 'Ativo não encontrado ou quantidade de ativo insuficiente pra venda'});
  }
    return res.status(201).json({ message: 'Compra realizada com sucesso' });
};

const putVender = async (req, res) => {
  const { idCarteira } = req.params;
  const { codCliente, codAtivo, qtVendida, valorAtivo } = req.body;
  
  const venderAtivo = await ativosServices.putVender(idCarteira, codCliente, codAtivo, qtVendida, valorAtivo);

  if (venderAtivo === null) {
    return res.status(404).json({ message: 'Quantidade de ativos em carteira insuficiente para venda' });
  }
  return res.status(201).json({ message: 'Venda realizada com sucesso' });
};

const putSubAtivo = async (req, res) => {
  const { codAtivo } = req.params;
  const { newQuantity, valorAtivo } = req.body;
 
  await ativosServices.putSubAtivo(codAtivo, newQuantity, valorAtivo);

  return res.status(200).json({ message: 'Quantidade do ativo alterado com sucesso' });
};

const putAdiAtivo = async (req, res) => {
  const { codAtivo } = req.params;
  const { newQuantity, valorAtivo } = req.body;
 
  await ativosServices.putAdiAtivo(codAtivo, newQuantity, valorAtivo);
  
  return res.status(200).json({ message: 'Quantidade do ativo alterado com sucesso' });
};

const getAllAtivos = async (req, res) => {
  const ativos = await ativosServices.getAllAtivos();

  return res.status(200).json(ativos);
};

module.exports = {
  getAtivo,
  postComprar,
  getCliente,
  putSubAtivo,
  putVender,
  putAdiAtivo,
  getAllAtivos
};