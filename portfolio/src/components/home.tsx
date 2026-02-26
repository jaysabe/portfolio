"use client";

import { Hero } from "./hero";
import { Profile } from "./profile";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { WorkExperience } from "./experience";
import { Projects } from "./project";
import { EmailForm } from "./email-form";

export const Home = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  });
  return (
    <div>
      <div className="pt-32 pb-16 md:pt-52 md:pb-32 relative max-w-5xl min-h-screen px-4 mx-auto sm:px-6 space-y-80">
        <Hero />
        <Profile />
        <WorkExperience />
        <Projects />
        <EmailForm />
      </div>
      {/* Footer */}
    </div>
  );
};
