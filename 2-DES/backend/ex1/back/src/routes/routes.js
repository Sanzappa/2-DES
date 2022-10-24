const Express = require('express');

const router = Express.Router();

const Item = require("../controllers/solController.js");

router.post("/solicitacoes/itens", Item.criarItem);
router.get("/solicitacoes/itens", Item.listarItens);

module.exports = router;