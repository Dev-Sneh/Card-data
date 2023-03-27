import mongoose from 'mongoose'
import * as dotenv from "dotenv";


dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, () => {
    console.log("DB Connected")
}); 