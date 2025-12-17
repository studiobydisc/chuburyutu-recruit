import styles from "./index.module.css";
import Image from "next/image";

export default function TopAbout() {
  return (
    <section className="top_header_trigger">
      <div className={styles.wrap_top}>
        <h2 className={styles.header2}>
          <span className="cc_br cc_padding cc_white">
            食品流通業の現場を、
          </span>
          <span className="cc_padding cc_white">
            さまざまな角度から支えています。
          </span>
        </h2>
        <div className={styles.cc_sub}>
          <p>
            小売店舗や食品工場など、食品に関わる現場の課題解決をお客様に提案します。店舗・工場運営に関するお困りごと解決、商品開発のサポートが私たちの役割です。
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
            <span className="cc_br cc_padding cc_yellow">
              暮らしの中のわくわくを、
            </span>
            <span className="cc_padding cc_yellow">
              資材と商品の総合力で演出します。
            </span>
          </h3>
          <p>
            私たちはバローHDのグループ企業として、パッケージ、消耗資材・消耗品、機械設備、商品、デザイン、アグリなど、あらゆるモノ・サービスを提供する会社です。
          </p>
          <p>
            グループ会社内や外部のお客様にも幅広く提供し、皆様の課題解決のサポートをさせていただきます。
          </p>
          <p></p>
        </div>
      </div>
    </section>
  );
}
