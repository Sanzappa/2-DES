const express = require('express');

const router = express.Router();

const Vendedor = require('../controller/vendedor');
const Produto = require('../controller/produtos');
const Setor = require('../controller/setor');
const Vendas = require('../controller/vendas');
const Detalhes = require('../controller/detalhes');

router.post('/vendedor', Vendedor.createVendedor);
router.post('/produto', Produto.createProduto);
router.post('/setor', Setor.createSetor);
router.post('/vendas', Vendas.createVenda);
router.post('/detalhes', Detalhes.createDetalhe);

router.get('/vendedor', Vendedor.readVendedor);
router.get('/produto', Produto.readProdutos);
router.get('/setor', Setor.readSetor);
router.get('/setorAll', Setor.readAllSetor);
router.get('/vendas', Vendas.readVendas);
router.get('/detalhes', Detalhes.readDetalhes);

module.exports = router;