const express = require("express");
const router = express.Router();
const Venda = require("../models/Vendas");

router.get("/", async (req, res) => {
	const vendas = await Venda.find();
	res.json(vendas);
});

router.post("/", async(req, res) => {
	const newVenda = new Venda(req.body)
	newVenda.save()
	res.json(newVenda)
})

router.put("/:id", async(req, res) => {
	const {id} = req.params
	const updateVenda = await Venda.findByIdAndUpdate(id, req.body, {new: true})
	res.json(updateVenda)
})

router.delete("/:id", async (req, res) => {
	const {id} = req.params
	await Venda.findByIdAndDelete(id)
	res.json({mensagem: "Venda deletada com sucesso!"})
})

module.exports = router