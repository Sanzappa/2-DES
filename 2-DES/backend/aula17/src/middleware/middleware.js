const { json } = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const validaAcesso = (req, res, next) =>{
    const token = req.headers.authorization

    jwt.verify(token, process.env.KEY, (err, data) => {
        if(err != null) res.status(400).json(err).end()
        else{
        if(data.role === 'Admin'){
            next()
        }else{
            res.status(401).end()
            }
        }   
    })

    res.status(200).end()
}

module.exports = {
    validaAcesso
}