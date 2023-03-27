import mongoose from 'mongoose'
import * as dotenv from "dotenv";
dotenv.config();
try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
}
