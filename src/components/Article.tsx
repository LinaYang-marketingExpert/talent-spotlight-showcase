import React from "react";

const Article: React.FC = () => {
  return (
    <section id="article" className="py-20 bg-gray-50 fade-in-section">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-portfolio-800 mb-12">
          Featured Article
        </h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-portfolio-700 mb-4">
            Do You Recommend Blockchain or AI?
          </h3>
          <p className="text-gray-600 mb-6">
            {/* Explore my insights on the comparison between Blockchain and AI technologies,
            their applications, and future prospects in the tech industry. */}
            The enormous potential of blockchain and AI is accelerating the development of the world even more.
            So what will dominate the future we imagine? ...
          </p>
          <a
            href="https://medium.com/@kotefonuqen020/do-you-recommend-blockchain-or-ai-55eaea10ac93"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-portfolio-600 text-white px-6 py-3 rounded-lg hover:bg-portfolio-700 transition-colors duration-300"
          >
            Read on Medium
          </a>
        </div>
      </div>
    </section>
  );
};

export default Article; 