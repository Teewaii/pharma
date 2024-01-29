import { Montserrat } from "next/font/google";
import "./globals.css";
import OverLay from "@/components/OverLay";

const monst = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Pharma",
  description:
    "Pharma is a pharmaceutical company offering various consultancy and medical sales service. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monst.className}>{children}</body>
    </html>
  );
}
