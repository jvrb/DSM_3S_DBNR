const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
	_id: Number,
	nome: String,
	idade: Number,
	cidade: String,
});

module.exports = mongoose.model("Cliente", clienteSchema);
