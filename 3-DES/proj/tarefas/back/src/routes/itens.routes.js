const Express = require('express');

const router = Express.Router();

const tarefasController = require("../controllers/tarefasController");

router.get("/listarTarefas", tarefasController.listarTarefas);
router.get("/listarAberta", tarefasController.Aberta);
router.get("/listarFinalizada", tarefasController.Finalizada);
router.get("/listarCancelada", tarefasController.Cancelada);
router.post("/cadTarefa", tarefasController.cadastrarTarefa);
router.put("/updateFinalizada", tarefasController.alterarHorarioFinalizada);
router.put("/updateCancelada", tarefasController.alterarHorarioCancelada);

module.exports = router;