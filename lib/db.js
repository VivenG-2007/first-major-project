import mongoose from 'mongoose';

const connectDB = async (url) => {
    if (mongoose.connection.readyState >= 1) return;

    // Fallback to local if no URL is provided or use environment variable
    const uri = url || process.env.MONGODB_URI || "mongodb://localhost:27017/getmeachai";

    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
};

export default connectDB;
