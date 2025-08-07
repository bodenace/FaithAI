import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Welcome to Faith AI</h1>
          <h2>Your Christian Faith Companion</h2>
          <p>
            Discover the wisdom of Scripture with our AI-powered assistant. Get
            answers to your biblical questions, enhance your Bible study, and
            explore faith with a Christian perspective.
          </p>
          <div className="hero-buttons">
            <a href="#" className="primary-button">
              Try it out
            </a>
            <a href="#features" className="secondary-button">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="faith-icon">✝</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
