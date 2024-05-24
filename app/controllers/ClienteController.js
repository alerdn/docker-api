const database = require("../database/connection");

class ClienteController {
  async index(req, res) {
    return database.select("*").from("cliente").limit(10);
  }

  async buscarCliente(req, res) {
    const { cpf } = req.params;
    const { praca_id } = req.query;

    const cliente = await database
      .select("*")
      .from("cliente")
      .where({ cpf, praca_id })
      .first();

    res.json({ success: cliente != null, cliente });
  }
}

module.exports = new ClienteController();
