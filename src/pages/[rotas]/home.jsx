import Link from "next/link";
import { useRouter } from "next/router";

const home = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Home</h1>
      <ul>
        <Link href={"/rotas/about"}>
          <li>About</li>
        </Link>
        <Link href={"/rotas/contacts"}>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default home;
