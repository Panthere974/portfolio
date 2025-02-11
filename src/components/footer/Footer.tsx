import styles from "./Footer.module.scss";

function Footer() {
  return (
    <header className={styles.footer}>
        <strong>Cédric Payet</strong>
        <nav className={styles.footer_nav}>
          <a 
              className={styles.footer_nav_link}
              target='_blank'
              rel='noopener noreferrer'
              href="https://github.com/Panthere974">
                  Github
          </a>
          <a 
              className={styles.footer_nav_link}
              target='_blank'
              rel='noopener noreferrer'
              href="https://www.linkedin.com/in/c%C3%A9dric-payet/">
                  LinkedIn
          </a>
        </nav>
    </header>
  );
}

export default Footer;
