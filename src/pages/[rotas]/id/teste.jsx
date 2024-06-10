import Link from "next/link";
import { useRouter } from "next/router";
const teste = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Teste</h1>
      <Link href={"/rotas/home"}>
        <button>Voltar</button>
      </Link>
    </div>
  );
};

export default teste;
