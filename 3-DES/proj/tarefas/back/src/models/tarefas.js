const toReadAll = () => {
    return 'SELECT * FROM tarefas'
}

const toReadAberta = (model) => {
    return `SELECT * FROM tarefas where status_tarefa = "1 - Aberta"`
}

const toReadFinalizada = (model) => {
    return `SELECT * FROM tarefas where status_tarefa = "2 - Finalizada"`
}

const toReadCancelada = (model) => {
    return `SELECT * FROM tarefas where status_tarefa = "3 - Cancelada"`
}

const toCreateTarefa = (model) => {
    return `INSERT INTO tarefas VALUES (default, '${model.descricao}', '${model.horario_tarefa}', '${model.horario_encerramento}', '${model.status_tarefa}');`;
}

const toUpdateFinalizada = (model) => {
    return `UPDATE tarefas SET horario_encerramento = '${model.horario_encerramento}', status_tarefa = '${model.status_tarefa}' WHERE id_tarefa = ${model.id_tarefa} `
}

const toUpdateCancelada = (model) => {
    return `UPDATE tarefas SET horario_encerramento  = '${model.horario_encerramento}' WHERE id_tarefa = ${model.id_tarefa} `
}

module.exports = {
    toReadAll,
    toReadAberta,
    toReadFinalizada,
    toReadCancelada,
    toCreateTarefa,
    toUpdateFinalizada,
    toUpdateCancelada
}