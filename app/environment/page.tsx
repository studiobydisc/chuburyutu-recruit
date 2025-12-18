import styles from "./page.module.css";
import PageTitle from "../_components/PageTitle";
import Image from "next/image";

type Item = {
  title: string;
  text: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

const welfare: Item[] = [
  {
    title: "借上社宅制度",
    text: "可児営業所近辺のアパートをいくつかの中から選んでいただける制度です。新卒の場合は基本的に1万から一人暮らしをすることが出来ます。",
    image: {
      src: "/environment_welfare01.png",
      alt: "",
      width: 164,
      height: 131,
    },
  },
  {
    title: "育児休業",
    text: "男女を問わず、出産・育児と仕事が両立できる制度を設け、育児ができる環境を整えています。",
    image: {
      src: "/environment_welfare02.png",
      alt: "",
      width: 164,
      height: 131,
    },
  },
  {
    title: "短時間勤務",
    text: "育児中の時短勤務に対応しています。育児中でも無理なく働ける制度で、育児も仕事も両立できます。",
    image: {
      src: "/environment_welfare03.png",
      alt: "",
      width: 164,
      height: 131,
    },
  },
  {
    title: "企業主導型保育園制度",
    text: "仕事に合わせて利用しやすい保育園と提携しております。",
    image: {
      src: "/environment_welfare04.png",
      alt: "",
      width: 164,
      height: 131,
    },
  },
  {
    title: "介護休業",
    text: "大切な家族と家庭のために、介護のため休業制度も設けております。",
    image: {
      src: "/environment_welfare05.png",
      alt: "",
      width: 164,
      height: 131,
    },
  },
  {
    title: "提携宿泊施設の割引利用",
    text: "会社所有の保養所（ひるがの高原）、労働組合（バローユニオン）が提携する全国の宿泊施設、会員制リゾートホテル、レジャー施設をお値打ちに利用することができます。",
    image: {
      src: "/environment_welfare06.png",
      alt: "",
      width: 164,
      height: 131,
    },
  },
  {
    title: "ジム利用券付与",
    text: "グループ企業の株式会社アクトスが運営するスポーツクラブの利用券を付与する制度です。 健康、体力づくり、ストレス解消のために定期的に制度を活用する社員も多いです。",
    image: {
      src: "/environment_welfare07.png",
      alt: "",
      width: 164,
      height: 131,
    },
  },
  {
    title: "退職金制度、確定拠出年金(401k)制度",
    text: "社員の老後資産形成を支える制度です。会社が掛金を拠出して社員自ら積み立て運用し、原則60歳以降にその積立金を受け取ることができます。掛金には税金・社会保険料がかからず、老後資産形成のための税制メリットがあります。",
    image: {
      src: "/environment_welfare08.png",
      alt: "",
      width: 164,
      height: 131,
    },
  },
  {
    title: "人事評価面談の定期実施",
    text: "夏季、冬季の年２回に人事評価面談を実施しています。 面談では、社員と上司が向き合い、人事評価の開示、業務に対する取り組み方のアドバイスや今後のキャリアパスについて話し合います。",
    image: {
      src: "/environment_welfare09.png",
      alt: "",
      width: 164,
      height: 131,
    },
  },
  {
    title: "社外研修制度",
    text: "会社指定の研修プログラムから、各自のキャリアプランに応じて、受講する研修を選択できる制度です。また、事業戦略の多様化に対応しコア人材を育成するため、社外研修への派遣も積極的に取り組んでいます。",
    image: {
      src: "/environment_welfare10.png",
      alt: "",
      width: 164,
      height: 131,
    },
  },
  {
    title: "資格取得奨励制",
    text: "会社指定の資格を取得した社員には、資格取得に要したテキスト代や受験料などを会社で負担し、自己の能力開発に対する奨励として一時金を支給しています。",
    image: {
      src: "/environment_welfare11.png",
      alt: "",
      width: 164,
      height: 131,
    },
  },
  {
    title: "社員買物割引制",
    text: "バローグループで展開する、Lu Vit（ルビット）カードの電子マネーを使って対象店舗でお買物をすると、お買物金額に対して５％分が電子マネーで還元される制度です。",
    image: {
      src: "/environment_welfare12.png",
      alt: "",
      width: 164,
      height: 131,
    },
  },
  {
    title: "共済会制度",
    text: "毎月少額（１００円未満）の自己負担額で、社員が傷害や災害などに見舞われたときに、所定のお見舞金を支給します。社員と会社がそれぞれ掛金を負担することで、お互いを支え合う制度です。",
    image: {
      src: "/environment_welfare13.png",
      alt: "",
      width: 164,
      height: 131,
    },
  },
];

export default function Environment() {
  return (
    <main className={styles.color}>
      <div className={styles.bg}>
        <PageTitle titleJa="働く環境を知る" titleEn="Environment" />
      </div>
      <section className={`${styles.wrap} top_header_trigger`}>
        <div className={styles.inner}>
          <Image
            src="/environment_mv.webp"
            alt=""
            width={810}
            height={570}
            className={styles.img_mv}
          />
          <div className={styles.box_text}>
            <h2 className={styles.header2}>
              フレキシブルな働き方ができるオフィスです。
            </h2>
            <p>
              フリーアドレスやミーティングスペースを導入し、社内でのコミュニケーションがとりやすく、自由な場所で仕事をしやすい環境を整えています。
            </p>
            <p>
              現場目線の仕事を大切にしており、一人につき1台ノートパソコンとスマートフォンを支給、無理なく外出や出張でお客様のところへ訪問できる体制もとっています。
            </p>
            <p>
              また、様々なお客様とお取引させていただいており、お客様に合わせて自分の働きやすいワークスタイルの選択もしやすい職場となっています。
            </p>
          </div>
        </div>
      </section>
      <section className={`${styles.wrap} ${styles.bg_culture}`}>
        <h2>カルチャー</h2>
        <ul>
          <li className={styles.item}>
            <h3 className={`${styles.header3} cc_padding cc_white_orange`}>
              <span className={styles.number}>01</span>現場主義
            </h3>
            <div className={styles.box_culture}>
              <div>
                <p>
                  私たちは現場目線を大切にしています。お客様に寄り添い、価値ある提案をさせていただくためには現場でのコミュニケーションが重要です。
                </p>
                <p>
                  お客様の店舗にお伺いしたり、工場の中に入らせていただいたり、時には一緒に出張へ同行したりとお客様のすぐ隣で仕事をしています。
                </p>
              </div>
              <Image
                src="/environment_culture01.webp"
                alt=""
                width={500}
                height={350}
                className={styles.img}
              />
            </div>
          </li>
          <li className={styles.item}>
            <h3 className={`${styles.header3} cc_padding cc_white_orange`}>
              <span className={styles.number}>02</span>何でも挑戦
            </h3>
            <div className={styles.box_culture}>
              <div>
                <p>
                  自分がこうしたい、こういう提案をしてみたいと思ったことは、自由に何でも挑戦できます。行動力と決断力で大きな仕事にも挑戦することができます。
                </p>
                <p>
                  一人ひとりが主役であり、仕事を動かすのは自分自身です。時にはつまずくこともあるかもしれませんが、失敗を恐れずに挑戦をしてみませんか？
                </p>
              </div>
              <Image
                src="/environment_culture01.webp"
                alt=""
                width={500}
                height={350}
                className={styles.img}
              />
            </div>
          </li>
          <li className={styles.item}>
            <h3 className={`${styles.header3} cc_padding cc_white_orange`}>
              <span className={styles.number}>03</span>わくわくする仕事
            </h3>
            <div className={styles.box_culture}>
              <div>
                <p>
                  仕事を楽しむことで、より良い提案をすることができます。自分たちもお客様も一緒にわくわくできる仕事をすることによって、仕事はより一層楽しくなります。
                </p>
                <p>
                  食品流通業を支え、お客様を変えて、私たちの暮らしも変えていく。流通を支える私たちだからこそできる仕事で、わくわくを生み出していきます。
                </p>
              </div>
              <Image
                src="/environment_culture01.webp"
                alt=""
                width={500}
                height={350}
                className={styles.img}
              />
            </div>
          </li>
        </ul>
      </section>
      <section className={`${styles.wrap} ${styles.bg_welfare}`}>
        <h2>福利厚生</h2>
        <ul className={styles.list}>
          {welfare.map((item, index) => (
            <li key={index} className={styles.card}>
              <h3 className={styles.header3_welfare}>{item.title}</h3>
              <Image
                className={styles.icon}
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
              />
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
