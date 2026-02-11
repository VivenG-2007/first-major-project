'use client';

import { SignUp } from "@clerk/nextjs";
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <Link href="/" className="auth-logo">
            <span className="auth-logo-text">Get Me a Chai</span>
          </Link>
          <h1 className="auth-title">Join the Community</h1>
          <p className="auth-subtitle">Start your journey with us today</p>
        </div>
        <div className="auth-clerk-wrapper">
          <SignUp routing="hash" />
        </div>
      </div>
    </div>
  );
}