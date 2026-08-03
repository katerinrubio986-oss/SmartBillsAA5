const express = require("express");
const router = express.Router();

const gastoController = require("../controllers/gastoController");

router.get("/", gastoController.obtenerTodos);

router.get("/:id", gastoController.obtenerPorId);

router.post("/", gastoController.agregar);

router.put("/:id", gastoController.actualizar);

router.delete("/:id", gastoController.eliminar);

module.exports = router;