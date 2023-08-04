
import "../assets/globals.css";
import Header from "@/components/ui/header";
import Head from "./head";
import { PagesProvider } from "@/context/PagesContext";


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
        className={` bg-orange-100 dark:bg-slate-700 md:p-8 p-2 overflow-x-hidden `}
      >
        <PagesProvider>
          <Header />
          {children}
        </PagesProvider>
      </body>
    </html>
  );
}
