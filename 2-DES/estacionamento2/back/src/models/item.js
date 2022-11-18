const toCreateClientes = (model) => {
    return `INSERT INTO clientes VALUES (DEFAULT,'${model.nome_cliente}','${model.endereco}','${model.telefone}')`;
}
const toCreateVeiculos = (model) => {
    return `INSERT INTO veiculos VALUES (DEFAULT,'${model.placa}','${model.tipo}')`;
}

const toReadAllClientes = () => {
    return "SELECT * FROM clientes";
}

const toReadAllCli = () => {
    return "SELECT * FROM vw_clientes";
}

const toDeleteClientes = (model) => {
    return `DELETE FROM clientes WHERE id_cliente=${model.id_cliente}`;
}

const toReadAllVeiculos = () => {
    return "SELECT * FROM veiculos";
}

const toUpdateVeiculos = (model) => {
    return `UPDATE veiculos SET 
                placa = '${model.placa}',
                tipo = '${model.tipo}'
                WHERE id_veiculo = ${model.id}`;
}

// const toDeleteVeiculos = (model) => {
//     return ``;
// }

const toCreateVagas = (model) => {
    return `INSERT INTO vagas VALUES ('${model.id}','${model.disponivel}')`;
}

const toReadAllVagas = () => {
    return "SELECT * FROM vagas";
}

const toUpdateVagas = (model) => {
    return `UPDATE vagas SET 
                disponivel = '${model.disponivel}'
                WHERE id = '${model.id}'`;
}

const toDeleteVagas = (model) => {
    return `DELETE FROM vagas WHERE id=${model.id}`;
}

const toCreateEntradas = (model) => {
    return `INSERT INTO entrada VALUES (DEFAULT, ${model.id_cliente}, ${model.id_veiculo}, curdate(), '${model.hora_entrada}', '${model.hora_saida}', ${model.valor} )`;
}

const toReadAllEntradas = () => {
    return "SELECT * FROM entrada";
}

const toUpdateEntradas = (model) => {
    return `UPDATE entrada SET hora_saida = '${model.hora_saida}' WHERE id = ${model.id}`;
}


module.exports = {
    toCreateClientes,
    toReadAllClientes,
    toReadAllCli,
    toDeleteClientes,
    toCreateVeiculos,
    toReadAllVeiculos,
    toUpdateVeiculos,
    toCreateVagas,
    toReadAllVagas,
    toUpdateVagas,
    toDeleteVagas,
    toCreateEntradas,
    toReadAllEntradas,
    toUpdateEntradas
}