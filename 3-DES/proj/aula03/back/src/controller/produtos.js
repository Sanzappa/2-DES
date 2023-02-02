const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createProduto = async (req, res) => {
    const info = req.body

    const produtos = await prisma.produtos.create({
        data: info
    })

    res.status(200).json(produtos).end()
}

const readProdutos = async (req, res) => {
    let produtos = await prisma.produtos.findMany();

    res.status(200).json(produtos).end();
}

module.exports = {
    createProduto,
    readProdutos
}