import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    email: { type: String, required: true, unique: true },
    profilepic: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;