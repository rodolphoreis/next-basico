export default function form(req, res) {
  if (req.method === "POST") {
    post(req, res);
}
