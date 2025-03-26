
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md py-4",
        isScrolled
          ? "bg-white/80 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium cursor-pointer" onClick={() => scrollTo("hero")}>
            Lina Yang
          </h3>
        </div>
        
        <ul className="hidden md:flex space-x-8">
          <li className="nav-item">
            <button 
              onClick={() => scrollTo("about")}
              className="text-portfolio-700 hover:text-portfolio-accent transition-colors"
            >
              About
            </button>
          </li>
          <li className="nav-item">
            <button 
              onClick={() => scrollTo("experience")}
              className="text-portfolio-700 hover:text-portfolio-accent transition-colors"
            >
              Experience
            </button>
          </li>
          <li className="nav-item">
            <button 
              onClick={() => scrollTo("skills")}
              className="text-portfolio-700 hover:text-portfolio-accent transition-colors"
            >
              Skills
            </button>
          </li>
          <li className="nav-item">
            <button 
              onClick={() => scrollTo("contact")}
              className="text-portfolio-700 hover:text-portfolio-accent transition-colors"
            >
              Contact
            </button>
          </li>
        </ul>

        <div className="md:hidden">
          <button 
            className="p-2 rounded-md bg-portfolio-100 text-portfolio-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
