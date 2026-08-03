const db = require("../config/db");

const obtenerGastos = () => {
    return db.gastos;
};

module.exports = {
    obtenerGastos
};