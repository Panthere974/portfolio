import styles from "./Footer.module.scss";

function Footer() {
  return (
    <header className={styles.footer}>
        <strong>Cédric Payet</strong>
        <a 
            className={styles.footer_link}
            target='_blank'
            rel='noopener noreferrer'
            href="https://github.com/Panthere974">
                Github
        </a>
    </header>
  );
}

export default Footer;
