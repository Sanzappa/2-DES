const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createSetor = async (req, res) => {
    const info = req.body

    const setor = await prisma.setor.create({
        data: info
    })

    res.status(200).json(setor).end()
}

const readSetor = async (req, res) => {
    let setor = await prisma.setor.findMany();

    res.status(200).json(setor).end();
}

const readAllSetor = async (req, res) => {
    let setor = await prisma.setor.findMany({
        select: {
            nome: true,
            comissao: true,
            vendedor: true,
            produtos: true,
        }
    });

    res.status(200).json(setor).end();
}

module.exports = {
    createSetor,
    readSetor,
    readAllSetor
}