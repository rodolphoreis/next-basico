export default function (req, res) {
  res
    .status(200)
    .json([
      { name: "Rodolpho" },
      { name: "Bruno" },
      { name: "Fernanda" },
      { name: "Ricardo" },
    ]);
}
