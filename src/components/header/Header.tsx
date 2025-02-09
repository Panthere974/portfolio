import { HashLink } from "react-router-hash-link";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
        <h1>Portfolio</h1>
        <nav className={styles.header_nav}>
            <HashLink className={styles.hashlink} smooth to="#about">À propos</HashLink>
            <HashLink className={styles.hashlink} smooth to="#skills">Compétences</HashLink>
            <HashLink className={styles.hashlink} smooth to="#projects">Projets</HashLink>
        </nav>
    </header>
  );
}

export default Header;
