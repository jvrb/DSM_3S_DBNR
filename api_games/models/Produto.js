const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
	_id: Number,
	nome: String,
	categoria: String,
	valor: Number,
});

module.exports = mongoose.model("Produto", produtoSchema);
