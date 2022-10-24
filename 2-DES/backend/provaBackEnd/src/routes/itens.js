const express = require('express');
const router = express.Router();

const ItemProdutos = require("../controllers/produtosController");
const ItemDepartamentos = require("../controllers/departamentosController");

router.post("/solicitacoes/produtos", ItemProdutos.criarItem);
router.get("/solicitacoes/produtos", ItemProdutos.listarItens);
router.get("/solicitacoes/produtos/:Nome_produto", ItemProdutos.listarItemNome);
router.get("/solicitacoes/vw_solicitacoes/:Data_sol", ItemProdutos.listarItemData);

router.post("/solicitacoes/departamentos", ItemDepartamentos.criarItem);
router.delete("/solicitacoes/departamentos/:Cod_Depto", ItemDepartamentos.excluirItem);

module.exports = router;