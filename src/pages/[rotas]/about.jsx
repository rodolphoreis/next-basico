import Link from "next/link";
import { useRouter } from "next/router";
const about = () => {
  const router = useRouter();

  return (
    <div>
      <h1>About</h1>
      <Link href={"/rotas/home"}>
        <button>Voltar</button>
      </Link>
    </div>
  );
};

export default about;
