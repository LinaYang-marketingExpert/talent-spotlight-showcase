
import React from "react";
import FadeIn from "./animations/FadeIn";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="section-title">About Me</h2>
        </FadeIn>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn delay={0.2}>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 bg-portfolio-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-portfolio-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-portfolio-800">Software Engineering</h3>
              <p className="text-portfolio-700 leading-relaxed">
                I'm a dedicated software engineer focusing on blockchain technology, smart contracts, and AI solutions. 
                My technical expertise spans across decentralized applications, smart contract development, and 
                implementing AI-driven functionalities to solve complex problems.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 bg-portfolio-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-portfolio-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-portfolio-800">Tech Marketing</h3>
              <p className="text-portfolio-700 leading-relaxed">
                I work at the exciting intersection of technology and marketing, ensuring products not only 
                meet technical specifications but also resonate with end users. My approach combines data-driven 
                insights with creative strategies to drive growth and enhance user engagement.
              </p>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn delay={0.6}>
          <div className="mt-16 p-8 glass-card rounded-2xl">
            <p className="text-portfolio-700 leading-relaxed">
              My unique background allows me to bridge the gap between technical development and market needs. 
              I believe that the most successful tech products are those that not only showcase technical excellence 
              but also truly understand and address user needs. Whether I'm developing decentralized applications, 
              implementing AI solutions, or crafting marketing strategies, my focus remains on creating technology 
              that makes a meaningful impact.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
