import styles from "./page.module.css";
import PageTitle from "@/app/_components/PageTitle";
import Image from "next/image";

export default function Worker() {
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
            <p className={styles.name}>名前</p>
            <p className={styles.information}>部署・役職</p>
            <h2 className={styles.header2}>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
            </h2>
            <div className={styles.box}>
              <p className={styles.tag}>
                <span className={styles.hash}>まずは訪問派</span>
              </p>
              <p className={styles.tag}>
                <span className={styles.hash}>何でも勉強</span>
              </p>
              <p className={styles.tag}>
                <span className={styles.hash}>アウトドア好き</span>
              </p>
            </div>
          </div>
          <Image
            src="/team01_thumbnail.webp"
            alt=""
            width={810}
            height={570}
            className={styles.img_thumbnail}
          />
        </div>
      </section>
      <section className={`${styles.wrap} ${styles.wrap_bottom}`}>
        <div className={styles.article}>
          <div className={styles.block}>
            <h3 className="cc_orange">
              ここに質問を記入ここに質問を記入ここに質問を記入ここに質問を記入。
            </h3>
            <p>
              ここにテキストを記入ここにテキストを記入ここにテキストを記入
              ここにテキストを記入ここにテキストを記入。
            </p>
            <p>
              ここにテキストを記入ここにテキストを記入ここにテキストを記入
              ここにテキストを記入ここにテキストを記入ここにテキストを記入
              ここにテキストを記入ここにテキストを記入ここにテキストを記入。
            </p>
            <p>
              ここにテキストを記入ここにテキストを記入ここにテキストを記入
              ここにテキストを記入ここにテキストを記入ここにテキストを記入
              ここにテキストを記入ここにテキストを記入ここにテキストを記入。
            </p>
          </div>
          <div className={styles.block}>
            <h3 className="cc_orange">
              ここに質問を記入ここに質問を記入ここに質問を記入ここに質問を記入。
            </h3>
            <Image
              src="/team_interview01_01.webp"
              alt=""
              width={1024}
              height={570}
              className={styles.img_article}
            />
            <p>
              ここにテキストを記入ここにテキストを記入ここにテキストを記入
              ここにテキストを記入ここにテキストを記入。
            </p>
            <p>
              ここにテキストを記入ここにテキストを記入ここにテキストを記入
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
    </main>
  );
}
