import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  metadataBase: new URL("https://portfolio-one-kohl-38.vercel.app"),
  title: {
    default: "Anush Malhotra | System Developer",
    template: "%s | Anush Malhotra",
  },
  description:
    "Backend-focused system developer building ERP platforms, REST APIs, databases, and cloud-deployed full-stack applications.",
  keywords: [
    "System Developer",
    "Backend Developer",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "Trollhättan",
  ],
  openGraph: {
    title: "Anush Malhotra | System Developer",
    description:
      "ERP, backend, and full-stack engineering with NestJS, TypeScript, PostgreSQL, Docker, and AWS.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
