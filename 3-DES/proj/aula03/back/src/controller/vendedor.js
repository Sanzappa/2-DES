const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createVendedor = async (req, res) => {
    const info = req.body

    const vendedor= await prisma.vendedor.create({
        data: info
    })

    res.status(200).json(vendedor).end()
}

const readVendedor = async (req, res) => {
    let vendedor = await prisma.vendedor.findMany();

    res.status(200).json(vendedor).end();
}

module.exports = {
    createVendedor,
    readVendedor
}