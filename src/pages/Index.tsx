
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index: React.FC = () => {
  useEffect(() => {
    // Add scroll animation observer
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const fadeElements = document.querySelectorAll(".fade-in-section");
    
    fadeElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      fadeElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
      
      <footer className="py-8 bg-portfolio-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-portfolio-300">&copy; {new Date().getFullYear()} Lina Yang. All rights reserved.</p>
          <p className="text-portfolio-400 text-sm mt-2">Software Engineer & Tech Marketing Expert</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
