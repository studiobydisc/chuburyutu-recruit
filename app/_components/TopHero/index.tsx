"use client";

import styles from "./index.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css/core";
import Image from "next/image";

export default function TopHero() {
  return (
    <section className={styles.wrap}>
      <div className={styles.box}>
        <p className={styles.cc}>
          私たちは、食品流通業を支える
          <br />
          プロフェッショナル集団です。
        </p>
      </div>
      <div className={styles.slider}>
        <Splide
          className={styles.splide}
          extensions={{ AutoScroll }}
          options={{
            type: "loop",
            gap: "3.64vw",
            arrows: false,
            pagination: false,
            autoWidth: true,
            drag: false,
            autoScroll: {
              speed: 0.4,
              pauseOnHover: false,
              pauseOnFocus: false,
            },
            breakpoints: {
              440: {
                autoScroll: {
                  speed: 0.8,
                },
                gap: "2vw",
              },
            },
          }}
        >
          <SplideSlide className={styles.slide}>
            <Image
              src="/top_mv01.webp"
              alt=""
              width={1200}
              height={770}
              className={styles.img}
              priority
            />
          </SplideSlide>
          <SplideSlide className={styles.slide}>
            <Image
              src="/top_mv02.webp"
              alt=""
              width={687}
              height={770}
              className={styles.img}
            />
          </SplideSlide>
          <SplideSlide className={styles.slide}>
            <Image
              src="/top_mv03.webp"
              alt=""
              width={1200}
              height={770}
              className={styles.img}
            />
          </SplideSlide>
          <SplideSlide className={styles.slide}>
            <Image
              src="/top_mv04.webp"
              alt=""
              width={1200}
              height={770}
              className={styles.img}
            />
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}
