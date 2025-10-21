const express = require("express");
const Cliente = require("../models/Cliente");
const Vendas = require("../models/Vendas");
const router = express.Router();

router.get("/", async (req, res) => {
	const clientes = await Cliente.find();
	res.json(clientes);
});

router.post("/", async (req, res) => {
	const newCliente = new Cliente(req.body);
	await newCliente.save();
	res.status(201).json(newCliente);
});

router.put("/:id", async (req, res) => {
	const { id } = req.params;
	const putCliente = await Cliente.findByIdAndUpdate(id, req.body, { new: true });
	res.json(putCliente);
});

router.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		await Vendas.deleteMany({ clienteId: Number(id) });
		await Cliente.findByIdAndDelete(id);
		res.json({ mensagem: "Cliente Removido com Sucesso" });
	} catch (e) {
		res.json({ mensagem: "Erro ao deletar cliente: ", e });
	}
});

module.exports = router;
