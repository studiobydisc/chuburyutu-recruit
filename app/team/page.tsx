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
            <div className={styles.box}>
              <p className={styles.post}>代表取締役社長</p>
              <p>山田 武彦</p>
            </div>
          </div>
          <Image
            src="/team_message.webp"
            alt="中部流通の代表取締役の写真"
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
                src="/team_interview01_thumbnail.webp"
                alt=""
                width={1620}
                height={1140}
                className={styles.img}
              />
              <p className={styles.name}>猿渡 あいみ</p>
              <p className={styles.text}>資材販売部</p>
              <h3 className={styles.header3}>
                お客様の商品開発や店舗運営をサポート、デリカ部門を全力で支えています
              </h3>
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="/team/interview02">
              <Image
                src="/team_interview02_thumbnail.webp"
                alt=""
                width={1620}
                height={1140}
                className={styles.img}
              />
              <p className={styles.name}>高田 智之</p>
              <p className={styles.text}>事業開発部・部長</p>
              <h3 className={styles.header3}>
                サプライチェーンを繋ぐスペシャリスト、大規模なプロジェクトの先頭に立つ
              </h3>
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="/team/interview03">
              <Image
                src="/team_interview03_thumbnail.webp"
                alt=""
                width={1620}
                height={1140}
                className={styles.img}
              />
              <p className={styles.name}>小池 祥</p>
              <p className={styles.text}>資材販売部</p>
              <h3 className={styles.header3}>
                現場の頼れる存在として、売場づくりのサポートをさせていただいてます
              </h3>
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="/team/interview04">
              <Image
                src="/team_interview04_thumbnail.webp"
                alt=""
                width={1620}
                height={1140}
                className={styles.img}
              />
              <p className={styles.name}>竹林 宥輔</p>
              <p className={styles.text}>商品販売部</p>
              <h3 className={styles.header3}>
                消費者に愛される商品をお客様と一緒に開発
              </h3>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
