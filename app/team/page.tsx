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
              私たちの役割は、お客様との関係を深め、コミュニケーションの中から潜在的なニーズや課題を見つけ出し、豊富な情報収集力や私たちが長年培ってきた「現場力」をベースに最適なソリューションを提案させていただくことです。
            </p>
            <p>
              これを実現するためには、異なる個性を持った多士済々なメンバーが、お互いのアイデアを持ち寄り新たなソリューションを創造する、そんな組織にしていきたい、と考えております。
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
            <a className={styles.link} href="/team/interview01">
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
            <a className={styles.link} href="/team/interview02">
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
            <a className={styles.link} href="/team/interview03">
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
            <a className={styles.link} href="/team/interview04">
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
