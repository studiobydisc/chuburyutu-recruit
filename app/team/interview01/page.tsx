import styles from "@/app/team/interview.module.css";
import PageTitle from "@/app/_components/PageTitle";
import Image from "next/image";

export default function Interview01() {
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
            <p className={styles.name}>猿渡 あいみ</p>
            <p className={styles.information}>資材販売部</p>
            <h2 className={styles.header2}>
              お客様の商品開発や店舗運営をサポート、デリカ部門を全力で支えています
            </h2>
          </div>
          <Image
            src="/team_interview01_thumbnail.webp"
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
            <p>
              中部フーズ様の専門店事業の運営を担当しています。新店舗出店時には、消耗・衛生資材、厨房機器など開店に必要な物の選定から納品立ち合いまでを支援します。
            </p>
            <p>
              加えて、デリカ店舗でのトレー資材の提案や在庫管理に加え、専門店向けのオリジナル資材をデザイン課と連携して制作しています。
            </p>
          </div>
          <div className={styles.block}>
            <h3 className="cc_orange">
              どのようなところに仕事の魅力を感じますか？
            </h3>
            <p>若いうちから幅広い業務に携われる点に魅力を感じています。</p>
            <p>
              自分の判断で答えを出し、案件を最後までやり切る経験ができ、責任感と成長を実感できます。挑戦を後押ししてくれる環境の中で、自身のスキルや視野を着実に広げられる仕事です。
            </p>
          </div>
          <div className={styles.block}>
            <h3 className="cc_orange">
              お休みの日は何をして過ごすことが多いですか？
            </h3>
            <p>アウトドアが好きで、休日は外出して過ごすことが多いです。</p>
            <p>
              キャンプやマラソン、社内メンバーとのゴルフを楽しんでいます。また、行ったことのない観光地を訪れ、現地のカフェを巡ることも楽しみの一つです。
            </p>
          </div>
          <div className={styles.block}>
            <h3 className="cc_orange">最後に、あなたにとって中部流通とは？</h3>
            <Image
              src="/team_interview01_article01.webp"
              alt=""
              width={1024}
              height={600}
              className={styles.img_article}
            />
            <p>
              自分らしく働きながら責任ある仕事を任され、人としても仕事人としても成長できる場所です。
            </p>
            <p>
              知識や経験の不足を感じる場面もありますが、困ったときに助けてくれる先輩方がいて心強く、安心して業務に取り組めています。
            </p>
            <p>
              お客様の課題や要望を先読みし、現場で必要とされる営業マンを目指し、今後も精進してまいります。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
