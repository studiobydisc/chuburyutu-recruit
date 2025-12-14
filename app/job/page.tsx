import styles from "./page.module.css";
import PageTitle from "../_components/PageTitle";
import Image from "next/image";

export default function Job() {
  return (
    <main className={styles.color}>
      <div className={styles.bg}>
        <PageTitle titleJa="募集要項" titleEn="About Job" />
      </div>
      <section className={`${styles.wrap} top_header_trigger`}>
        <h2>新卒採用</h2>
        <table className={styles.description}>
          <tbody>
            <tr>
              <th>募集職種</th>
              <td>企画営業</td>
            </tr>
            <tr>
              <th>勤務地</th>
              <td>岐阜県可児市川合</td>
            </tr>
            <tr>
              <th>初任給</th>
              <td>4大卒　225,000円</td>
            </tr>
            <tr>
              <th>諸手当</th>
              <td>残業手当、通勤手当、赴任手当他</td>
            </tr>
            <tr>
              <th>休日・休暇</th>
              <td>
                完全週休2日制（土曜、日曜）
                <br />
                ※2～3ヶ月に1回程度土曜出勤あり（平日に振替休日を取得いただきます）
                <br />
                年間休日休暇113日（ワークラーフバランス休暇　9日含む）
                <br />
              </td>
            </tr>
            <tr>
              <th>勤務時間</th>
              <td>
                固定時間制
                <br />
                09:00 ~ 18:00
                <br />
                (実働8時間、休憩1時間)
              </td>
            </tr>
            <tr>
              <th>寮・社宅</th>
              <td>
                借上社宅制度（会社近くの賃貸物件を会社名義で契約し、入居いただけます）
                <br />
                ※適用基準あり
              </td>
            </tr>
            <tr>
              <th>福利厚生制度</th>
              <td>
                社会保険完備（労災保険、雇用保険、厚生年金、健康保険）
                <br />
                退職金制度 確定拠出年金制度 財形貯蓄制度 社員持株会
                <br />
                社員買物割引制度 育児・介護休業制度(取得実績あり) 短時間勤務制度
                <br />
                公的資格取得援助制度 慶弔見舞金
                <br />
                スポーツクラブアクトス無料利用券あり 借上社宅家賃補助制度
                <br />
                企業託児所あり 福利厚生倶楽部加入
                <br />
                （宿泊、育児、介護、グルメ、レジャー、リラクゼーションなどの各サービスを何度でも利用いただけます）
              </td>
            </tr>
            <tr>
              <th>選考方法</th>
              <td>
                まずは下記よりお問い合わせください。
                <br />
              </td>
            </tr>
          </tbody>
        </table>
        <a href="" className={styles.btn}>
          エントリー
        </a>
      </section>
      <section className={styles.wrap}>
        <h2>キャリア採用</h2>
        <table className={styles.description}>
          <tbody>
            <tr>
              <th>募集職種</th>
              <td>企画営業</td>
            </tr>
            <tr>
              <th>勤務地</th>
              <td>岐阜県可児市川合</td>
            </tr>
            <tr>
              <th>初任給</th>
              <td>4大卒　225,000円</td>
            </tr>
            <tr>
              <th>諸手当</th>
              <td>残業手当、通勤手当、赴任手当他</td>
            </tr>
            <tr>
              <th>休日・休暇</th>
              <td>
                完全週休2日制（土曜、日曜）
                <br />
                ※2～3ヶ月に1回程度土曜出勤あり（平日に振替休日を取得いただきます）
                <br />
                年間休日休暇113日（ワークラーフバランス休暇　9日含む）
                <br />
              </td>
            </tr>
            <tr>
              <th>勤務時間</th>
              <td>
                固定時間制
                <br />
                09:00 ~ 18:00
                <br />
                (実働8時間、休憩1時間)
              </td>
            </tr>
            <tr>
              <th>寮・社宅</th>
              <td>
                借上社宅制度（会社近くの賃貸物件を会社名義で契約し、入居いただけます）
                <br />
                ※適用基準あり
              </td>
            </tr>
            <tr>
              <th>福利厚生制度</th>
              <td>
                社会保険完備（労災保険、雇用保険、厚生年金、健康保険）
                <br />
                退職金制度 確定拠出年金制度 財形貯蓄制度 社員持株会
                <br />
                社員買物割引制度 育児・介護休業制度(取得実績あり) 短時間勤務制度
                <br />
                公的資格取得援助制度 慶弔見舞金
                <br />
                スポーツクラブアクトス無料利用券あり 借上社宅家賃補助制度
                <br />
                企業託児所あり 福利厚生倶楽部加入
                <br />
                （宿泊、育児、介護、グルメ、レジャー、リラクゼーションなどの各サービスを何度でも利用いただけます）
              </td>
            </tr>
            <tr>
              <th>選考方法</th>
              <td>
                まずは下記よりお問い合わせください。
                <br />
              </td>
            </tr>
          </tbody>
        </table>
        <a href="" className={styles.btn}>
          エントリー
        </a>
      </section>
    </main>
  );
}
