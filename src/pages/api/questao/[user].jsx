export default (req, res) => {
  if (req.method === "GET") {
    Get(req, res);
  } else {
    res.status(405).send();
  }
};

const Get = (req, res) => {
  const id = req.query.user;
  res.status(200).json({
    id,
    nome: "Rodolpho",
    idade: 34,
    morada: "Rua do Dev",
  });
};
