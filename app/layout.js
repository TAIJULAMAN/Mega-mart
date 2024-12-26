import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import NavbarContainer from "@/components/Navbar/NavbarContainer";

// Import the Hanken Grotesk font
const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Define the metadata for the site
export const metadata = {
  title: "Mega Mart",
  description: "The best place to buy products online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.className} min-h-screen pb-10 antialiased overflow-x-hidden`}
      >
        <NavbarContainer />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}