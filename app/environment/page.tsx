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
    title: "独身寮",
    text: "遠方からの通勤者用に会社が所有または賃借する住居施設です。 独身社員は、キッチン、バス・トイレ、家電（エアコン、冷蔵庫、 電子レンジ、洗濯機など）を備え付けた独身寮（1Ｋタイプ） または借上社宅が利用できます。（家賃補助あり）",
    image: {
      src: "/environment_welfare01.png",
      alt: "",
      width: 164,
      height: 131,
    },
  },
  {
    title: "独身寮",
    text: "遠方からの通勤者用に会社が所有または賃借する住居施設です。 独身社員は、キッチン、バス・トイレ、家電（エアコン、冷蔵庫、 電子レンジ、洗濯機など）を備え付けた独身寮（1Ｋタイプ） または借上社宅が利用できます。（家賃補助あり）",
    image: {
      src: "/environment_welfare01.png",
      alt: "",
      width: 164,
      height: 131,
    },
  },
  {
    title: "独身寮",
    text: "遠方からの通勤者用に会社が所有または賃借する住居施設です。 独身社員は、キッチン、バス・トイレ、家電（エアコン、冷蔵庫、 電子レンジ、洗濯機など）を備え付けた独身寮（1Ｋタイプ） または借上社宅が利用できます。（家賃補助あり）",
    image: {
      src: "/environment_welfare01.png",
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
