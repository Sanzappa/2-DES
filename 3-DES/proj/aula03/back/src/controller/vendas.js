const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createVenda = async (req, res) => {
    let { id_vendedor } = req.body;

    let venda = await prisma.vendas.create({
        data: {
            id_vendedor,
            data: new Date(),
            detalhe: {
                create: req.body.detalhe
            }
        }
    });

    res.status(200).json(venda).end();
}

const readVendas = async (req, res) => {
    let vendas = await prisma.vendas.findMany({
        select: {
            data: true,
            vendedor: {
                select: {
                    nome: true,
                    id: true
                }
            },
            detalhe: {
                select: {
                    quantidade: true,
                    produto: true
                }
            }
        }
    });

    res.status(200).json(vendas).end();
}

module.exports = {
    createVenda,
    readVendas
}