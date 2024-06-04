"use client";

import Image from "next/image";
import aboutLight from "../../public/gifs/about-light.gif";
import aboutDark from "../../public/gifs/about-dark.gif";

const AboutImage = ({ isDarkMode }) => {
  return (
    <Image
      src={isDarkMode ? aboutDark : aboutLight}
      alt="About-Us Illustration"
      priority
    />
  );
};

export default AboutImage;
