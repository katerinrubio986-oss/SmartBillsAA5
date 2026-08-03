const express = require("express");

const gastoRoutes = require("./routes/gastoRoutes");
const ingresoRoutes = require("./routes/ingresoRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API SmartBills funcionando correctamente");
});

app.use("/api/gastos", gastoRoutes);
app.use("/api/ingresos", ingresoRoutes);

module.exports = app;