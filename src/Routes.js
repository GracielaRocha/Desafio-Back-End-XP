const express = require('express');

const router = express.Router();

const investimento = require('./controllers/investimentoController');
const conta = require('./controllers/contaControllers');
const validacaoValor = require('./middleware/validacaoValor');
// const validacaoAtivo = require('./middleware/validacaoAtivo');

router.get('/ativos/:codAtivo', investimento.getAtivo);
router.get('/clientes/:codCliente', investimento.getCliente);
router.get('/conta/:codCliente', conta.getSaldo);
router.get('/investimentos/clientes', investimento.getAllAtivos);

router.post('/investimentos/comprar', investimento.postComprar);

router.put('/investimentos/vender/:idCarteira', investimento.putVender);
router.put('/conta/saque/:codCliente', validacaoValor, conta.putSaldo);
router.put('/conta/deposito/:codCliente', validacaoValor, conta.putDeposito);
router.put('/investimento/subtrairAtivo/:codAtivo', investimento.putSubAtivo);
router.put('/investimento/adicionarAtivo/:codAtivo', investimento.putAdiAtivo);

module.exports = router;