export default function form(req, res) {
  if (req.method === "POST") {
    post(req, res);
  } else if (req.method === "GET") {
    get(req, res);
  } else {
    res.status(405).send();
  }
}
