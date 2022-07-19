const express = require('express');

const router = express.Router();

const investimento = require('./controllers/investimentoController');

router.get('/ativos/:codAtivo', investimento.findByCod);
router.get('/ativos/:codCliente', investimento.findByClient);

router.post('/investimentos/comprar', investimento.createBuy);
router.post('/investimentos/comprar', investimento.createSell);

module.exports = router;