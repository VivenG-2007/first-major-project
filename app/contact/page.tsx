'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      detail: 'support@getmeachai.com',
      description: 'We typically respond within 24 hours'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      detail: 'Available 9am-6pm EST',
      description: 'Get instant help from our support team'
    },
    {
      icon: '📍',
      title: 'Office',
      detail: 'San Francisco, CA',
      description: 'Visit us at our headquarters'
    },
    {
      icon: '🐦',
      title: 'Social Media',
      detail: '@getmeachai',
      description: 'Follow us for updates and news'
    }
  ];

  const faqs = [
    {
      question: 'How do I start accepting support?',
      answer: 'Simply sign up, complete your profile, and share your page with your community. You can start receiving support immediately!'
    },
    {
      question: 'What are the fees?',
      answer: 'We charge a small platform fee of 5% plus payment processing fees. We believe in transparent pricing with no hidden costs.'
    },
    {
      question: 'How do payouts work?',
      answer: 'Payouts are processed weekly to your connected bank account or PayPal. You can track all your earnings in real-time from your dashboard.'
    }
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="contact-hero-subtitle">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="contact-methods-grid">
          {contactMethods.map((method, index) => (
            <div key={index} className="contact-method-card">
              <div className="contact-method-icon">{method.icon}</div>
              <h3 className="contact-method-title">{method.title}</h3>
              <p className="contact-method-detail">{method.detail}</p>
              <p className="contact-method-description">{method.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-wrapper">
            <h2 className="contact-form-title">Send Us a Message</h2>
            <p className="contact-form-subtitle">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="contact-success-message">
                <div className="contact-success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-input-row">
                  <div className="contact-input-group">
                    <label className="contact-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="contact-input"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="contact-input-group">
                    <label className="contact-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="contact-input"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact-input-group">
                  <label className="contact-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="contact-input"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="contact-input-group">
                  <label className="contact-label">Message</label>
                  <textarea
                    name="message"
                    className="contact-textarea"
                    placeholder="Tell us how we can help..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <button type="submit" className="contact-submit-btn">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* FAQ Sidebar */}
          <div className="contact-faq-sidebar">
            <h3 className="contact-faq-title">Quick Answers</h3>
            <div className="contact-faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="contact-faq-item">
                  <h4 className="contact-faq-question">{faq.question}</h4>
                  <p className="contact-faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
            <a href="/help" className="contact-faq-link">
              View All FAQs →
            </a>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="contact-hours">
        <div className="contact-hours-content">
          <h2 className="contact-hours-title">Support Hours</h2>
          <div className="contact-hours-grid">
            <div className="contact-hours-item">
              <span className="contact-hours-day">Monday - Friday</span>
              <span className="contact-hours-time">9:00 AM - 6:00 PM EST</span>
            </div>
            <div className="contact-hours-item">
              <span className="contact-hours-day">Saturday</span>
              <span className="contact-hours-time">10:00 AM - 4:00 PM EST</span>
            </div>
            <div className="contact-hours-item">
              <span className="contact-hours-day">Sunday</span>
              <span className="contact-hours-time">Closed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;