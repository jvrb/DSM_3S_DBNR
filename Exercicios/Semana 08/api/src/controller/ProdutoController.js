import { request, response } from "express";
import Produtos from "../models/Produtos.js";

class ProdutoController {
    async list(request, response){
        const listProdutos = await Produtos.find().select("nome preco").limit(2)
        return response.json(listProdutos)
    }
}

export default new ProdutoController()