'use client'
import React from 'react'

import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from 'react'
import Link from 'next/link'

const DashboardPage = () => {
    const { isLoaded, isSignedIn, user } = useUser();

    // Derived state for user details
    const userName = user?.username || user?.firstName || user?.fullName;
    const email = user?.emailAddresses[0]?.emailAddress;

    React.useEffect(() => {
        if (isLoaded && isSignedIn && user) {
            const data = {
                name: userName,
                email: email,
            };

            fetch('/api/sync-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).catch(err => console.error('Failed to sync user:', err));
        }
    }, [isLoaded, isSignedIn, user, userName, email]);

    // Show loading state while Clerk initializes
    if (!isLoaded) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p className="loading-text">Preparing your dashboard...</p>
            </div>
        );
    }

    // Show sign-in prompt if user is not authenticated
    if (!isSignedIn) {
        return <div>Please sign in to view this page.</div>;
    }

    // Mock data for featured creators
    const featuredCreators = [
        {
            name: 'Alice Coder',
            username: 'alice-code',
            profileImage: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Alice',
            coverImage: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop',
            bio: 'Full-stack developer creating open source tools for the community.'
        },
        {
            name: 'Bob The Builder',
            username: 'bob-builder',
            profileImage: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Robert',
            coverImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
            bio: 'Building the future of web infrastructure, one brick at a time.'
        },
        {
            name: 'Charlie Designer',
            username: 'charlie-design',
            profileImage: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Charlie',
            coverImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
            bio: 'Designing user-centric interfaces and experiences.'
        }
    ];

    return (
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', minHeight: '100vh' }}>
            {/* Dashboard Header */}
            <div style={{ marginBottom: '3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Dashboard
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Welcome back, <strong>{userName}</strong>! Here's how your community is growing.</p>
            </div>

            {/* Stats Overview */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                {[
                    { label: 'Total Support', value: '$1,240', icon: '💰' },
                    { label: 'Supporters', value: '42', icon: '👥' },
                    { label: 'Chais Received', value: '248', icon: '☕' },
                    { label: 'Page Views', value: '1,205', icon: '📈' }
                ].map((stat, i) => (
                    <div key={i} className="profile-section" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ fontSize: '2rem' }}>{stat.icon}</div>
                        <div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '600' }}>{stat.label}</p>
                            <p style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dashboard Content Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem', alignItems: 'start' }}>
                {/* Recent Activity (Past Support) */}
                <section className="profile-section" style={{ minHeight: '400px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                            Recent Activity
                        </h2>
                        <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '600' }}>Recent 5</span>
                    </div>

                    <div className="supporters-list">
                        {[
                            { name: 'John Doe', amount: 15, message: 'Great content, keep it up!', date: '2 hours ago' },
                            { name: 'Jane Smith', amount: 5, message: 'Love the new video!', date: '5 hours ago' },
                            { name: 'Anonymous', amount: 50, message: 'Huge fan of your work.', date: '1 day ago' },
                            { name: 'Alex Johnson', amount: 10, message: '', date: '2 days ago' }
                        ].map((support, i) => (
                            <div key={i} className="supporter-card" style={{ marginBottom: '0.5rem' }}>
                                <div className="supporter-avatar">
                                    {support.name.charAt(0)}
                                </div>
                                <div className="supporter-info">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <p className="supporter-name">
                                            {support.name} <span className="supporter-amount">bought {Math.floor(support.amount / 5)} chais</span>
                                        </p>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{support.date}</span>
                                    </div>
                                    {support.message && <p className="supporter-message">"{support.message}"</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Profile Tips / Quick Links */}
                <section className="profile-section" style={{ minHeight: '400px' }}>
                    <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                            Profile Quick Links
                        </h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                            <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Your Public Profile</p>
                            <Link href={`/${userName}`} style={{ color: 'var(--primary)', fontSize: '0.9rem', wordBreak: 'break-all' }}>
                                get-me-a-chai.com/{userName}
                            </Link>
                        </div>
                        <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                            <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Share & Grow</p>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Share your link on Twitter or Instagram to reach more fans!</p>
                            <button className="btn-primary" style={{ marginTop: '0.75rem', width: 'auto', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                                Copy Link
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            {/* Featured Creators Section */}
            <section style={{ marginTop: '4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--text-primary)' }}>
                        Discover Creators
                    </h2>
                    <span style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer' }}>
                        View all →
                    </span>
                </div>

                <div className="creator-grid">
                    {featuredCreators.map((creator) => (
                        <Link key={creator.username} href={`/${creator.username}`} className="creator-card">
                            <div style={{ position: 'relative' }}>
                                <img src={creator.coverImage} alt={creator.name} className="creator-card-img" />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-30px',
                                    left: '1.5rem',
                                    padding: '4px',
                                    background: 'var(--bg-card)',
                                    borderRadius: '50%',
                                    width: '70px',
                                    height: '70px',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                }}>
                                    <img
                                        src={creator.profileImage}
                                        alt={creator.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            border: '2px solid var(--primary)'
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="creator-card-content" style={{ marginTop: '1.5rem' }}>
                                <h3 className="creator-card-name" style={{ marginBottom: '0.25rem' }}>{creator.name}</h3>
                                <p className="creator-card-username" style={{ marginBottom: '0.75rem' }}>@{creator.username}</p>
                                <p className="creator-card-bio">{creator.bio}</p>
                                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                    <span>☕ 120 supporters</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default DashboardPage