import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Locale } from "../../i18n-config";
import { ABeeZee, Abel, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const abeezee = ABeeZee({ weight: '400', subsets: ["latin"] });
const abel = Abel({ weight: '400', subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trustline Task",
  icons: "/favicon.ico"
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"}>
      <body className={`
        ${inter.className}
        ${abeezee.className}
        ${abeezee.className}
        ${abeezee.className}
        w-screen overflow-x-hidden`
      }>
        {children}
      </body>
    </html>
  );
}
