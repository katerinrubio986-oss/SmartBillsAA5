const db = require("../config/db");

const obtenerIngresos = () => {
    return db.ingresos;
};

module.exports = {
    obtenerIngresos
};