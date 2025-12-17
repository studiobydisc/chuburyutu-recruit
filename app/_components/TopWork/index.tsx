import styles from "./index.module.css";
import Image from "next/image";
import Button from "../Button";

export default function TopWork() {
  return (
    <section className={styles.wrap}>
      <div className={styles.box_img}>
        <Image
          src="/top_work.webp"
          alt=""
          width={962}
          height={1234}
          className={styles.img}
        />
      </div>
      <div className={styles.inner}>
        <h2 className="line_wavy">仕事を知る</h2>
        <h3>
          <span className="cc_br cc_padding cc_white_orange">
            お客様に寄り添い、
          </span>
          <span className="cc_padding cc_white_orange">
            ご要望に合わせた課題解決をします。
          </span>
        </h3>
        <div className={styles.box_text}>
          <p>
            お客様の環境変化や挑戦に寄り添い、事業の成長を支え続けていく。信頼できる専門商社としてお客様に寄り添います。
          </p>
          <p>
            店舗や工場の運営サポート、食品や生活用品の商品開発サポートが私たちの主な仕事内容です。
          </p>
        </div>
        <div className={styles.btn}>
          <Button href="/" />
        </div>
        <ul>
          <li className={styles.item}>
            <a href="" className={styles.link}>
              <span className={styles.title}>
                <h3 className={styles.header3}>
                  タイトルタイトルタイトルタイトルタイトルタイトルタイトル
                  タイトルタイトル。
                </h3>
                <p className={styles.text}>部署名</p>
              </span>
              <Image
                src="/top_environment01.webp"
                alt=""
                width={962}
                height={1234}
                className={styles.thumnail}
              />
            </a>
          </li>
          <li className={styles.item}>
            <a href="" className={styles.link}>
              <span className={styles.title}>
                <h3 className={styles.header3}>
                  タイトルタイトルタイトルタイトルタイトルタイトルタイトル
                  タイトルタイトル。
                </h3>
                <p className={styles.text}>部署名</p>
              </span>
              <Image
                src="/top_environment02.webp"
                alt=""
                width={962}
                height={1234}
                className={styles.thumnail}
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
