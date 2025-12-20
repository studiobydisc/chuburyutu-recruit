import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP, Zen_Kaku_Gothic_New, Open_Sans } from "next/font/google";
import Lenis from "./_components/Lenis";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://recruit.chuburyutu.vercel.app"),
  title: {
    template: "%s | 中部流通株式会社 採用サイト",
    default: "中部流通会部式会社 採用サイト",
  },
  description:
    "バローHDグループの総合商社の中部流通の採用サイトです。ともに食品流通業のあらゆるお悩みを解決していく仲間を募集しています。",
  openGraph: {
    title: "中部流通会部式会社 採用サイト",
    description:
      "中部流通では、店舗資材・業務用消耗品の企画開発から流通販売まで幅広く対応し、小売企業、食品加工工場・物流会社を現場目線で支援しております。",
    url: "https://recruit.chuburyutu.co.jp/",
    siteName: "中部流通会部式会社 採用サイト",
    images: [
      {
        url: "https://recruit.chuburyutu.co.jp/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "中部流通株式会社",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "",
  },
  verification: {
    google: "",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const NotoSansJPFont = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
});

const ZenKakuGothicNewFont = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const OpenSansFont = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`
      ${NotoSansJPFont.className}
      ${ZenKakuGothicNewFont.className}
      ${OpenSansFont.className}
      `}
    >
      <body>
        <Header />
        <Lenis>{children}</Lenis>
        <Footer />
      </body>
    </html>
  );
}
