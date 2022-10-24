const toCreateProdutos = (model) => {
    return `INSERT INTO produtos VALUES (${model.Cod_Produto},'${model.Nome_produto}')`;
}

const toReadAllProdutos = () => {
    return "SELECT * FROM produtos";
}

const toReadNomeProdutos = (model) => {
    return `SELECT * FROM produtos WHERE Nome_produto like '%${model.Nome_produto}%'`;
}

const toReadMesProdutos = (model) => {
    return `SELECT * FROM vw_solicitacoes WHERE Data_sol like '%${model.Data_sol}%'`;
}

const toCreateDepartamentos = (model) => {
    return `INSERT INTO departamentos VALUES (${model.Cod_Depto},'${model.Nome_Depto}')`;
}

const toDeleteDepartamentos = (model) => {
    return `DELETE FROM departamentos WHERE Cod_Depto=${model.Cod_Depto}`;
}

module.exports = {
    toCreateProdutos,
    toReadAllProdutos,
    toReadMesProdutos,
    toReadNomeProdutos,
    toCreateDepartamentos,
    toDeleteDepartamentos
}