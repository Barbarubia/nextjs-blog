import Logo from "./logo";
import Link from "next/link"; // componente che permette di inserire link ad altre pagine del blog senza che la pagina del browser venga ricaricata (diversamente da <a></a>)
import classes from "./header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <Link href="/">
          <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contattami</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
