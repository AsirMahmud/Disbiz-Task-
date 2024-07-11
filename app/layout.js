import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" bg-[#020000]">
      <body className='font-["Axiforma"]'>
        <div className="bg-[#020000] lg:px-8   ">
          {children} <Footer className=""></Footer>
        </div>
      </body>
    </html>
  );
}
