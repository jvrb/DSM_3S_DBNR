import express from "express";
import mongoose from "mongoose";
import ProdutoRoutes from "./routes/ProdutoRoutes.js"

const app = express()

app.use(express.json())

app.use("/produtos", ProdutoRoutes)

mongoose.connect("mongodb://localhost:27017/rede_games")
.then(() => console.log("Conectado ao MongoDB"))
.catch( error => console.error("Erro ao conectar", error))

app.listen(3000, () => console.log("Servidor Rodando na porta 3000"))