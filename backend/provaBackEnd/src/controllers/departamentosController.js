const Item = require('../models/item');
const con = require('../models/solicitacoesDAO');

const criarItem = (req, res) => {
    con.query(Item.toCreateDepartamentos(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const excluirItem = (req, res) => {
    con.query(Item.toDeleteDepartamentos(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

module.exports = {
    criarItem,
    excluirItem
}