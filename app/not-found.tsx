import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <>
      <div className={styles.wrap}>
        <p className={styles.title}>404 not found</p>
        <p className={styles.text}>
          お探しのページは存在しないか、削除されました。
          <br />
          下記よりトップページへお戻りください。
        </p>
        <a href="/" className={styles.link}>
          トップページへ戻る
        </a>
      </div>
    </>
  );
}
