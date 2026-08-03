const gastoService = require("../services/gastoService");

const obtenerTodos = (req, res) => {
    res.json(gastoService.obtenerTodos());
};

const obtenerPorId = (req, res) => {
    const gasto = gastoService.obtenerPorId(req.params.id);

    if (!gasto) {
        return res.status(404).json({
            mensaje: "Gasto no encontrado"
        });
    }

    res.json(gasto);
};

const agregar = (req, res) => {
    const nuevo = gastoService.agregar(req.body);

    res.status(201).json({
        mensaje: "Gasto agregado correctamente",
        gasto: nuevo
    });
};

const actualizar = (req, res) => {
    const actualizado = gastoService.actualizar(req.params.id, req.body);

    if (!actualizado) {
        return res.status(404).json({
            mensaje: "Gasto no encontrado"
        });
    }

    res.json({
        mensaje: "Gasto actualizado",
        gasto: actualizado
    });
};

const eliminar = (req, res) => {
    gastoService.eliminar(req.params.id);

    res.json({
        mensaje: "Gasto eliminado"
    });
};

module.exports = {
    obtenerTodos,
    obtenerPorId,
    agregar,
    actualizar,
    eliminar
};