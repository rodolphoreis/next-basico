export default function form(req, res) {
  res.status(200).json({
    dados: JSON.parse(req.body),
  });
}
