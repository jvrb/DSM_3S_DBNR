const mongoose = require("mongoose");

const vendaSchema = new mongoose.Schema({
    id: Number,
    clienteId: Number,
    produtoId: Number,
    data: String
})

module.exports = mongoose.model("Venda", vendaSchema)