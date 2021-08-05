import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      &copy;{" "}
      <a className={styles.link} href="https://bahram.dev">
        Bahram Movlanov
      </a>{" "}
      2021
    </footer>
  );
};

export default Footer;
