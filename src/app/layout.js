import { Montserrat } from "next/font/google";
import { Lato } from "next/font/google";

import "./globals.css";
import TopBar from "@/components/utils/TopBar";
import NavBar from "@/components/NavBar";
import ToTop from "@/components/utils/ToTop";
import Footer from "@/components/Footer";

const monst = Montserrat({ subsets: ["latin"] });
// const lato = Lato({ subsets: ["latin"] });

export const metadata = {
  title: "Pharma",
  description:
    "Pharma is a pharmaceutical company offering various consultancy and medical sales service. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monst.className} style={{ position: "relative" }}>
        <TopBar />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
