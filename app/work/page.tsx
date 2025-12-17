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
        <div className={styles.inner_movie}>
          <div className={styles.box_text}>
            <h3>
              <span className="cc_br cc_padding cc_white_orange">
                私たちはバローを裏で支える、
              </span>
              <span className="cc_padding cc_white_orange">
                バローHDのグループ企業のです。
              </span>
            </h3>
            <p>
              グループの商社という立ち位置で、店舗や工場の運営サポート、食品や生活用品の商品開発サポートをしていくのが私たちの主な仕事内容です。
            </p>
            <p>
              現場目線で、お客様のところへ訪問する機会も多く、自分で考えて組み立ていける方や行動力のある方が活躍しやすい仕事です。
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
          <div className={`${styles.box_img} ${styles.box_img_top}`}>
            <Image
              src="/work_support01.webp"
              alt=""
              width={570}
              height={400}
              className={styles.img}
            />
            <Image
              src="/work_support02.webp"
              alt=""
              width={570}
              height={400}
              className={styles.img_right}
            />
          </div>
          <div className={`${styles.box_text} ${styles.box_text_top}`}>
            <h3>
              <span className="cc_br cc_padding cc_white_orange">
                食品流通業のあらゆる
              </span>
              <span className="cc_padding cc_white_orange">
                お悩みごとを解決いたします。
              </span>
            </h3>
            <p>
              私たちは食品トレーも陳列用備品も、調理機械も商品もデザインももあらゆるサービスを提供しています。
            </p>
            <p>
              お客様のお悩みは、私たちのノウハウで全力で解決していく。やりがいのある仕事に挑戦することができます。
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
                価値ある商品の
              </span>
              <span className="cc_padding cc_white_orange">
                開発をサポートさせていただきます。
              </span>
            </h3>
            <p>
              開発に携わった商品が店舗で販売されてお客様に購入されるのを見ると、うれしくなりわくわくしますよね。
            </p>
            <p>
              こだわりの商品をバイヤーの皆様と一緒に開発したり、海外とのつながりを作ったりと楽しく仕事ができます。
            </p>
          </div>
          <div className={`${styles.box_img} ${styles.rs_order1}`}>
            <Image
              src="/work_products01.webp"
              alt=""
              width={570}
              height={400}
              className={styles.img}
            />
            <Image
              src="/work_products02.webp"
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
