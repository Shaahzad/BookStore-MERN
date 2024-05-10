import { configDotenv } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import BookRoutes from "./routes/bookroutes.js"
import cors from "cors";




configDotenv();

const app = express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    
}))

app.use("/books", BookRoutes)




const connect = () => {
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Connected to Database");
        })
        .catch((err) => {
            console.log(err);
        });
};

app.listen(process.env.PORT, () => {
    connect();
    console.log(`Server is running on port ${process.env.PORT}`);
})



