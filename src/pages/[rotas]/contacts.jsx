import Link from "next/link";
import { useRouter } from "next/router";

const contacts = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Contacts</h1>
      <Link href={"/rotas/home"}>
        <button>Voltar</button>
      </Link>
    </div>
  );
};

export default contacts;
