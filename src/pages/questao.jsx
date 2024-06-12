import { useEffect, useState } from "react";

const questao = () => {
  fetch("http://localhost:3000/api/questao/123")
    .then((res) => res.json())
    .then((json) => console.log(json));

  return (
    <div>
      <h2>questao</h2>
    </div>
  );
};

export default questao;
