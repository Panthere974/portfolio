import { HashLink } from "react-router-hash-link";
import {SunIcon, MoonIcon} from "@radix-ui/react-icons";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Header.module.scss";

function Header() {

  const { isLightTheme, switchTheme } = useTheme();

  return (
    <header className={styles.header}>
        <h1>Portfolio</h1>
        <nav className={styles.header_nav}>
            <HashLink className={styles.header_nav_hashlink} smooth to="#about">À propos</HashLink>
            <HashLink className={styles.header_nav_hashlink} smooth to="#skills">Compétences</HashLink>
            <HashLink className={styles.header_nav_hashlink} smooth to="#projects">Projets</HashLink>
            {isLightTheme ? 
              <SunIcon className={styles.header_nav_icon} onClick={switchTheme}/> : 
              <MoonIcon className={styles.header_nav_icon} onClick={switchTheme}/>
            }
            {isLightTheme ? 
              <div className={styles.header_nav_theme} onClick={switchTheme}>Mode Clair</div> : 
              <div className={styles.header_nav_theme} onClick={switchTheme}>Mode Sombre</div>
            }
        </nav>
    </header>
  );
}

export default Header;
