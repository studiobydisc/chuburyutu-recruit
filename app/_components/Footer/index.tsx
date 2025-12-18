import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.wrap}>
      <div className={styles.box}>
        <a href="" className={styles.btn}>
          エントリーする
        </a>
      </div>
      <div className={styles.menu}>
        <p className={styles.cc}>挑戦のそばに、いつも中部流通</p>
        <ul className={styles.list}>
          <li>
            <a href="/">トップ</a>
          </li>
          <li>
            <a href="/environment">働く環境を知る</a>
          </li>
          <li>
            <a href="/team">人を知る</a>
          </li>
          <li>
            <a href="/work">仕事を知る</a>
          </li>
          <li>
            <a href="/job">募集要項</a>
          </li>
        </ul>
        <a href="https://www.chuburyutu.co.jp/" className={styles.link}>
          コーポレートサイト
        </a>
        <p className={styles.copyright}>
          Copyright ©2021 ChubuRyutsu All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
