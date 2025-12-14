import styles from "./index.module.css";

type Props = {
  titleJa: string;
  titleEn: string;
};

export default function PageTitle({ titleJa, titleEn }: Props) {
  return (
    <div className={styles.title}>
      <div className={styles.inner}>
        <h1>
          {titleJa}
          <span>{titleEn}</span>
        </h1>
      </div>
    </div>
  );
}
