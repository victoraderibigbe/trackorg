import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TrackOrg",
  description:
    "Automate your organization's register/attendance system with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Toaster position="top-center" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
