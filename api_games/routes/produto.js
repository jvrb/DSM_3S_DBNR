const express = require("express");
const router = express.Router();
const Produto = require("../models/Produto.js");
const Vendas = require("../models/Vendas.js");

router.get("/", async (req, res) => {
	const produtos = await Produto.find();
	res.json(produtos);
});

router.post("/", async (req, res) => {
	const newProduto = await new Produto(req.body);
	newProduto.save();
	res.status(201).json(newProduto);
});

router.put("/:id", async (req, res) => {
	const { id } = req.params;
	const updateProduto = await Produto.findByIdAndUpdate(id, req.body, { new: true });
	res.json(updateProduto);
});

router.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		await Vendas.deleteMany({ produtoId: id });
		await Produto.findByIdAndDelete(id);
		res.json({ mensagem: "Produto deletado com sucesso!" });
	} catch (e) {
		res.json({ mesnagem: "Erro ao deletar produto: ", e });
	}
});

module.exports = router;
