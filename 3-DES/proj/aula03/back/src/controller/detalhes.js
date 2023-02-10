const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createDetalhe = async (req, res) => {
    const info = req.body

    const detalhe = await prisma.detalhe.createMany({
        data: info
    })

    res.status(200).json(detalhe).end()
}

const readDetalhes = async (req, res) => {
    let detalhe = await prisma.detalhe.findMany({
        select: {
            id_produto: true,
            id_venda: true,
            quantidade: true,
            produto: true,
            vendas: true
        }
    });

    res.status(200).json(detalhe).end();
}

module.exports = {
    createDetalhe,
    readDetalhes
}