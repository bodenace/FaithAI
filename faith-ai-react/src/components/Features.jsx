import React from 'react';

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">How Faith AI Can Help You</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📖</div>
            <h3>Bible Study Assistant</h3>
            <p>
              Deepen your understanding of Scripture with AI-powered insights
              and cross-references.
            </p>
            <a href="#" className="feature-button">
              Try it out
            </a>
          </div>
          <div className="feature-card">
            <div className="feature-icon">❓</div>
            <h3>Scriptural Questions</h3>
            <p>
              Get thoughtful answers to your biblical questions rooted in
              Christian theology.
            </p>
            <a href="#" className="feature-button">
              Try it out
            </a>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🙏</div>
            <h3>Faith-Based Guidance</h3>
            <p>
              Receive wisdom and guidance on life's questions through a
              Christian worldview.
            </p>
            <a href="#" className="feature-button">
              Try it out
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
