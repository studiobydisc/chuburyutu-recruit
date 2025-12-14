import styles from "./page.module.css";
import PageTitle from "../_components/PageTitle";
import Image from "next/image";

export default function Worker() {
  return (
    <main className={styles.color}>
      <div className={styles.bg}>
        <PageTitle titleJa="人を知る" titleEn="Meet Our Team" />
      </div>
      <section className={`${styles.wrap} top_header_trigger`}>
        <h2>代表メッセージ</h2>
        <div className={styles.grid_inner}>
          <div>
            <p>
              ここにテキストを記入ここにテキストを記入ここにテキストを記入
              ここにテキストを記入ここにテキストを記入。
            </p>
            <p>
              ここにテキストを記入ここにテキストを記入ここにテキストを記入
              ここにテキストを記入ここにテキストを記入ここにテキストを記入
              ここにテキストを記入ここにテキストを記入ここにテキストを記入。
            </p>
          </div>
          <Image
            src="/team_message.webp"
            alt=""
            width={810}
            height={570}
            className={styles.img_message}
          />
        </div>
      </section>
      <section className={`${styles.wrap} ${styles.wrap_bottom}`}>
        <h2>社員インタビュー</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a className={styles.link} href="">
              <Image
                src="/team01_thumbnail.webp"
                alt=""
                width={1620}
                height={1140}
                className={styles.img}
              />
              <p className={styles.name}>名前</p>
              <p className={styles.text}>部署・役職</p>
              <h3 className={styles.header3}>
                テキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキスト。
              </h3>
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="">
              <Image
                src="/team02_thumbnail.webp"
                alt=""
                width={1620}
                height={1140}
                className={styles.img}
              />
              <p className={styles.name}>名前</p>
              <p className={styles.text}>部署・役職</p>
              <h3 className={styles.header3}>
                テキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキスト。
              </h3>
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="">
              <Image
                src="/team03_thumbnail.webp"
                alt=""
                width={1620}
                height={1140}
                className={styles.img}
              />
              <p className={styles.name}>名前</p>
              <p className={styles.text}>部署・役職</p>
              <h3 className={styles.header3}>
                テキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキスト。
              </h3>
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="">
              <Image
                src="/team04_thumbnail.webp"
                alt=""
                width={1620}
                height={1140}
                className={styles.img}
              />
              <p className={styles.name}>名前</p>
              <p className={styles.text}>部署・役職</p>
              <h3 className={styles.header3}>
                テキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキスト。
              </h3>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
