import { useEffect, useState } from "react";

const questao = () => {
  const [questao, setQuestao] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/api/questao/123")
      .then((res) => res.json())
      .then(setQuestao);

    console.log("questao: ", questao);
  }, []);

  return (
    <div>
      <h2>questao</h2>
      <span>{questao?.enunciado}</span>
    </div>
  );
};

export default questao;
