import styles from "./index.module.css";

type Props = {
  href?: string;
};

export default function Button({ href }: Props) {
  return (
    <a href={href} className={styles.btn}>
      <span className={styles.text}>くわしくはこちら</span>
    </a>
  );
}
