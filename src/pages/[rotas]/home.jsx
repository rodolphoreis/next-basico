import Link from "next/link";
import { useRouter } from "next/router";

const home = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Home</h1>
      <ul>
        <Link href={"/rotas/about"}>
          <li style={{ backgroundColor: "red", color: "white" }}>About</li>
        </Link>
        <Link href={"/rotas/contacts"}>
          <li style={{ backgroundColor: "blue", color: "white" }}>Contact</li>
        </Link>
        <Link href={"/rotas/id/teste"}>
          <li style={{ backgroundColor: "gray", color: "white" }}>Teste</li>
        </Link>
      </ul>
    </div>
  );
};

export default home;
