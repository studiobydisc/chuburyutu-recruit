import styles from "@/app/team/interview.module.css";
import PageTitle from "@/app/_components/PageTitle";
import Image from "next/image";

export default function Interview04() {
  return (
    <main className={styles.color}>
      <div className={styles.bg}>
        <PageTitle titleJa="人を知る" titleEn="Meet Our Team" />
      </div>
      <section
        className={`${styles.wrap} ${styles.wrap_yellow} top_header_trigger`}
      >
        <div className={styles.grid_inner}>
          <div>
            <p className={styles.name}>竹林 宥輔</p>
            <p className={styles.information}>商品販売部</p>
            <h2 className={styles.header2}>
              消費者に愛される商品をお客様と一緒に開発
            </h2>
          </div>
          <Image
            src="/team_interview04_thumbnail.webp"
            alt=""
            width={810}
            height={570}
            className={styles.img_thumbnail}
          />
        </div>
      </section>
      <section className={`${styles.wrap} ${styles.wrap_bottom}`}>
        <div className={styles.article}>
          <div className={styles.block}>
            <h3 className="cc_orange">主にどのような仕事をされていますか？</h3>
            <p>
              スーパーマーケットの日配部門向けに国内流通食品の卸売り、韓国や中国からの輸入食品の商品開発・調達から営業まで担当しています。
            </p>
            <p>
              川上から川下に近いところまでの幅広いフィールドが舞台となるので、視野を広く持つことが重要になります。
            </p>
          </div>
          <div className={styles.block}>
            <h3 className="cc_orange">
              どのようなところに仕事の魅力を感じますか？
            </h3>
            <p>
              自身が手掛けた商品が多くのエリアでたくさん店頭に並び、お客様に選ばれて購入される様子を見ると、形として成果が見えるので、非常に魅力・やりがいを感じます。
            </p>
          </div>
          <div className={styles.block}>
            <h3 className="cc_orange">
              お休みの日は何をして過ごすことが多いですか？
            </h3>
            <p>
              私は謎解きが好きなので、週末にリアル脱出ゲームのお店に行ったり、書店やネットで謎解きキットを購入して、答えをゆっくり考える時間が好きです。
            </p>
          </div>
          <div className={styles.block}>
            <h3 className="cc_orange">最後に、あなたにとって中部流通とは？</h3>
            <Image
              src="/team_interview04_article01.webp"
              alt=""
              width={1024}
              height={600}
              className={styles.img_article}
            />
            <p>
              新しいことややりたいことがあれば、積極的に発言できる土壌があり、会社としてもバックアップしてくれる場だと思います。
            </p>
            <p>
              とにかく既存のままでは遅れていくだけであるという成長マインドがあるので、既存の枠組みを超えて挑戦したい方にはうってつけの職場だと思います。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
