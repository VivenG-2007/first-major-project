import React from 'react';
import SupportForm from './supportform';

// Mock data fetch function (to be replaced with database call)
const fetchCreatorData = async (username: string) => {
    await new Promise(resolve => setTimeout(resolve, 50));

    const mockCreators: Record<string, any> = {
        'alice-code': {
            name: 'Alice Coder',
            username: 'alice-code',
            profileImage: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Alice',
            coverImage: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop',
            bio: 'Full-stack developer creating open source tools for the community.',
            supporters: [
                { name: 'Bob', amount: 50, message: 'Keep up the great work!' },
                { name: 'Charlie', amount: 20, message: 'Love your tutorials.' },
                { name: 'Dave', amount: 100, message: 'Huge fan!' },
            ]
        },
        'bob-builder': {
            name: 'Bob The Builder',
            username: 'bob-builder',
            profileImage: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Robert',
            coverImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
            bio: 'Building the future of web infrastructure, one brick at a time.',
            supporters: [
                { name: 'Alice', amount: 25, message: 'Great project!' },
                { name: 'Eve', amount: 10, message: 'Good luck.' },
            ]
        },
        'charlie-design': {
            name: 'Charlie Designer',
            username: 'charlie-design',
            profileImage: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Charlie',
            coverImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
            bio: 'Designing user-centric interfaces and experiences.',
            supporters: []
        }
    };

    return mockCreators[username] || {
        name: username,
        username: username,
        profileImage: `https://api.dicebear.com/9.x/avataaars/svg?seed=${username}`,
        coverImage: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop',
        bio: 'Creator on Get Me a Chai.',
        supporters: []
    };
};

const ProfilePage = async ({ params }: { params: Promise<{ username: string }> }) => {
    const { username } = await params;
    const creator = await fetchCreatorData(username);

    return (
        <div className="profile-page">
            {/* Cover Image */}
            <div className="profile-cover">
                <img src={creator.coverImage} alt="Cover" className="cover-img" />
            </div>

            <div className="profile-content">
                {/* Profile Info */}
                <div className="profile-header">
                    <div className="profile-avatar-wrapper">
                        <img src={creator.profileImage} alt={creator.name} className="profile-avatar" />
                    </div>
                    <h1 className="profile-name">{creator.name}</h1>
                    <p className="profile-username">@{creator.username}</p>
                    <p className="profile-bio">{creator.bio}</p>
                </div>

                {/* Supporters Section */}
                <div className="profile-section">
                    <h2 className="section-title">Supporters ({creator.supporters.length})</h2>

                    {creator.supporters.length > 0 ? (
                        <div className="supporters-list">
                            {creator.supporters.map((supporter: any, index: number) => (
                                <div key={index} className="supporter-card">
                                    <div className="supporter-avatar">
                                        {supporter.name.charAt(0)}
                                    </div>
                                    <div className="supporter-info">
                                        <p className="supporter-name">
                                            {supporter.name} <span className="supporter-amount">bought {Math.floor(supporter.amount / 5)} chais</span>
                                        </p>
                                        <p className="supporter-message">"{supporter.message}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state">
                            <p>Be the first to support {creator.name}!</p>
                        </div>
                    )}
                </div>

                {/* Payment/Support Section */}
                <SupportForm creatorName={creator.name} />
            </div>
        </div>
    );
};

export default ProfilePage;