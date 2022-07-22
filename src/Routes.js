const express = require('express');

const router = express.Router();

const investimento = require('./controllers/investimentoController');
const validateValor = require('./middleware/validateValor');

router.get('/ativos/:codAtivo', investimento.findByCod);
router.get('/clientes/:codCliente', investimento.findByClient);
router.get('/conta/:codCliente', investimento.getBalance);
router.post('/investimentos/comprar', investimento.createBuy);
// router.post('/investimentos/vender', investimento.createSell);

router.put('/conta/saque/:codCliente', validateValor, investimento.updateSaque);
router.put('/conta/deposito/:codCliente', validateValor, investimento.updateDeposito);
router.put('/conta/ativo/:codAtivo', investimento.updateAssest);

module.exports = router;