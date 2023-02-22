const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken')

const create = async (req, res) => {
    const info = req.body

    const usuario = await prisma.usuario.create({
        data: info
    })

    res.status(200).json(usuario).end()
}

const login = async (req, res) => {
    const user = await prisma.usuario.findFirst({
        where: {
            AND: {
                email : req.body.email,
                senha: req.body.senha
            }
        }
    })
    console.log(user)
    if(user != null){
        const data = {
            "id": user.id,
            "nome": user.nome,
            "tipo": user.tipo
        }
    
        jwt.sign(data, process.env.KEY, {expiresIn: '1m'},function (err, token){
            if(err == null) {
                data["token"] = token
                res.status(200).json(data).end();
            }else{
                console.log(err)
                res.status(404).json(err).end()
            }
        })
    } else {
        res.status(404).end()
    }
}

const remover = async (req, res) => {
    const user = await prisma.usuario.delete({
        where:{
            id: Number(req.body.id)
        }
    })
    res.status(200).json({msg:"Usuario deletado"}).end()
}

module.exports = {
    login,
    create,
    remover
}