const toCreate = (model) => {
    return `INSERT INTO pedidos VALUES (default, '${model.cliente}', '${model.endereco}', '${model.produto}', '${model.data}', '${model.hora_pedido}', '${model.hora_entrega}', '${model.hora_fim}', '${model.id_entregador}');`;
}

const toReadAll = () => {
    return 'SELECT * FROM pedidos'
}

const toUpdateEntrega = (model) => {
    return `UPDATE pedidos SET hora_entrega = '${model.hora_entrega}' WHERE id_pedido = ${model.id_pedido} `
}

const toUpdateFim = (model) => {
    return `UPDATE pedidos SET hora_fim = '${model.hora_fim}' WHERE id_pedido = ${model.id_pedido} `
}

const toDelete = (model) => {
    return `DELETE FROM pedidos WHERE id_pedido = ${model.id_pedido}`
}

module.exports = {
    toCreate,
    toReadAll,
    toUpdateEntrega,
    toUpdateFim,
    toDelete
}