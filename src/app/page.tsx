import React from "react";
import HomePage from "@/components/HomePage";
import AboutPage from "@/components/AboutPage";
import Info from "@/components/Info";
import Testimony from "@/components/Testimony";
import Services from "@/components/Services";
import Newsletter from "@/components/Newsletter";
import ContactForm from "@/components/ContactForm";
import Properties from "@/components/Properties";

export default function Page() {
  return (
    <div className="w-full scroll-smooth">
      {/* Home section */}
      <section id="home" className="h-screen">
        <HomePage />
      </section>

      {/* About section */}
      <section id="about" className="min-h-screen">
        <AboutPage />
      </section>

      {/* Info section */}
      <section id="info" className="min-h-screen">
        <Info />
      </section>
      {/* Testimony Section*/}
      <section id="testimony">
        <Testimony />
      </section>
      {/* Testimony Section*/}
      <section id="properties">
        <Properties />
      </section>
      {/* Testimony Section*/}
      <section id="services">
        <Services />
      </section>
      {/* Testimony Section*/}
      <section id="newsLetter">
        <Newsletter />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </div>
  );
}
