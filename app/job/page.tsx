import styles from "./page.module.css";
import PageTitle from "../_components/PageTitle";
import Image from "next/image";

export default function Job() {
  return (
    <main className={styles.color}>
      <div className={styles.bg}>
        <PageTitle titleJa="募集要項" titleEn="About Job" />
      </div>
      <section className={`${styles.wrap} top_header_trigger`}>
        <h2>新卒採用</h2>
        <a href="" className={styles.btn}>
          くわしくはこちら
        </a>
      </section>
      <section className={styles.wrap}>
        <h2>キャリア採用</h2>
        <a href="" className={styles.btn}>
          くわしくはこちら
        </a>
      </section>
    </main>
  );
}
