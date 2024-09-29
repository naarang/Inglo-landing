import AboutusBanner from "@/components/aboutus/banner/AboutusBanner";
import AboutusHeader from "@/components/aboutus/header/AboutusHeader";
import AboutusMind from "@/components/aboutus/mind/AboutusMind";
import AboutusTimeline from "@/components/aboutus/timeline/AboutusTimeline";
import AboutusValue from "@/components/aboutus/value/AboutusValue";
import React from "react";

export const metadata = {
  title: "about us",
};

const AboutusPage = () => {
  return (
    <>
      <AboutusHeader />
      <main>
        <AboutusBanner />
        <AboutusValue />
        <AboutusTimeline />
        <AboutusMind />
      </main>
    </>
  );
};

export default AboutusPage;
