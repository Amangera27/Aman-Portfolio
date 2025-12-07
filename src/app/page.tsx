"use client";

import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ContactForm from "@/components/ContactForm";
import React from "react";

const page = () => {
  return (
    <div className="">
      <HeroSection />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  );
};

export default page;
