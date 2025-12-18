"use client";

import styles from "./index.module.css";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={`${styles.btn_menu} ${isOpen ? styles.open : ""}`}
        onClick={toggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? "close" : "open"}
      >
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </button>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.list}>
          <li className={styles.item_top}>
            <a href="/" className="link_line" onClick={close}>
              トップページ
            </a>
          </li>
          <li>
            <a href="/environment" className="link_line" onClick={close}>
              働く環境を知る
            </a>
          </li>
          <li>
            <a href="/team" className="link_line" onClick={close}>
              人を知る
            </a>
          </li>
          <li>
            <a href="/work" className="link_line" onClick={close}>
              仕事を知る
            </a>
          </li>
          <li>
            <a href="/job" className="link_line" onClick={close}>
              募集要項
            </a>
          </li>
          <li className={styles.item}>
            <a
              href="https://job.mynavi.jp/27/pc/search/corp69956/outline.html?msockid=36e9512a52ad66ed1b5544bc53576791"
              className={styles.btn}
              onClick={close}
            >
              エントリー
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
