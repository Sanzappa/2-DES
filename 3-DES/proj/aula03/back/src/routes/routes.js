const express = require('express');

const router = express.Router();

const Vendedor = require('../controller/vendedor');
const Produto = require('../controller/produtos');
const Setor = require('../controller/setor');

router.post('/vendedor', Vendedor.createVendedor);
router.post('/produto', Produto.createProduto);
router.post('/setor', Setor.createSetor);
router.get('/vendedor', Vendedor.readVendedor);
router.get('/produto', Produto.readProdutos);
router.get('/setor', Setor.readSetor);
router.get('/setorAll', Setor.readAllSetor);

module.exports = router;