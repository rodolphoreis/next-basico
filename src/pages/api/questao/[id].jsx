export default (req, res) => {
  try {
    if (req.method === "GET") {
      const id = req.query.id;
      res.status(200).json({
        id,
        enunciado: "Qual é a sua cor preferida?",
        resposta: ["Branco", "Vermelho", "Azul", "Preto", "Amarelo"],
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro na resposta.", error: true });
  }
};
