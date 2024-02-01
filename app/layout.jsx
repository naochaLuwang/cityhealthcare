import { Inter } from "next/font/google";
import "./globals.css";
import { CentreProvider } from "../Provider/Context/Centre.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "City Health Care",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <CentreProvider>
      <html lang="en">
        <body className={inter.className}>
          <>{children}</>
        </body>
      </html>
    </CentreProvider>
  );
}
