
import React from "react";
import FadeIn from "./animations/FadeIn";
import avatarSrc from "../assets/avatar/lina.png";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 animated-gradient">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <FadeIn direction="left" delay={0.1}>
              <div className="text-sm uppercase tracking-wider text-portfolio-accent font-medium mb-4">
                Software Engineer | Tech Marketing Expert
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-portfolio-900 mb-6 leading-tight">
                Lina <span className="text-portfolio-accent">Yang</span>
              </h1>
              <p className="text-lg text-portfolio-700 mb-8 max-w-xl">
                A software engineer specializing in blockchain technology, smart contracts, and AI,
                with a passion for technology marketing at the intersection of innovation and user engagement.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-primary"
                >
                  Get in Touch
                </button>
                <button 
                  onClick={() => {
                    const element = document.getElementById("experience");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-3 border border-portfolio-accent text-portfolio-accent rounded-lg
                  hover:bg-portfolio-accent hover:text-white transition-all duration-300 ease-in-out"
                >
                  View Work
                </button>
              </div>
            </FadeIn>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <FadeIn direction="right" delay={0.3}>
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img 
                    src={avatarSrc} 
                    alt="Lina Yang" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/400x400?text=Lina+Yang";
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-portfolio-accent rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-portfolio-accent rounded-full opacity-10 animate-float"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
