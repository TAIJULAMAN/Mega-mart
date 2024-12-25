import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Mega Mart",
  description: "The best place to buy products online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.className} max-w-[1700px] mx-auto min-h-screen px-5 md:px-10 lg:px-20 xl:px-28 pb-10 antialiased`}
      >
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
