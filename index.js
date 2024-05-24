require("dotenv").config();
const express = require("express");
const router = require("./app/routes/router");

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const app = express();
router(app);

app.listen(PORT, HOST, () =>
  console.log(`Iniciando server em ${HOST}:${PORT}`)
);
