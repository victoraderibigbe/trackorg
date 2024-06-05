"use client";

import Image from "next/image";
import servicesLight from "../../public/gifs/services-light.gif";
import servicesDark from "../../public/gifs/services-dark.gif";

const ServicesImage = ({ isDarkMode }) => {
  return (
    <Image
      src={isDarkMode ? servicesDark : servicesLight}
      alt="Services Illustration"
    />
  );
};

export default ServicesImage;
