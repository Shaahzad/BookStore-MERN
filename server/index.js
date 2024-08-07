import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import BookRoutes from "./routes/index.js"




dotenv.config()
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

const app = express()

app.use(cors({
    origin: "https://book-store-mern-front-sand.vercel.app",
    credentials: true
}))


app.use(express.json())

app.use("/books", BookRoutes)

app.get("/", (req, res) => {
    res.send("Hello World")
})




app.listen(process.env.PORT, () => {
    connect();
    console.log(`Server is running on port ${process.env.PORT}`);
})



