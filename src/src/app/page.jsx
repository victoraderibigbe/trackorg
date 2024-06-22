"use client";

import AboutImage from "@/components/AboutImage";
import DarkModeWrapper from "@/components/DarkModeWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroImage from "@/components/HeroImage";
import ServicesImage from "@/components/ServicesImage";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Page = () => {
  return (
    <div className="relative">
      <header className="sticky top-0 z-50">
        <Header />
      </header>

      <main>
        {/* Hero Section */}
        <section>
          <div className="grid grid-cols-2">
            <div className="col-span-2 p-2 text-center md:col-span-1 md:p-32 md:text-start">
              <h1 className="h-20 my-5 text-transparent md:my-10 bg-gradient-to-r from-purple-400 via-blue-500 to-light-accent bg-clip-text dark:from-dark-accent dark:to-yellow-500">
                TrackOrg:
              </h1>
              <h3 className=" text-light-text dark:text-dark-text">
                Automate your organization's register/attendance system with
                ease.
              </h3>
              <p>
                TrackOrg uses biometric technology to streamline attendance and
                registration systems in organizations. Its seamless integration,
                real-time monitoring, and advanced analytics ensure efficient
                and secure attendance management.
              </p>
              <Link href="/admin/app-setup">
                <button className="relative px-6 py-3 overflow-hidden text-lg font-bold transition rounded-xl text-light-primary dark:text-dark-text hover:opacity-90">
                  <span className="absolute inset-0 bg-gradient-to-r from-light-accent via-purple-500 to-pink-500 dark:from-dark-accent dark:via-green-500 dark:to-yellow-500 animate-gradient"></span>
                  <span className="relative z-10">Get Started</span>
                </button>
              </Link>
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

        {/* About Section */}
        <section className="p-2 mt-4 md:p-0 bg-light-secondary dark:bg-dark-secondary">
          <div className="grid grid-cols-2">
            <div className="items-center justify-center hidden col-span-2 p-16 md:flex md:col-span-1">
              <DarkModeWrapper>
                {(isDarkMode) => (
                  <div>
                    <AboutImage isDarkMode={isDarkMode} />
                  </div>
                )}
              </DarkModeWrapper>
            </div>
            <div className="col-span-2 p-2 text-justify md:text-start md:col-span-1 md:p-32">
              <h2 className="my-5 text-center md:text-start text-light-accent dark:text-dark-accent md:my-10">
                About Us
              </h2>
              <p>
                TrackOrg is at the forefront of revolutionizing organizational
                attendance and registration systems through cutting-edge
                biometric technology. Our mission is to simplify and enhance the
                way organizations manage attendance, ensuring accuracy,
                security, and efficiency.
              </p>
              <p>
                With seamless integration into existing systems, real-time
                monitoring capabilities, and advanced analytics, TrackOrg
                provides a comprehensive solution for modern attendance
                management. Our innovative approach helps organizations save
                time, reduce errors, and gain valuable insights into attendance
                patterns.
              </p>
              <p>
                At TrackOrg, we are committed to delivering reliable and
                user-friendly solutions that meet the evolving needs of
                businesses and institutions. Join us in transforming the future
                of attendance management.
              </p>
              <Link
                href="/about"
                className="justify-center md:justify-start learn-more-link"
              >
                Learn More
                <FaArrowRight className="arrow-right" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="p-2 mt-4 md:p-0">
          <div className="grid grid-cols-2">
            <div className="col-span-2 p-2 text-justify md:text-start md:col-span-1 md:p-32">
              <h2 className="my-5 text-center md:text-start text-light-accent dark:text-dark-accent md:my-10">
                Our Services
              </h2>
              <p>
                At TrackOrg, we provide state-of-the-art biometric attendance
                systems that ensure accurate and secure tracking through
                advanced fingerprint technology. Our solutions seamlessly
                integrate with your existing HR systems, guaranteeing a smooth
                transition and minimal disruption to your operations. Real-time
                monitoring capabilities allow you to stay updated with instant
                insights and notifications, enhancing your organization’s
                responsiveness.
              </p>
              <p>
                Our platform offers advanced analytics, delivering comprehensive
                reports and dashboards to help you understand attendance
                patterns, identify issues, and make informed decisions. We
                understand that every organization has unique needs, which is
                why we offer customizable solutions tailored to meet specific
                requirements. Whether you are a small business or a large
                enterprise, our flexible options ensure you get the most out of
                our technology.
              </p>
              <p>
                Security is our top priority at TrackOrg. We employ advanced
                encryption and security protocols to protect your sensitive
                information and ensure data confidentiality. Additionally, our
                dedicated support team is always ready to assist you from
                initial setup to ongoing maintenance, providing comprehensive
                support to ensure your system operates flawlessly.
              </p>
              <Link
                href="/services"
                className="justify-center md:justify-start learn-more-link"
              >
                Learn More
                <FaArrowRight className="arrow-right" />
              </Link>
            </div>
            <div className="items-center justify-center hidden col-span-2 p-16 md:flex md:col-span-1">
              <DarkModeWrapper>
                {(isDarkMode) => (
                  <div>
                    <ServicesImage isDarkMode={isDarkMode} />
                  </div>
                )}
              </DarkModeWrapper>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
