export default (req, res) => {
  if (req.method === "GET") {
    const id = req.query.user;
    res.status(200).json({
      id,
      nome: "Rodolpho",
      idade: 34,
      morada: "Rua do Dev",
    });
  }
};
