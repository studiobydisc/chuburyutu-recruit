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
      <div>
        <h2 className="line_wavy">働く環境を知る</h2>
        <h3>
          <span className="cc_br cc_padding cc_white_orange">
            テキストテキストテキスト、
          </span>
          <span className="cc_padding cc_white_orange">
            テキストテキストテキストテキスト。
          </span>
        </h3>
        <div className={styles.box_text}>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキスト。
          </p>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキスト。
          </p>
        </div>
        <div className={styles.btn}>
          <Button href="/" />
        </div>
      </div>
    </section>
  );
}
