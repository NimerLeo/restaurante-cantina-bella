import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

export const metadata = {
  metadataBase: new URL("https://nimerleo.github.io/restaurante-cantina-bella/"),
  title: "Cantina Bella | Cozinha italiana na Vila Madalena",
  description:
    "Massa fresca feita todos os dias, forno a lenha e carta de vinhos italianos. Cantina Bella, na Vila Madalena desde 1998.",
  keywords: ["cantina italiana", "restaurante Vila Madalena", "massa fresca", "pizza forno a lenha"],
  openGraph: {
    title: "Cantina Bella | Cozinha italiana na Vila Madalena",
    description: "Massa fresca, forno a lenha e vinhos italianos. Desde 1998.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport = {
  themeColor: "#17130f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
