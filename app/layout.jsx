import "./globals.css";
import { Almarai } from "next/font/google";
import ClientComponent from "../components/ClientComponent";

const almarai = Almarai({
  weight: "400",
  subsets: ["arabic"],
  variable: "--display-font",
});
export const metadata = {
  title: "Refai",
  description: "Generated by create next app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <ClientComponent>
        <body className={almarai.variable}>{children}</body>
      </ClientComponent>
    </html>
  );
};
export default RootLayout;
