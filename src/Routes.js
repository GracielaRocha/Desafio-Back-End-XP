const express = require('express');

const router = express.Router();

const investimento = require('./controllers/investimentoController');

router.get('/ativos/:codAtivo', investimento.findByCod);

router.post('/investimentos/compras', investimento.createBuy);

module.exports = router;