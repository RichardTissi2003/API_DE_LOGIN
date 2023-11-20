const mongoose = require('mongoose')

//CONEXAO COM BANCO DE DADOS 
mongoose.connect('mongodb+srv://richardtissi:12052003R@cluster0.hkwo6x0.mongodb.net/').then(() => {
    console.log("Conectado ao Banco de Dados Mongoose")
}).catch((err) => {
    console.log('Erro ao se conectar ao Banco de Dados Mongoose' + err)
})

module.exports = mongoose