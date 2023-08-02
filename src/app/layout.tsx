import "../assets/globals.css";
import Header from "@/components/ui/header";
import Head from "./head";
import Footer from "@/components/ui/footer";

// import { Lora } from "next/font/google";

// const lora = Lora({
//   weight: ["400", "500"],
//   variable: "--font-lora",
//   display: "swap",
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="pl" className={lora.variable}>
    <html lang="pl">
      <Head />
      <body
        className={` bg-orange-100 dark:bg-slate-700 h-fit over container mx-auto px-4 pb-4`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
