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
