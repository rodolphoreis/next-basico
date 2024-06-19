import { useState } from "react";

export default function form() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  const salvarUsuario = async () => {
    await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, idade }),
    });


    carregarUsuarios();
  };

  };

  return (
    <form>
      <h1>Form</h1>
      <input
        type="text"
        value={nome}
        name="nome"
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        value={idade}
        name="idade"
        onChange={(e) => setIdade(e.target.value)}
      />
      <button onClick={salvarUsuario}>Enviar</button>
    </form>
  );
}
