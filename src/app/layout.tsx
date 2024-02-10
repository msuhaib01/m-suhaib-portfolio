import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/main/header";
import { Great_Vibes } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";

const great_vibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Suhaib's Portfolio",
  description: "M.Suhaib's Fullstack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${great_vibes.variable} !scroll-smooth`}>
      <body
        className={`${inter.className} bg-stone-900 text-stone-100 h-[5000px]`}
      >
        <div className="z-[-99] absolute ml-auto mr-auto left-0 right-0 w-full">
          <div className="flex justify-center">
            <div className="bg-[#8e309579] blur-[5rem] top-[-6rem] h-[34rem] w-[34rem] rounded-full "></div>
            <div className="ml-[-70px] bg-[#35379679] blur-[5rem] top-[-6rem] h-[34rem] w-[34rem] rounded-full "></div>
          </div>
        </div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
