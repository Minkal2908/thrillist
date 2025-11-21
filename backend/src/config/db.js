import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://kumarminkal61_db_user:GBVS6KOsJJMdcc5A@cluster0.bcoovir.mongodb.net/BlogApp?retryWrites=true&w=majority&appName=Cluster0'
        );
        console.log("Connected to Backend !!");
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
    }
}
