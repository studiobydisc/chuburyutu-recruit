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
            <a href="" className={styles.link}>
              <div className={`${styles.img} ${styles.img_src1}`}>
                <div className={styles.cover}>
                  <div>
                    <p className={styles.name}>名前</p>
                    <p className={styles.text}>部署・役職</p>
                    <h3 className={styles.header3}>
                      テキストテキストテキストテキストテキストテキスト。
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          </SplideSlide>
          <SplideSlide>
            <a href="" className={styles.link}>
              <div className={`${styles.img} ${styles.img_src2}`}>
                <div className={styles.cover}>
                  <div>
                    <p className={styles.name}>名前</p>
                    <p className={styles.text}>部署・役職</p>
                    <h3 className={styles.header3}>
                      テキストテキストテキストテキストテキストテキスト。
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          </SplideSlide>
          <SplideSlide>
            <a href="" className={styles.link}>
              <div className={`${styles.img} ${styles.img_src3}`}>
                <div className={styles.cover}>
                  <div>
                    <p className={styles.name}>名前</p>
                    <p className={styles.text}>部署・役職</p>
                    <h3 className={styles.header3}>
                      テキストテキストテキストテキストテキストテキスト。
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          </SplideSlide>
          <SplideSlide>
            <a href="" className={styles.link}>
              <div className={`${styles.img} ${styles.img_src4}`}>
                <div className={styles.cover}>
                  <div>
                    <p className={styles.name}>名前</p>
                    <p className={styles.text}>部署・役職</p>
                    <h3 className={styles.header3}>
                      テキストテキストテキストテキストテキストテキスト。
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          </SplideSlide>
        </Splide>
      </div>
      <div className={styles.btn}>
        <Button href="/" />
      </div>
    </section>
  );
}
