"use client";

import Image from "next/image";
import logo from "../../../../../../public/trackorg.svg";
import ThemeToggle from "@/components/ThemeToggle";
import DarkModeWrapper from "@/components/DarkModeWrapper";
import RegisterImage from "@/components/RegisterImage";
import Link from "next/link";
import AdminLoginForm from "@/components/AdminAuth/AdminLogin/AdminLoginForm";
import Footer from "@/components/Footer";

const LoginPage = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-5 bg-light-secondary dark:bg-dark-secondary">
        <Link href="/">
          <Image src={logo} alt="TrackOrg Logo" width={100} />
        </Link>
        <ThemeToggle />
      </nav>

      <main className="grid grid-cols-2 p-2 md:p-12">
        <div className="items-center justify-center hidden col-span-2 md:col-span-1 md:flex">
          <DarkModeWrapper>
            {(isDarkMode) => (
              <div>
                <RegisterImage isDarkMode={isDarkMode} />
              </div>
            )}
          </DarkModeWrapper>
        </div>

        <div className="flex items-center justify-center w-full col-span-2 p-5 md:p-10 rounded-xl bg-light-secondary dark:bg-dark-secondary md:col-span-1 md:w-3/4">
          <div className="w-full">
            <AdminLoginForm />
            <div className="mt-3">
              <Link href="/admin/app-setup" className="text-sm font-medium">
                Don't have an account?{" "}
                <span className="text-light-accent dark:text-dark-accent">
                  Register
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="absolute bottom-0 w-full text-center bg-light-secondary dark:bg-dark-primary">
        <Footer />
      </footer>
    </div>
  );
};

export default LoginPage;
