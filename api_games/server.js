const express = require("express")
const mongoose = require("mongoose")
const app = express()

const Cliente = require("./routes/cliente")
const Produto = require("./routes/produto")
const Vendas = require("./routes/venda")

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/rede_games")
.then(() => console.log("Conectado ao MongoDb"))
.catch(() => console.log("Erro co conectar", err))


app.use("/clientes", Cliente)

app.use("/produtos", Produto)

app.use("/vendas", Vendas)

app.listen(3000, () => console.log("Servidor Rodando na porta 3000"))


