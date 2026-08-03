const express = require("express");
const router = express.Router();

const ingresoController = require("../controllers/ingresoController");

router.get("/", ingresoController.obtenerTodos);
router.get("/:id", ingresoController.obtenerPorId);
router.post("/", ingresoController.agregar);
router.put("/:id", ingresoController.actualizar);
router.delete("/:id", ingresoController.eliminar);

module.exports = router;