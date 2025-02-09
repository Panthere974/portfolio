import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import {SunIcon, MoonIcon} from "@radix-ui/react-icons";
import styles from "./Header.module.scss";

function Header() {

  const getInitialTheme = () => {
    const localStorageTheme = localStorage.getItem("theme");
    return localStorageTheme === "light";
  };
  
  const [isLightTheme, setIsLightTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (isLightTheme) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  }, [isLightTheme]);

  function switchTheme() {
    setIsLightTheme(!isLightTheme);
  }

  return (
    <header className={styles.header}>
        <h1>Portfolio</h1>
        <nav className={styles.header_nav}>
            <HashLink className={styles.hashlink} smooth to="#about">À propos</HashLink>
            <HashLink className={styles.hashlink} smooth to="#skills">Compétences</HashLink>
            <HashLink className={styles.hashlink} smooth to="#projects">Projets</HashLink>
            {isLightTheme ? 
              <SunIcon className={styles.header_nav_icon} onClick={switchTheme}/> : 
              <MoonIcon className={styles.header_nav_icon} onClick={switchTheme}/>
            }
        </nav>
    </header>
  );
}

export default Header;
