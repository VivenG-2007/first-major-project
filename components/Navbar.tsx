'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useUser, SignOutButton } from "@clerk/nextjs";

const Navbar = () => {
  const [theme, setTheme] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isSignedIn, user } = useUser();

  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = storedTheme || systemTheme;

    setTheme(initialTheme);

    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const homeLink = isSignedIn ? '/dashboard' : '/';

  // Prevent hydration mismatch by returning null or a skeleton until mounted
  if (!mounted) {
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
      </nav>
    );
  }

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
            className="theme-toggle-btn"
            onClick={toggleTheme}
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
          <Link href={homeLink}>Home</Link>
        </li>
        <li className="navbar-menu-item">
          <Link href="/about">About Us</Link>
        </li>
        <li className="navbar-menu-item">
          <Link href="/contact">Contact</Link>
        </li>

        {isSignedIn ? (
          <>
            <li className="navbar-menu-item navbar-user-email">
              {user.primaryEmailAddress?.emailAddress}
            </li>
            <li>
              <SignOutButton redirectUrl="/">
                <button
                  className="navbar-signup-btn"
                >
                  Sign Out
                </button>
              </SignOutButton>
            </li>
          </>
        ) : (
          <>
            <li className="navbar-menu-item">
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="navbar-signup-btn"
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
        <div className="mobile-menu-dropdown">
          <Link href={homeLink} className="mobile-menu-item">Home</Link>
          <Link href="/about" className="mobile-menu-item">About Us</Link>
          <Link href="/contact" className="mobile-menu-item">Contact</Link>

          {isSignedIn ? (
            <>
              <div className="mobile-user-info">
                Signed in as {user.primaryEmailAddress?.emailAddress}
              </div>
              <SignOutButton redirectUrl="/">
                <button
                  className="sign-out-btn"
                >
                  Sign Out
                </button>
              </SignOutButton>
            </>
          ) : (
            <>
              <Link href="/login" className="mobile-menu-item">Login</Link>
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
            className="mobile-theme-toggle"
          >
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;