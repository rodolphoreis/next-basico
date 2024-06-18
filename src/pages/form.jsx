import { useState } from "react";

export default function form() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  return (
    <div>
      <h1>Form</h1>
    </div>
  );
}
