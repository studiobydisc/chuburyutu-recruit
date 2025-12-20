import styles from "./page.module.css";
import PageTitle from "../_components/PageTitle";
import Image from "next/image";

export default function Work() {
  return (
    <main className={styles.color}>
      <div className={styles.bg}>
        <PageTitle titleJa="仕事を知る" titleEn="Our Work" />
      </div>
      <section className={`${styles.wrap} ${styles.bg} top_header_trigger`}>
        <h2>中部流通ってどんな会社？</h2>
        <div className={styles.inner_movie}>
          <div className={styles.box_text}>
            <h3>
              <span className="cc_br cc_padding cc_white_orange">
                私たちはバローを裏で支える、
              </span>
              <span className="cc_padding cc_white_orange">
                バローHDのグループ企業のです。
              </span>
            </h3>
            <p>
              グループの商社という立ち位置で、店舗や工場の運営サポート、食品や生活用品の商品開発サポートをしていくのが私たちの主な仕事内容です。
            </p>
            <p>
              現場目線で、お客様のところへ訪問する機会も多く、自分で考えて組み立ていける方や行動力のある方が活躍しやすい仕事です。
            </p>
          </div>
          <div className={styles.movie}>
            <iframe
              src="https://www.youtube.com/embed/2Gz0uTIQj0s"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      <section className={`${styles.wrap} ${styles.bg} ${styles.wrap_bottom}`}>
        <h2>店舗・工場運営を支える</h2>
        <div className={styles.inner}>
          <div className={`${styles.box_img} ${styles.box_img_top}`}>
            <Image
              src="/work_support01.webp"
              alt="ドラッグストアで商談をする店員と社員"
              width={570}
              height={400}
              className={styles.img}
            />
            <Image
              src="/work_support02.webp"
              alt="惣菜専門店で打ち合わせをする店員と社員"
              width={570}
              height={400}
              className={styles.img_right}
            />
          </div>
          <div className={`${styles.box_text} ${styles.box_text_top}`}>
            <h3>
              <span className="cc_br cc_padding cc_white_orange">
                食品流通業のあらゆる
              </span>
              <span className="cc_padding cc_white_orange">
                お悩みごとを解決いたします。
              </span>
            </h3>
            <p>
              私たちは食品トレーも陳列用備品も、調理機械も商品もデザインももあらゆるサービスを提供しています。
            </p>
            <p>
              お客様のお悩みは、私たちのノウハウで全力で解決していく。やりがいのある仕事に挑戦することができます。
            </p>
          </div>
        </div>
      </section>
      <section
        className={`${styles.wrap} ${styles.bg_gradation} ${styles.wrap_bottom_large}`}
      >
        <h2>商品開発を支える</h2>
        <div className={styles.inner}>
          <div className={`${styles.box_text} ${styles.rs_order2}`}>
            <h3>
              <span className="cc_br cc_padding cc_white_orange">
                価値ある商品の
              </span>
              <span className="cc_padding cc_white_orange">
                開発をサポートさせていただきます。
              </span>
            </h3>
            <p>
              開発に携わった商品が店舗で販売されてお客様に購入されるのを見ると、うれしくなりわくわくしますよね。
            </p>
            <p>
              こだわりの商品をバイヤーの皆様と一緒に開発したり、海外とのつながりを作ったりと楽しく仕事ができます。
            </p>
          </div>
          <div className={`${styles.box_img} ${styles.rs_order1}`}>
            <Image
              src="/work_products01.webp"
              alt="スーパーマーケットで商品を手に取る社員"
              width={570}
              height={400}
              className={styles.img}
            />
            <Image
              src="/work_products02.webp"
              alt="事務所で商品の打ち合わせを行う社員たち"
              width={570}
              height={400}
              className={styles.img_right}
            />
          </div>
        </div>
      </section>
      <section className={`${styles.wrap} ${styles.wrap_last}`}>
        <div className={styles.article}>
          <h2 className={styles.header2}>事例紹介</h2>
          <div className={styles.cases}>
            <div className={styles.inner_cases} id="cases01">
              <h3>
                <span className="cc_br cc_padding cc_yellow">
                  水産部門のお客様に
                </span>
                <span className="cc_padding cc_yellow">
                  オペレーション改善の提案をしました
                </span>
              </h3>
              <Image
                src="/work_cases01_thumbnail.webp"
                alt=""
                width={1024}
                height={570}
                className={styles.img_article}
              />
              <div className={styles.box_tag}>
                <p className={styles.tag}>
                  <span className={styles.hash}>店舗・工場運営を支える</span>
                </p>
                <p className={styles.tag}>
                  <span className={styles.hash}>資材販売部</span>
                </p>
                <p className={styles.tag}>
                  <span className={styles.hash}>スーパーマーケットバロー</span>
                </p>
              </div>
              <div className={styles.box_contents}>
                <h4>具体的にどんな提案をされましたか？</h4>
                <p>
                  スーパーマーケットの水産部門様向けに、使いやすくパッケージ化した対面売場用の備品を提案させていただきました。
                </p>
                <p>
                  対面販売は文字通りお客様と対面で魚を販売する場所です。そのため、バックヤードではなくオープンな売場で作業を行う必要があり、加工や作業に使用する消耗品・備品類もその場に用意しておかなければなりません。
                </p>
                <p>
                  そのためにラックや引き出しといった備品を各店舗ごとで対面販売の売場に設置されていたのですが、店舗ごとの判断で近隣のホームセンターで購入することが多く、店舗ごとで異なる備品が使用されていました。
                </p>
                <p>
                  使用する備品が違えば統一したオペレーションを組むことができないという状況になり、作業や加工のスピードに違いが出るかもしれません。また、従業員の方がどの備品にするか考え近隣のホームセンターで購入するという手間がかかり時間も経費の負担も大きくなってしまいます。
                </p>
                <h4>提案によってどのような効果が得られましたか？</h4>
                <p>
                  統一した備品、レイアウトでオペレーションの改善ができました
                </p>
                <p>
                  提案したパッケージは、まずリニューアル店舗で採用をいただきました。その後も新店舗や新たなリニューアル店舗に納めさせていただき、対面売場備品の統一化を進めています。
                </p>
                <p>
                  備品が統一化されたことにより、どこに何があるか分かりやすくなり、作業や加工といったオペレーションの改善につながりました。
                </p>
                <h4>普段は他にどのような仕事をされていますか？</h4>
                <p>
                  私は水産部門様を担当させていただくことが多く、他には魚を包装する食品用トレーなどの提案もさせていただいております。
                </p>
                <p>
                  私が配属されている資材販売部では、スーパーマーケットなどの店舗や食品工場様向けに、食品包装や資材・消耗品、備品や厨房機器など様々なアイテムを取り扱っております。
                </p>
                <p>
                  私もチームメイトもお客様のところへお伺いすることが多く、日々お客様とコミュニケーションを取らせていただきながらお悩みごとを解決するのが楽しみであり、自分たちの役割だと思っています。
                </p>
              </div>
            </div>
          </div>
          <div className={styles.cases}>
            <div className={styles.inner_cases} id="cases02">
              <h3>
                <span className="cc_br cc_padding cc_yellow">
                  海外輸入でオリーブオイルの
                </span>
                <span className="cc_padding cc_yellow">
                  商品開発をサポートさせていただきました
                </span>
              </h3>
              <Image
                src="/work_cases02_thumbnail.webp"
                alt=""
                width={1024}
                height={570}
                className={styles.img_article}
              />
              <div className={styles.box_tag}>
                <p className={styles.tag}>
                  <span className={styles.hash}>店舗・工場運営を支える</span>
                </p>
                <p className={styles.tag}>
                  <span className={styles.hash}>商品販売部</span>
                </p>
                <p className={styles.tag}>
                  <span className={styles.hash}>スーパーマーケットバロー</span>
                </p>
              </div>
              <div className={styles.box_contents}>
                <h4>今回開発されたのはどのような商品ですか？</h4>
                <p>
                  今回開発したのは、エキストラバージンオリーブオイルです。容量は750mlの大容量で、原産国はオリーブオイルの本場のスペインです。原料収穫から粉砕までの行程が24時間以内に行われる一番搾りの新鮮なオリーブオイルです。
                </p>
                <p>
                  すでに販売されているのでお近くのスーパーマーケットバローでご購入いただけます。
                </p>
                <h4>商品開発って一体どんなことをするんですか？</h4>
                <p>
                  私たちの商品開発では、スーパーマーケットやドラッグストア、ホームセンターなどのバイヤーと一緒になって企画から販売までをサポートさせていただくことが多いです。
                </p>
                <p>
                  商品規格や製造国の決定、メーカーとの交渉や現地視察、パッケージデザインや販促用のPOPをどうするか決める等々…やることはたくさんあります。
                </p>
                <p>
                  特に私たちは輸入機能に力を入れているため、海外とつながる商品開発も多くなっています。
                </p>
                <h4>今回はスペインまで視察に行かれたとお伺いしています</h4>
                <p>
                  はい。スペインまで視察に行きました。今回はオリーブオイルの製造現場から原料のオリーブが育てられている畑まで視察を行い、自信を持ってお客様に提案できるかこの目で確かめてきました。
                </p>
                <p>
                  スペインからの輸入ということで日本から離れた土地ではありますが、安全安心で高品質な商品を開発するためにも現地でどのような育成がされているか、製造が行われているか現場を見ることでとことんこだわることができます。
                </p>
                <p>
                  自分で現地まで行って開発した商品がお店に並び消費者の方たちに購入されていく、このようにみなさまの暮らしを支える存在になれるのはワクワクしますし、この仕事の醍醐味なのかもしれません。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
