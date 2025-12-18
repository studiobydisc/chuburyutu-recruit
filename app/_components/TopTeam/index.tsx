"use client";

import styles from "./index.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Image from "next/image";
import Button from "../Button";

export default function TopTeam() {
  return (
    <section className={styles.wrap}>
      <h2 className={`${styles.header2} line_wavy`}>人を知る</h2>
      <div className={styles.slider}>
        <Splide
          options={{
            type: "loop",
            arrows: false,
            pagination: false,
            fixedHeight: "800px",
            perPage: 3.5,
            perMove: 1,
            flickPower: 120,
            breakpoints: {
              1024: {
                perPage: 2.5,
                fixedHeight: "600px",
              },
              768: {
                perPage: 1.5,
                fixedHeight: "480px",
              },
            },
          }}
        >
          <SplideSlide>
            <a href="/team/interview01" className={styles.link}>
              <div className={`${styles.img} ${styles.img_src1}`}>
                <div className={styles.cover}>
                  <div>
                    <p className={styles.name}>猿渡 あいみ</p>
                    <p className={styles.text}>資材販売部</p>
                    <h3 className={styles.header3}>
                      お客様の商品開発や店舗運営をサポート、デリカ部門を全力で支えています
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          </SplideSlide>
          <SplideSlide>
            <a href="/team/interview02" className={styles.link}>
              <div className={`${styles.img} ${styles.img_src2}`}>
                <div className={styles.cover}>
                  <div>
                    <p className={styles.name}>高田 智之</p>
                    <p className={styles.text}>事業開発部・部長</p>
                    <h3 className={styles.header3}>
                      サプライチェーンを繋ぐスペシャリスト、大規模なプロジェクトの先頭に立つ
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          </SplideSlide>
          <SplideSlide>
            <a href="/team/interview03" className={styles.link}>
              <div className={`${styles.img} ${styles.img_src3}`}>
                <div className={styles.cover}>
                  <div>
                    <p className={styles.name}>小池 祥</p>
                    <p className={styles.text}>資材販売部</p>
                    <h3 className={styles.header3}>
                      現場の頼れる存在として、売場づくりのサポートをさせていただいてます
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          </SplideSlide>
          <SplideSlide>
            <a href="/team/interview04" className={styles.link}>
              <div className={`${styles.img} ${styles.img_src4}`}>
                <div className={styles.cover}>
                  <div>
                    <p className={styles.name}>竹林 宥輔</p>
                    <p className={styles.text}>商品販売部</p>
                    <h3 className={styles.header3}>
                      消費者に愛される商品をお客様と一緒に開発
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          </SplideSlide>
        </Splide>
      </div>
      <div className={styles.btn}>
        <Button href="/team" />
      </div>
    </section>
  );
}
