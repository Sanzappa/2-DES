const toReadAll = () => {
    return 'SELECT * FROM entregadores'
}
const toRead = (model) => {
    return `SELECT * FROM entregadores where id_entregador = ${model.id}`
}

module.exports = {
    toReadAll,
    toRead
}