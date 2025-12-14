import styles from "./index.module.css";

export default function TopJobDesc() {
  return (
    <section className={styles.wrap}>
      <div className={styles.cover}>
        <div className={styles.inner}>
          <div className={styles.item}>
            <h2>募集要項</h2>
          </div>
          <div className={styles.item}>
            <a href="" className={styles.link}>
              <span className={styles.text}>新卒採用の方はこちら</span>
            </a>
            <a href="" className={styles.link}>
              <span className={styles.text}>中途採用の方はこちら</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
