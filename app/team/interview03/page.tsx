import styles from "@/app/team/interview.module.css";
import PageTitle from "@/app/_components/PageTitle";
import Image from "next/image";

export default function Interview03() {
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
            <p className={styles.name}>小池 祥</p>
            <p className={styles.information}>資材販売部</p>
            <h2 className={styles.header2}>
              現場の頼れる存在として、売場づくりのサポートをさせていただいてます
            </h2>
          </div>
          <Image
            src="/team_interview03_thumbnail.webp"
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
              部署名では工具を持ち修理等を行うように見えますが、実際は違います。
            </p>
            <p>
              店舗で使用する機器や備品の提案及び納品を担当しています。店舗、取引会社、関係会社それぞれから相談され頼られる存在を目指して日々取り組んでおります。
            </p>
          </div>
          <div className={styles.block}>
            <h3 className="cc_orange">
              どのようなところに仕事の魅力を感じますか？
            </h3>
            <p>
              提案した商品が多くの店舗に普及していきお客様の困りごとを解決できる点や、新店や改装で店舗を様々な業種の方々と創り上げていく達成感が魅力です。
            </p>
          </div>
          <div className={styles.block}>
            <h3 className="cc_orange">
              お休みの日は何をして過ごすことが多いですか？
            </h3>
            <p>
              旅行やテニスなど趣味を楽しんでいます。旅行先などで外食した時についつい厨房の中や売り場の備品をのぞき込んでしまいます。
            </p>
            <p>
              旅行先などで外食した時に、ついつい厨房の中や売り場の備品をのぞき込んでしまいます。
            </p>
            <p></p>
          </div>
          <div className={styles.block}>
            <h3 className="cc_orange">最後に、あなたにとって中部流通とは？</h3>
            <Image
              src="/team_interview03_article01.webp"
              alt=""
              width={1024}
              height={600}
              className={styles.img_article}
            />
            <p>私にとって中部流通は、仲間と共に挑戦し続ける場所です。</p>
            <p>
              会社のカルチャーや社内のフリーデスク制のおかげで、普段からコミュニケーションが取りやすく、困ったときは助けられたり助けたりと一緒に切磋琢磨できる環境だと感じています。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
