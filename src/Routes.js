const express = require('express');

const router = express.Router();

const investimento = require('./controllers/investimentoController');
const validateValor = require('./middleware/validateValor');

router.get('/ativos/:codAtivo', investimento.findByCod);
router.get('/clientes/:codCliente', investimento.findByClient);
router.get('/conta/:codCliente', investimento.getBalance);
router.post('/investimentos/comprar', investimento.createBuy);

router.put('/investimentos/vender/:idCarteira', investimento.putVender);
router.put('/conta/saque/:codCliente', validateValor, investimento.editSaldo);
router.put('/conta/deposito/:codCliente', validateValor, investimento.updateDeposito);
router.put('/conta/subtrairAtivo/:codAtivo', investimento.putSubAtivo);
router.put('/conta/adicionarAtivo/:codAtivo', investimento.putAdiAtivo);

module.exports = router;