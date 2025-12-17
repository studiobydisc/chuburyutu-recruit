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
    title: {
      template: "%s | 中部流通株式会社 採用サイト",
      default: "中部流通会部式会社 採用サイト",
    },
    description:
      "バローHDグループの総合商社の中部流通の採用サイトです。ともに食品流通業のあらゆるお悩みを解決していく仲間を募集しています。",
    images: ["/ogp.jpg"],
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
