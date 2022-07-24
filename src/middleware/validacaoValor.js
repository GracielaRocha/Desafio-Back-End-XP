const validacaoValor = (req, res, next) => {
  const { valor } = req.body;

  if (!valor) {
    return res.status(400).json({ message: 'Valor é necessário' });
  }
  if (+valor <= 0) {
    return res.status(422).json({ message: 'Valor deve ser maior que 0' });
  } 
  next();
};

module.exports = validacaoValor;