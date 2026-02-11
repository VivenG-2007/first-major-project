'use client';

import React from 'react';

const HomePage = () => {
  return (
    <div className="app-container">
      {/* Background Animation */}
      <div className="bg-animation"></div>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Get <span className="gradient-text">Funded</span><br />
              by Your Fans
            </h1>
            <p>
              Build deeper connections with your community. Turn your followers into supporters who fuel your creative journey. Get Me a Chai makes fan-funding simple, transparent, and rewarding.
            </p>
            <div className="cta-group">
              <button className="btn-primary">Start Creating</button>
              <button className="btn-secondary">See How It Works</button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <div className="stat-item">
                <div className="stat-number">$2.4M+</div>
                <div className="stat-label">Funded to Creators</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15K+</div>
                <div className="stat-label">Active Supporters</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Creator Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="section-header">
          <h2>Everything You Need to Thrive</h2>
          <p>Powerful tools designed to help you focus on what matters: creating amazing content</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Direct Support</h3>
            <p>Receive funding directly from your fans with no middleman. Keep more of what you earn with our transparent fee structure.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Goal Tracking</h3>
            <p>Set funding goals for specific projects and watch your community rally behind you. Transparent progress keeps everyone engaged.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌟</div>
            <h3>Exclusive Perks</h3>
            <p>Reward your supporters with exclusive content, early access, and special recognition. Build tiers that work for you.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Analytics Dashboard</h3>
            <p>Understand your funding patterns, supporter demographics, and content performance with detailed insights.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Payments</h3>
            <p>Bank-grade security for all transactions. Multiple payment methods supported for global accessibility.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Community Hub</h3>
            <p>Engage with your supporters through built-in messaging, updates, and exclusive community features.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Turn Passion into Income?</h2>
          <p>Join thousands of creators who are building sustainable careers through fan support. No credit card required to start.</p>
          <button className="btn-white">Launch Your Chai Today</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;