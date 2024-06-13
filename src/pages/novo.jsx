import { useEffect, useState } from "react";

const Novo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/questao/1")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Não existe usuário!");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Dados do usuário:", data);
        setUser(data);
      })
      .catch((err) => console.error("Erro ao buscar usuário:", err));
  }, []);

  const usuario = () => {
    if (user) {
      return (
        <ul style={{ listStyle: "none" }}>
          <li>Nome: {user.nome}</li>
          <li>Idade: {user.idade}</li>
          <li>Morada: {user.morada}</li>
        </ul>
      );
    } else {
      return <p>Nenhum usuário encontrado.</p>;
    }
  };

  return (
    <div>
      <h2>Novo usuário:</h2>
      {usuario()}
    </div>
  );
};

export default Novo;
