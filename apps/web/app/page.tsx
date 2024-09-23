import styles from "./page.module.css";
import Logo from "../components/icons/logo";

export default function Home() {
  return (
    <main className={styles.page}>
      <Logo />
      &nbsp;
      <div>ZIM UI</div>
    </main>
  );
}
