import styles from "./index.module.css";
import Image from "next/image";

export default function TopAbout() {
  return (
    <section className="top_header_trigger">
      <div className={styles.wrap_top}>
        <h2 className={styles.header2}>
          <span className="cc_br cc_padding cc_white">キャッチコピー、</span>
          <span className="cc_padding cc_white">
            キャッチコピーキャッチコピー。
          </span>
        </h2>
        <div className={styles.cc_sub}>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキスト。
          </p>
        </div>
      </div>
      <div className={styles.wrap_bottom}>
        <Image
          src="/top_about.webp"
          alt=""
          width={832}
          height={600}
          className={styles.img}
        />
        <div className={styles.inner}>
          <h2 className={`${styles.color_yellow} line_wavy`}>
            中部流通について
          </h2>
          <h3>
            <span className="cc_br cc_padding cc_yellow">キャッチコピー、</span>
            <span className="cc_padding cc_yellow">
              キャッチコピーキャッチコピー。
            </span>
          </h3>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキスト。
          </p>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト。
          </p>
        </div>
      </div>
    </section>
  );
}
