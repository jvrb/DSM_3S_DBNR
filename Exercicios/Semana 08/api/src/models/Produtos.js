import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    nome: String,
    categoria: String,
    preco: Number,
    estoque: Number,
    desconto: Number
})

export default mongoose.model("Produtos", produtoSchema)