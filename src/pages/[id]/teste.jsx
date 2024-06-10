import { useRouter } from "next/router";

const teste = () => {
  const router = useRouter();

  const id = router.query.id;

  return (
    <div>
      <h1>Teste com rota dinâmica no id: {id}</h1>
    </div>
  );
};

export default teste;
