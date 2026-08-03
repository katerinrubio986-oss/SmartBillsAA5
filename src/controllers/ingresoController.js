const ingresoService = require("../services/ingresoService");

const obtenerTodos = (req, res) => {
    res.json(ingresoService.obtenerTodos());
};

const obtenerPorId = (req, res) => {
    const ingreso = ingresoService.obtenerPorId(req.params.id);

    if (!ingreso) {
        return res.status(404).json({
            mensaje: "Ingreso no encontrado"
        });
    }

    res.json(ingreso);
};

const agregar = (req, res) => {
    const nuevo = ingresoService.agregar(req.body);

    res.status(201).json({
        mensaje: "Ingreso agregado correctamente",
        ingreso: nuevo
    });
};

const actualizar = (req, res) => {
    const actualizado = ingresoService.actualizar(req.params.id, req.body);

    if (!actualizado) {
        return res.status(404).json({
            mensaje: "Ingreso no encontrado"
        });
    }

    res.json({
        mensaje: "Ingreso actualizado",
        ingreso: actualizado
    });
};

const eliminar = (req, res) => {
    ingresoService.eliminar(req.params.id);

    res.json({
        mensaje: "Ingreso eliminado"
    });
};

module.exports = {
    obtenerTodos,
    obtenerPorId,
    agregar,
    actualizar,
    eliminar
};