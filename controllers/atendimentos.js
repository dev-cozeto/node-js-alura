module.exports = app => {
    app.get("/atendimentos", (req, res) =>
    res.send("Você está na Rota de Atendimentos e está realizando um get")
  );
}