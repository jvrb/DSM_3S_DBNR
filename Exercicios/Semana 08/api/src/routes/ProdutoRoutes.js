import { Router } from "express";
import ProdutoController from "../controller/ProdutoController.js";

const app = Router()

app.get("/", ProdutoController.list)

export default app