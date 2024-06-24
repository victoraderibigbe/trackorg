"use client";

import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../../../public/trackorg.svg";
import DarkModeWrapper from "@/components/DarkModeWrapper";
import RegisterImage from "@/components/RegisterImage";
import AdminRegisterForm from "@/components/AdminAuth/AdminRegister/AdminRegisterForm";
import Footer from "@/components/Footer";

const AppSetup = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex items-center justify-between px-5 py-2 md:py-5 bg-light-secondary dark:bg-dark-secondary">
        <Link href="/">
          <Image src={logo} alt="TrackOrg Logo" width={100} />
        </Link>
        <ThemeToggle />
      </nav>

      <main className="grid flex-grow grid-cols-2 p-2 md:p-12">
        <div className="items-center justify-center hidden col-span-2 md:col-span-1 md:flex">
          <DarkModeWrapper>
            {(isDarkMode) => (
              <div>
                <RegisterImage isDarkMode={isDarkMode} />
              </div>
            )}
          </DarkModeWrapper>
        </div>

        <div className="w-full col-span-2 p-2 md:col-span-1 md:flex">
          <div className="flex items-center justify-center p-5 md:p-10 rounded-xl bg-light-secondary dark:bg-dark-secondary md:col-span-1 md:w-3/4">
            <div className="w-full">
              <AdminRegisterForm />
              <div className="mt-3">
                <Link href="/admin/login" className="text-sm font-medium">
                  Already Registered?{" "}
                  <span className="text-light-accent dark:text-dark-accent">
                    Login
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full text-center bg-light-secondary dark:bg-dark-primary">
        <Footer />
      </footer>
    </div>
  );
};

export default AppSetup;
