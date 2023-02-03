const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createVenda = async (req, res) => {
    const info = req.body

    const vendas = await prisma.vendas.createMany({
        data: info
    })

    res.status(200).json(vendas).end()
}

const readVendas = async (req, res) => {
    let vendas = await prisma.vendas.findMany();

    res.status(200).json(vendas).end();
}

module.exports = {
    createVenda,
    readVendas
}