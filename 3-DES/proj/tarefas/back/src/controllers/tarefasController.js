const Item = require('../models/tarefas');
const con = require('../models/tarefasDAO');

const listarTarefas = (req, res) => {
    con.query(Item.toReadAll(), (err, result) => {
        if (err == null)
            res.status(201).json(result).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const Aberta = (req, res) => {
    con.query(Item.toReadAberta (req.params), (err, result) => {
        if (err == null)
            res.status(201).json(result).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const Finalizada = (req, res) => {
    con.query(Item.toReadFinalizada(req.params), (err, result) => {
        if (err == null)
            res.status(201).json(result).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const Cancelada = (req, res) => {
    con.query(Item.toReadCancelada(req.params), (err, result) => {
        if (err == null)
            res.status(201).json(result).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const cadastrarTarefa = (req, res) => {
    con.query(Item.toCreateTarefa(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const alterarHorarioFinalizada = (req, res) => {
    con.query(Item.toUpdateFinalizada(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

const alterarHorarioCancelada = (req, res) => {
    con.query(Item.toUpdateCancelada(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

module.exports = {
    listarTarefas,
    Aberta,
    Finalizada,
    Cancelada,
    cadastrarTarefa,
    alterarHorarioFinalizada,
    alterarHorarioCancelada

}