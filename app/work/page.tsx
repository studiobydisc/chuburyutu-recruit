import styles from "./page.module.css";
import PageTitle from "../_components/PageTitle";
import Image from "next/image";

export default function Work() {
  return (
    <main className={styles.color}>
      <div className={styles.bg}>
        <PageTitle titleJa="仕事を知る" titleEn="Our Work" />
      </div>
      <section className={`${styles.wrap} ${styles.bg} top_header_trigger`}>
        <h2>中部流通ってどんな会社？</h2>
        <div className={styles.inner}>
          <div className={styles.box_text}>
            <h3>
              <span className="cc_br cc_padding cc_white_orange">
                私たちはバローを裏で支える、
              </span>
              <span className="cc_padding cc_white_orange">
                バローホールディングスのグループ企業です。
              </span>
            </h3>
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
          <div className={styles.movie}>
            <iframe
              src="https://www.youtube.com/embed/2Gz0uTIQj0s"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      <section className={`${styles.wrap} ${styles.bg} ${styles.wrap_bottom}`}>
        <h2>店舗・工場運営を支える</h2>
        <div className={styles.inner}>
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
          <div className={styles.box_text}>
            <h3>
              <span className="cc_br cc_padding cc_white_orange">
                テキストテキストテキスト、
              </span>
              <span className="cc_padding cc_white_orange">
                テキストテキストテキストテキスト。
              </span>
            </h3>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキスト。
            </p>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキスト。
            </p>
          </div>
        </div>
      </section>
      <section
        className={`${styles.wrap} ${styles.bg_gradation} ${styles.wrap_bottom_large}`}
      >
        <h2>商品開発を支える</h2>
        <div className={styles.inner}>
          <div className={`${styles.box_text} ${styles.rs_order2}`}>
            <h3>
              <span className="cc_br cc_padding cc_white_orange">
                テキストテキストテキスト、
              </span>
              <span className="cc_padding cc_white_orange">
                テキストテキストテキストテキスト。
              </span>
            </h3>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキスト。
            </p>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキスト。
            </p>
          </div>
          <div className={`${styles.box_img} ${styles.rs_order1}`}>
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
        </div>
      </section>
      <section className={`${styles.wrap} ${styles.wrap_last}`}>
        <div className={styles.article}>
          <h2 className={styles.header2}>事例紹介</h2>
          <div className={styles.cases}>
            <div className={styles.inner_cases}>
              <h3>
                <span className="cc_br cc_padding cc_yellow">
                  テキストテキストテキスト、
                </span>
                <span className="cc_padding cc_yellow">
                  テキストテキストテキストテキスト。
                </span>
              </h3>
              <Image
                src="/team_interview01_01.webp"
                alt=""
                width={1024}
                height={570}
                className={styles.img_article}
              />
              <div className={styles.box_tag}>
                <p className={styles.tag}>
                  <span className={styles.hash}>店舗・工場運営を支える</span>
                </p>
                <p className={styles.tag}>
                  <span className={styles.hash}>クライアント名</span>
                </p>
              </div>
              <div className={styles.box_contents}>
                <h4>
                  ここに質問を記入ここに質問を記入ここに質問を記入ここに質問を記入。
                </h4>
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
          </div>
          <div className={styles.cases}>
            <div className={styles.inner_cases}>
              <h3>
                <span className="cc_br cc_padding cc_yellow">
                  テキストテキストテキスト、
                </span>
                <span className="cc_padding cc_yellow">
                  テキストテキストテキストテキスト。
                </span>
              </h3>
              <Image
                src="/team_interview01_01.webp"
                alt=""
                width={1024}
                height={570}
                className={styles.img_article}
              />
              <div className={styles.box_tag}>
                <p className={styles.tag}>
                  <span className={styles.hash}>店舗・工場運営を支える</span>
                </p>
                <p className={styles.tag}>
                  <span className={styles.hash}>クライアント名</span>
                </p>
              </div>
              <div className={styles.box_contents}>
                <h4>
                  ここに質問を記入ここに質問を記入ここに質問を記入ここに質問を記入。
                </h4>
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
          </div>
        </div>
      </section>
    </main>
  );
}
