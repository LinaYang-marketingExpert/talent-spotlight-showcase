
import React from "react";
import FadeIn from "./animations/FadeIn";

interface WorkExperience {
  title: string;
  period: string;
  description: string;
  results: string;
}

const experiences: WorkExperience[] = [
  {
    title: "Blockchain & Smart Contracts - NFT-based Marketplace",
    period: "January 2024 - June 2024",
    description: "Developed a decentralized NFT marketplace utilizing blockchain technology and smart contracts on the Ethereum network. The platform allowed users to mint, buy, and sell digital assets securely with a transparent and decentralized process.",
    results: "Successfully deployed the platform with over 10,000 NFTs minted and traded within the first 3 months. The project resulted in a 15% increase in transaction volume and fostered community engagement through decentralized governance."
  },
  {
    title: "Technology & Marketing - Product Launch Campaign for SaaS Application",
    period: "October 2023 - December 2023",
    description: "Collaborated with the marketing team to develop and launch a SaaS product targeted at small businesses. My role involved ensuring the product's technical features aligned with customer needs and market expectations, and also contributed to the digital marketing strategy (SEO, social media, email campaigns).",
    results: "The product launch exceeded subscription targets by 20% in the first quarter, with particularly strong performance in the small business segment."
  },
  {
    title: "AI-Driven Solutions - AI-powered Chatbot for Customer Support",
    period: "March 2023 - September 2023",
    description: "Led the development of an AI-driven chatbot that utilized Natural Language Processing (NLP) to automate customer support tasks. The chatbot was integrated into an e-commerce platform to handle inquiries, product recommendations, and order tracking.",
    results: "Reduced customer support response time by 60% and improved customer satisfaction ratings by 25%. The solution handled 70% of routine inquiries, allowing the support team to focus on more complex customer needs."
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-portfolio-100">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="section-title">Work Experience</h2>
        </FadeIn>

        <div className="mt-12">
          <div className="timeline">
            {experiences.map((exp, index) => (
              <FadeIn key={index} delay={0.2 * index}>
                <div className="timeline-item">
                  <div className="glass-card p-6 rounded-xl shadow-sm mb-6">
                    <h3 className="text-xl font-semibold text-portfolio-800 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-portfolio-500 mb-4">{exp.period}</p>
                    <p className="text-portfolio-700 mb-4">{exp.description}</p>
                    <div className="bg-portfolio-200 p-4 rounded-lg">
                      <p className="text-portfolio-700 font-medium">
                        <span className="text-portfolio-accent font-semibold">Result: </span>
                        {exp.results}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
