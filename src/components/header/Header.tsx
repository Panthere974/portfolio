import { useState, useEffect } from "react";
import classNames from "classnames";
import HeaderControls from "./HeaderControls";
import styles from "./Header.module.scss";

function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => setIsScrolled(window.scrollY > 0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={classNames(styles.header, { [styles.scrolled]: isScrolled })}>
      <h1 className={styles.header_title}>Portfolio</h1>
      <HeaderControls/>
    </header>
  );
}

export default Header;
