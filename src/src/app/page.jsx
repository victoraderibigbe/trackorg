"use client";

import DarkModeWrapper from "@/components/DarkModeWrapper";
import Header from "@/components/Header";
import HeroImage from "@/components/HeroImage";

const Page = () => {
  return (
    <>
      <nav>
        <Header />
      </nav>

      <main className="p-2 md:p-10">
        {/* Hero Section */}
        <section>
          <div className="grid grid-cols-2">
            <div className="col-span-2 p-2 text-center md:col-span-1 md:p-32 md:text-start">
              <h1 className="h-20 my-5 text-5xl font-bold text-transparent md:my-10 md:text-7xl bg-gradient-to-r from-purple-400 via-blue-500 to-light-accent bg-clip-text dark:from-dark-accent dark:to-yellow-500">
                TrackOrg:
              </h1>
              <h3 className="text-2xl font-semibold md:text-4xl text-light-text dark:text-dark-text">
                Automate your organization's register/attendance system with
                ease.
              </h3>
              <p className="my-5 text-sm md:my-10 text-balance md:text-lg">
                TrackOrg uses biometric technology to streamline attendance and
                registration systems in organizations. Its seamless integration,
                real-time monitoring, and advanced analytics ensure efficient
                and secure attendance management.
              </p>
              <button className="relative px-6 py-3 overflow-hidden text-lg font-bold transition rounded-xl text-light-primary dark:text-dark-text hover:opacity-90">
                <span className="absolute inset-0 bg-gradient-to-r from-light-accent via-purple-500 to-pink-500 dark:from-dark-accent dark:via-green-500 dark:to-yellow-500 animate-gradient"></span>
                <span className="relative z-10">Get Started</span>
              </button>
            </div>
            <div className="items-center justify-center hidden col-span-2 p-16 md:flex md:col-span-1">
              <DarkModeWrapper>
                {(isDarkMode) => (
                  <div>
                    <HeroImage isDarkMode={isDarkMode} />
                  </div>
                )}
              </DarkModeWrapper>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
