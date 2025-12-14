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
          <Image src="/environment_mv.webp" alt="" width={810} height={570} />
          <div className={styles.box_text}>
            <h2 className={styles.header2}>
              フレキシブルな働き方ができるオフィスです。
            </h2>
            <p>
              ここにテキストを記入ここにテキストを記入ここにテキストを記入
              ここにテキストを記入ここにテキストを記入ここにテキストを記入。
            </p>
            <p>
              ここにテキストを記入ここにテキストを記入ここにテキストを記入
              ここにテキストを記入ここにテキストを記入ここにテキストを記入
              ここにテキストを記入ここにテキストを記入ここにテキストを記入。
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
                  ここにテキストを記入ここにテキストを記入ここにテキストを記入
                  ここにテキストを記入ここにテキストを記入ここにテキストを記入。
                </p>
                <p>
                  ここにテキストを記入ここにテキストを記入ここにテキストを記入
                  ここにテキストを記入ここにテキストを記入ここにテキストを記入
                  ここにテキストを記入ここにテキストを記入ここにテキストを記入。
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
                  ここにテキストを記入ここにテキストを記入ここにテキストを記入
                  ここにテキストを記入ここにテキストを記入ここにテキストを記入。
                </p>
                <p>
                  ここにテキストを記入ここにテキストを記入ここにテキストを記入
                  ここにテキストを記入ここにテキストを記入ここにテキストを記入
                  ここにテキストを記入ここにテキストを記入ここにテキストを記入。
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
              <span className={styles.number}>03</span>ワクワクする仕事
            </h3>
            <div className={styles.box_culture}>
              <div>
                <p>
                  ここにテキストを記入ここにテキストを記入ここにテキストを記入
                  ここにテキストを記入ここにテキストを記入ここにテキストを記入。
                </p>
                <p>
                  ここにテキストを記入ここにテキストを記入ここにテキストを記入
                  ここにテキストを記入ここにテキストを記入ここにテキストを記入
                  ここにテキストを記入ここにテキストを記入ここにテキストを記入。
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
