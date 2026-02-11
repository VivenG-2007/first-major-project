'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useUser, SignOutButton } from "@clerk/nextjs";

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isSignedIn, user } = useUser();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link href="/" className="navbar-logo">
        <div className="navbar-logo-icon">
          <svg
            viewBox="0 0 24 24"
            width="40"
            height="40"
            fill="none"
          >
            {/* Cup */}
            <path
              d="M4 8h12v9c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              style={{ color: 'var(--primary)' }}
            />
            {/* Handle */}
            <path
              d="M16 10h1c1.1 0 2 .9 2 2v1c0 1.1-.9 2-2 2h-1"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              style={{ color: 'var(--primary)' }}
            />
            {/* Steam */}
            <path
              d="M7 4c0 1-1 2-1 3M10 3c0 1-1 2-1 3M13 4c0 1-1 2-1 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.8"
              style={{ color: 'var(--secondary)', animation: 'pulse 2s infinite' }}
            />
          </svg>
        </div>

        <span className="navbar-logo-text">
          Get Me a Chai
        </span>
      </Link>

      {/* Desktop Menu */}
      <ul className="navbar-menu">
        <li>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            style={{
              padding: '0.625rem',
              borderRadius: '50%',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              color: 'var(--text-secondary)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = theme === 'light'
                ? 'rgba(0, 0, 0, 0.05)'
                : 'rgba(255, 255, 255, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              // Moon Icon
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              // Sun Icon
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>
        </li>

        <li className="navbar-menu-item">
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
        </li>
        <li className="navbar-menu-item">
          <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</Link>
        </li>
        <li className="navbar-menu-item">
          <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
        </li>

        {isSignedIn ? (
          <>
            <li className="navbar-menu-item" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              {user.primaryEmailAddress?.emailAddress}
            </li>
            <li>
              <SignOutButton>
                <button
                  className="navbar-signup-btn"
                  style={{ border: 'none', cursor: 'pointer' }}
                >
                  Sign Out
                </button>
              </SignOutButton>
            </li>
          </>
        ) : (
          <>
            <li className="navbar-menu-item">
              <Link href="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="navbar-signup-btn"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--bg-primary)',
          borderBottom: '1px solid var(--border-color)',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}>
          <Link href="/" className="navbar-menu-item" style={{ textDecoration: 'none' }}>Home</Link>
          <Link href="/about" className="navbar-menu-item" style={{ textDecoration: 'none' }}>About Us</Link>
          <Link href="/contact" className="navbar-menu-item" style={{ textDecoration: 'none' }}>Contact</Link>

          {isSignedIn ? (
            <>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', padding: '0.5rem 0' }}>
                Signed in as {user.primaryEmailAddress?.emailAddress}
              </div>
              <SignOutButton>
                <button
                  className="navbar-signup-btn"
                  style={{ border: 'none', cursor: 'pointer', display: 'block', textAlign: 'center' }}
                >
                  Sign Out
                </button>
              </SignOutButton>
            </>
          ) : (
            <>
              <Link href="/login" className="navbar-menu-item" style={{ textDecoration: 'none' }}>Login</Link>
              <Link
                href="/signup"
                className="navbar-signup-btn"
                style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
              >
                Sign Up
              </Link>
            </>
          )}

          <button
            onClick={toggleTheme}
            style={{
              padding: '0.75rem',
              borderRadius: '50px',
              background: 'transparent',
              border: '2px solid var(--border-color)',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              fontWeight: '500'
            }}
          >
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;