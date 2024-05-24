const ClienteController = require("../controllers/ClienteController");

module.exports = (router) => {
  router.get("/", (req, res) => res.send("Hello Docker"));

  router.get("/clientes", ClienteController.index);
  router.get("/clientes/:cpf", ClienteController.buscarCliente);
};
