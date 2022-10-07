const Item = require('../models/item');
const con = require('../models/solicitacoesDAO');

const criarItem = (req, res) => {
    con.query(Item.toCreateProdutos(req.body), (err, result) => {
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
    con.query(Item.toReadAllProdutos(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const listarItemNome = (req, res) => {
    con.query(Item.toReadNomeProdutos(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const listarItemData = (req, res) => {
    con.query(Item.toReadMesProdutos(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

module.exports = {
    criarItem,
    listarItens,
    listarItemNome,
    listarItemData
}