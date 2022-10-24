const Item = require('../models/item');
const con = require('../models/estacionamentoDAO');

const criarItem = (req, res) => {
    con.query(Item.toCreateVeiculos(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const listarItens = (req, res) => {
    con.query(Item.toReadAllVeiculos(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const alterarItem = (req, res) => {
    con.query(Item.toUpdateVeiculos(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

const excluirItem = (req, res) => {
    con.query(Item.toDeleteVeiculos(req.params), (err, result) => {
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
    listarItens,
    alterarItem,
    excluirItem
}