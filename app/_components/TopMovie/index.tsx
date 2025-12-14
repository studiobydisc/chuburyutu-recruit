import styles from "./index.module.css";

export default function TopMovie() {
  return (
    <section className={styles.wrap}>
      <h2 className={`${styles.header2} line_wavy`}>会社紹介ムービー</h2>
      <div className={styles.movie}>
        <iframe
          src="https://www.youtube.com/embed/2Gz0uTIQj0s"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
