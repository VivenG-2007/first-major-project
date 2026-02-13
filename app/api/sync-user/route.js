import { NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs/server';
import connectDB from '@/lib/db';
import User from '@/models/user';

export async function POST(req) {
    try {
        // Connect to DB - prioritized the user's preferred local URL with a fallback
        await connectDB("mongodb://localhost:27017/getmeachai");

        // Get the authenticated state
        const { userId } = await auth();

        if (!userId) {
            console.error('sync-user: No userId found in auth()');
            return NextResponse.json({ error: 'Unauthorized - No valid session found' }, { status: 401 });
        }

        // Get the authenticated user from Clerk for more details
        const clerkUser = await currentUser();

        if (!clerkUser) {
            console.error('sync-user: No clerkUser found despite having userId');
            return NextResponse.json({ error: 'Unauthorized - Detailed user data unavailable' }, { status: 401 });
        }

        // Extract email and username from Clerk user
        const email = clerkUser.emailAddresses[0]?.emailAddress;
        const username = clerkUser.username || clerkUser.firstName?.toLowerCase() || 'user_' + userId.slice(-5);

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // Find user by email
        let currentuser = await User.findOne({ email });

        if (currentuser) {
            return NextResponse.json({
                message: 'User already exists',
                user: currentuser
            });
        }

        // Create new user if they don't exist
        const newUser = new User({
            email: email,
            username: username,
            profilepic: clerkUser.imageUrl,
        });

        await newUser.save();

        return NextResponse.json({
            message: 'User synced successfully',
            user: newUser
        });
    } catch (error) {
        console.error('Error syncing user:', error);
        return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
    }
}