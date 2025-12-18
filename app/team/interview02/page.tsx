import styles from "@/app/team/interview.module.css";
import PageTitle from "@/app/_components/PageTitle";
import Image from "next/image";

export default function Interview02() {
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
            <p className={styles.name}>高田 智之</p>
            <p className={styles.information}>事業開発部・部長</p>
            <h2 className={styles.header2}>
              サプライチェーンを繋ぐスペシャリスト、大規模なプロジェクトの先頭に立つ
            </h2>
          </div>
          <Image
            src="/team_interview02_thumbnail.webp"
            alt=""
            width={1620}
            height={1140}
            className={styles.img_thumbnail}
          />
        </div>
      </section>
      <section className={`${styles.wrap} ${styles.wrap_bottom}`}>
        <div className={styles.article}>
          <div className={styles.block}>
            <h3 className="cc_orange">主にどのような仕事をされていますか？</h3>
            <p>部の責任者であるため、会社を大きくする役割があります。</p>
            <p>
              その上で、グループ内で培った経験やノウハウを活かし、国内外の仕入先様と取引を行い、グループ外のお客様が抱える課題を解決するプロジェクトの先頭に立っています。
            </p>
          </div>
          <div className={styles.block}>
            <h3 className="cc_orange">
              どのようなところに仕事の魅力を感じますか？
            </h3>
            <p>
              仕事に幅と深さがあることです。追求すれば、仕事はどこまでも深堀りでき、自分自身の勉強にもなります。
            </p>
            <p>
              結果的にお客様への貢献度も変わってきます。答えのない仕事なので、自身の日々の努力によって仕事の質を高めることに魅力を感じます。
            </p>
          </div>
          <div className={styles.block}>
            <h3 className="cc_orange">
              お休みの日は何をして過ごすことが多いですか？
            </h3>
            <p>サッカー観戦です。</p>
            <p>
              最近は、応援しているチームがゴールを決めて勝つことはもちろんですが、チームの戦術や監督のフォーメーションの意図をきっとこうだろう・・と自分なりに仮説を立ててみることが大変面白いです。
            </p>
          </div>
          <div className={styles.block}>
            <h3 className="cc_orange">最後に、あなたにとって中部流通とは？</h3>
            <Image
              src="/team_interview02_article01.webp"
              alt=""
              width={1024}
              height={600}
              className={styles.img_article}
            />
            <p>
              入社以来一貫して変わらないことは、挑戦できるフィールドがあることです。
            </p>
            <p>
              ネガティブなキーワードが目立つ経済状況ですが、制限なく、むしろやりたいことに挑戦させてもらっている環境に感謝しています。自分自身が成長できていると実感できる会社だと思います。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
