"use client";

import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Menu from "@/app/_components/Menu";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const trigger = document.querySelector(
      ".top_header_trigger"
    ) as HTMLElement | null;
    if (!trigger) return;

    const triggerTop = trigger.getBoundingClientRect().top + window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsActive(scrollY >= triggerTop);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.wrap}>
      <div className={`${styles.inner} ${isActive ? styles.active : ""}`}>
        <h1 className={styles.header1}>
          <a href="/" className={styles.link}>
            <Image
              className={styles.logo}
              src={isActive ? "/logo_color.svg" : "/logo_white.svg"}
              alt=""
              width={2476}
              height={530}
            />
            <span className={styles.text}>採用サイト</span>
          </a>
        </h1>
        <Menu />
      </div>
    </header>
  );
}
