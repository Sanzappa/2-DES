const express = require('express');
const router = express.Router();

const ItemCliente = require("../controllers/clienteController");
const ItemEntradas = require("../controllers/entradasController");
const ItemVagas = require("../controllers/vagasController");
const ItemVeiculos = require("../controllers/veiculosController");

router.post("/estacionamento/clientes", ItemCliente.criarItem);
router.get("/estacionamento/clientes", ItemCliente.listarItens);
router.get("/estacionamento/clientes/view", ItemCliente.listar);
router.delete("/estacionamento/clientes/:id", ItemCliente.excluirItem);

router.post("/estacionamento/entrada", ItemEntradas.criarItem);
router.get("/estacionamento/entrada", ItemEntradas.listarItens);
router.put("/estacionamento/entrada", ItemEntradas.alterarItem);

router.post("/estacionamento/vagas", ItemVagas.criarItem);
router.get("/estacionamento/vagas", ItemVagas.listarItens);
router.put("/estacionamento/vagas", ItemVagas.alterarItem);
router.delete("/estacionamento/vagas", ItemVagas.excluirItem);

router.post("/estacionamento/veiculos", ItemVeiculos.criarItem);
router.get("/estacionamento/veiculos", ItemVeiculos.listarItens);
router.put("/estacionamento/veiculos", ItemVeiculos.alterarItem);
router.delete("/estacionamento/veiculos", ItemVeiculos.excluirItem);

module.exports = router;