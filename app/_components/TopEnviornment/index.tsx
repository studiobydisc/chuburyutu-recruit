import styles from "./index.module.css";
import Image from "next/image";
import Button from "../Button";

export default function TopEnviornment() {
  return (
    <section className={styles.wrap}>
      <div className={styles.box_img}>
        <Image
          src="/top_environment01.webp"
          alt=""
          width={570}
          height={400}
          className={styles.img}
        />
        <Image
          src="/top_environment02.webp"
          alt=""
          width={570}
          height={400}
          className={styles.img_right}
        />
      </div>
      <div className={styles.box_contents}>
        <h2 className="line_wavy">働く環境を知る</h2>
        <h3>
          <span className="cc_br cc_padding cc_white_orange">
            一人ひとりが主役、
          </span>
          <span className="cc_padding cc_white_orange">
            自由に挑戦できる環境です。
          </span>
        </h3>
        <div className={styles.box_text}>
          <p>
            仕事の主人公は自分自身。とにかく自由に、そしてお客様のために全力で仕事に取り組む姿勢はかっこいいですよね。
          </p>
          <p>
            現場でコミュニケーションをとってもよし、データを分析してロジックのある提案をしてもよし、やり方は十人十色。どんなスタイルでも活躍できる職場です。
          </p>
        </div>
        <div className={styles.btn}>
          <Button href="/" />
        </div>
      </div>
    </section>
  );
}
