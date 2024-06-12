import { useEffect, useState } from "react";

const Questao = () => {
  const [questao, setQuestao] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/questao/123")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Não existe nenhuma questão!");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Dados recebidos da API:", data);
        setQuestao(data);
      })
      .catch((err) => console.error("Erro ao buscar a questão:", err));
  }, []);

  const alternativas = () => {
    if (questao && questao.resposta) {
      return questao.resposta.map((resp, i) => <li key={i}>{resp}</li>);
    } else {
      return null;
    }
  };

  return (
    <div>
      <h2>Questão</h2>
      <span>{questao?.enunciado}</span>
      <ul>{alternativas()}</ul>
    </div>
  );
};

export default Questao;
