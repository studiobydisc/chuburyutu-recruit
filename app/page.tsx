import styles from "./page.module.css";
import TopHero from "./_components/TopHero";
import TopAbout from "./_components/TopAbout";
import TopEnviornment from "./_components/TopEnviornment";
import TopTeam from "./_components/TopTeam";
import TopWork from "./_components/TopWork";
import TopMovie from "./_components/TopMovie";
import TopJobDesc from "./_components/TopJobDesc";

export default function Home() {
  return (
    <main className={styles.wrap}>
      <TopHero />
      <TopAbout />
      <TopEnviornment />
      <TopTeam />
      <TopWork />
      <TopMovie />
      <TopJobDesc />
    </main>
  );
}
