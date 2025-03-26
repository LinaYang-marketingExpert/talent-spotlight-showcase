
import React from "react";
import FadeIn from "./animations/FadeIn";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      "HTML", "CSS", "JavaScript", "TypeScript", "C", "C#", 
      "Python", "Rust", "Solidity", "Erlang"
    ]
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      "React.js", "Next.js", "Node.js", "Express.js", "Django", 
      ".NET", "Hardhat", "Mocha", "Elixir", "Unity", "Mirror", 
      "Ethers.js", "Web3.js", "TensorFlow", "Photon"
    ]
  },
  {
    title: "Others",
    skills: [
      "OOP", "UML", "Waterfall", "Software Architecture", 
      "POW", "POS Consensus", "Economic Modeling", "BFT", 
      "ZK-Proofs", "Game Design", "Unit Testing", "E2E Testing", 
      "Agile", "Scrum"
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="section-title">Core Skills</h2>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <FadeIn key={categoryIndex} delay={0.2 * categoryIndex}>
              <div className="glass-card p-8 rounded-2xl h-full">
                <h3 className="text-xl font-semibold mb-6 text-portfolio-800">
                  {category.title}
                </h3>
                <div className="flex flex-wrap">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="chip transition-all duration-300 hover:bg-portfolio-accent hover:text-white"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
