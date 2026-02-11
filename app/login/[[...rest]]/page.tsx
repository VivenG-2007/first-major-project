'use client';

import { SignIn } from "@clerk/nextjs";
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <Link href="/" className="auth-logo">
            <span className="auth-logo-text">Get Me a Chai</span>
          </Link>
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to continue supporting your favorite creators</p>
        </div>
        <div className="auth-clerk-wrapper">
          <SignIn />
        </div>
      </div>
    </div>
  );
}