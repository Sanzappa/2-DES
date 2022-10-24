const toCreateClientes = (model) => {
    return `INSERT INTO clientes VALUES (DEFAULT,'${model.nome_cliente}','${model.endereco}','${model.telefone}')`;
}

const toReadAllClientes = () => {
    return "SELECT * FROM clientes";
}

const toUpdateClientes = (model) => {
    return `UPDATE clientes SET 
                nome_cliente = '${model.nome_cliente}',
                endereco = '${model.endereco}',
                telefone = '${model.telefone}'
                WHERE id = ${model.id}`;
}

const toDeleteClientes = (model) => {
    return `DELETE FROM clientes WHERE id=${model.id}`;
}

const toCreateVeiculos = (model) => {
    return `INSERT INTO veiculos VALUES (DEFAULT,'${model.placa}','${model.tipo}')`;
}

const toReadAllVeiculos = () => {
    return "SELECT * FROM veiculos";
}

const toUpdateVeiculos = (model) => {
    return `UPDATE veiculos SET 
                placa = '${model.placa}',
                tipo = '${model.tipo}'
                WHERE id = ${model.id}`;
}

const toDeleteVeiculos = (model) => {
    return `DELETE FROM veiculos WHERE id=${model.id}`;
}

const toCreateVagas = (model) => {
    return `INSERT INTO vagas VALUES (DEFAULT,'${model.disponivel}')`;
}

const toReadAllVagas = () => {
    return "SELECT * FROM vagas";
}

const toUpdateVagas = (model) => {
    return `UPDATE vagas SET 
                disponivel = '${model.disponivel}'
                WHERE id = ${model.id}`;
}

const toDeleteVagas = (model) => {
    return `DELETE FROM vagas WHERE id=${model.id}`;
}

const toCreateEntradas = (model) => {
    return `INSERT INTO entradas VALUES (DEFAULT, ${model.id_cliente}, ${model.id_veiculo}, ${model.data_entrada}, ${model.data_saida}, ${model.valor} )`;
}

const toReadAllEntradas = () => {
    return "SELECT * FROM entradas";
}

const toUpdateEntradas = (model) => {
    return `UPDATE entradas SET 
                data_entrada = '${model.data_entrada}',
                data_saida = '${model.data_saida}',
                valor = ${model.valor}
                WHERE id = ${model.id}`;
}


module.exports = {
    toCreateClientes,
    toReadAllClientes,
    toUpdateClientes,
    toDeleteClientes,
    toCreateVeiculos,
    toReadAllVeiculos,
    toUpdateVeiculos,
    toDeleteVeiculos,
    toCreateVagas,
    toReadAllVagas,
    toUpdateVagas,
    toDeleteVagas,
    toCreateEntradas,
    toReadAllEntradas,
    toUpdateEntradas
}