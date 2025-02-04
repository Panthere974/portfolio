import { HashLink } from "react-router-hash-link";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
        <h1>Portfolio</h1>
        <nav className={styles.header_nav}>
            <HashLink className={styles.hashlink} smooth to="#about">About</HashLink>
            <HashLink className={styles.hashlink} smooth to="#what-i-do">What I Do</HashLink>
            <HashLink className={styles.hashlink} smooth to="#projects">My Projects</HashLink>
        </nav>
    </header>
  );
}

export default Header;
