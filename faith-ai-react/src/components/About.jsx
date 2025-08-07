import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Faith AI</h2>
            <p>
              Faith AI is a specialized artificial intelligence designed to serve
              the Christian community. Built with biblical principles at its
              core, our AI provides thoughtful, scripture-based responses to help
              believers grow in their faith journey.
            </p>
            <p>
              Whether you're preparing for a Bible study, seeking answers to
              theological questions, or looking for Christian perspective on
              life's challenges, Faith AI is here to guide you with wisdom
              rooted in God's Word.
            </p>
            <a href="#" className="primary-button">
              Try it out
            </a>
          </div>
          <div className="about-features">
            <div className="about-feature">
              <h4>✝ Scripture-Centered</h4>
              <p>
                All responses are grounded in biblical truth and Christian
                doctrine.
              </p>
            </div>
            <div className="about-feature">
              <h4>🎯 Accurate & Thoughtful</h4>
              <p>
                Carefully crafted responses that respect the depth of faith and
                Scripture.
              </p>
            </div>
            <div className="about-feature">
              <h4>📚 Comprehensive Knowledge</h4>
              <p>
                Extensive understanding of biblical texts, theology, and
                Christian history.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
