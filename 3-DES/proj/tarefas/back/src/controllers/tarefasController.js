const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const listarTarefas = async (req, res) => {
    const tarefas = await prisma.tarefas.findMany()

    res.status(200).json(tarefas).end()
}

const Aberta = async (req, res) => {
    const tarefas = await prisma.tarefas.findMany({
        where: {
            status_tarefa: "1 - Aberta"
        }
    })

    res.status(200).json(tarefas).end()
}

const Finalizada = async (req, res) => {
    const tarefas = await prisma.tarefas.findMany({
        where: {
            status_tarefa: "2 - Finalizada"
        }
    })

    res.status(200).json(tarefas).end()
}

const Cancelada = async (req, res) => {
    const tarefas = await prisma.tarefas.findMany({
        where: {
            status_tarefa: "3 - Cancelada"
        }
    })

    res.status(200).json(tarefas).end()
}

const cadastrarTarefa = async (req, res) => {
    const info = req.body

    const tarefas = await prisma.tarefas.create({
        data: info
    })

    res.status(200).json(tarefas).end()
}

const alterarHorarioFinalizada = async (req, res) => {
    const tarefas = await prisma.tarefas.update({
        where: {
            id_tarefa: Number(req.body.id_tarefa)
        },
        data: req.body
    })

    res.status(200).json(tarefas).end()
}

const alterarHorarioCancelada = async (req, res) => {
    const tarefas = await prisma.tarefas.update({
        where: {
            id_tarefa: Number(req.body.id_tarefa)
        },
        data: req.body
    })

    res.status(200).json(tarefas).end()
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