"use client";

import styles from "./index.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css/core";
import Image from "next/image";

export default function TopHero() {
  return (
    <div className={styles.wrap}>
      <div className={styles.box}>
        <p className={styles.cc}>
          キャッチコピー、
          <br />
          キャッチコピーキャッチコピー。
        </p>
      </div>
      <Splide
        extensions={{ AutoScroll }}
        options={{
          type: "loop",
          gap: "3.64vw",
          arrows: false,
          pagination: false,
          autoWidth: true,
          drag: false,
          autoScroll: {
            speed: 0.7,
            pauseOnHover: false,
            pauseOnFocus: false,
          },
        }}
      >
        <SplideSlide>
          <Image src="/top_mv01.webp" alt="" width={1200} height={770} />
        </SplideSlide>
        <SplideSlide>
          <Image src="/top_mv02.webp" alt="" width={687} height={770} />
        </SplideSlide>
        <SplideSlide>
          <Image src="/top_mv03.webp" alt="" width={1200} height={770} />
        </SplideSlide>
      </Splide>
    </div>
  );
}
