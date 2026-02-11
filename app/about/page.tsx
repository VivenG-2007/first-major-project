'use client';

import React from 'react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '👩‍💼',
      bio: 'Passionate about empowering creators and building sustainable communities.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Product',
      image: '👨‍💻',
      bio: 'Focused on creating intuitive experiences that creators love.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Community',
      image: '👩‍🎨',
      bio: 'Dedicated to fostering meaningful connections between creators and fans.'
    },
    {
      name: 'David Kim',
      role: 'CTO',
      image: '👨‍🔧',
      bio: 'Building robust infrastructure to support creator dreams at scale.'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Creator First',
      description: 'Every decision we make puts creators and their needs at the center.'
    },
    {
      icon: '🤝',
      title: 'Transparency',
      description: 'Clear pricing, honest communication, and no hidden surprises.'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Building tools that help creators build long-term sustainable careers.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Constantly evolving to meet the changing needs of the creator economy.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Creators' },
    { number: '$10M+', label: 'Funded to Date' },
    { number: '2M+', label: 'Supporters' },
    { number: '150+', label: 'Countries' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">
            Empowering Creators to <span className="gradient-text">Thrive</span>
          </h1>
          <p className="about-hero-subtitle">
            We're building the future of creator funding, one chai at a time. Our mission is to help creators turn their passion into sustainable careers through direct fan support.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="about-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="about-stat-item">
              <div className="about-stat-number">{stat.number}</div>
              <div className="about-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="about-story-content">
          <h2 className="about-section-title">Our Story</h2>
          <div className="about-story-text">
            <p>
              Get Me a Chai was born from a simple observation: creators pour their hearts into their work, but traditional monetization methods often fall short. We saw talented artists, writers, developers, and educators struggling to make ends meet while creating incredible value for their communities.
            </p>
            <p>
              In 2020, we set out to change that. We built a platform where creators could connect directly with their biggest fans and receive support that actually matters. No algorithms deciding who gets seen. No middlemen taking massive cuts. Just creators doing what they love, supported by people who appreciate their work.
            </p>
            <p>
              Today, we're proud to support over 50,000 creators worldwide, helping them build sustainable careers doing what they love. But we're just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <h2 className="about-section-title">Our Values</h2>
        <div className="about-values-grid">
          {values.map((value, index) => (
            <div key={index} className="about-value-card">
              <div className="about-value-icon">{value.icon}</div>
              <h3 className="about-value-title">{value.title}</h3>
              <p className="about-value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2 className="about-section-title">Meet Our Team</h2>
        <p className="about-team-subtitle">
          We're a diverse team of creators, developers, and dreamers united by one goal: empowering the creator economy.
        </p>
        <div className="about-team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="about-team-card">
              <div className="about-team-image">{member.image}</div>
              <h3 className="about-team-name">{member.name}</h3>
              <p className="about-team-role">{member.role}</p>
              <p className="about-team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta-content">
          <h2 className="about-cta-title">Join Our Community</h2>
          <p className="about-cta-text">
            Whether you're a creator looking to build your community or a fan wanting to support your favorite creators, there's a place for you here.
          </p>
          <div className="about-cta-buttons">
            <button className="btn-primary">Start Creating</button>
            <button className="btn-secondary">Explore Creators</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;