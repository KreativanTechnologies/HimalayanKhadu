import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import cors from "cors"

import authRouter from './routes/auth/auth-routes.js'

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://kreativantech:t88BWPCp758RNUmn@ktbackends.x2yy7.mongodb.net/HimalayanKhadu"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    // origin: process.env.CLIENT_BASE_URL,
    origin: "http://localhost:3000/",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.use("/api/auth", authRouter);

app.listen(PORT, () => console.log(`Server is now running on port : ${PORT}`));

app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err.message);
  res.status(500).json({
    message: "Internal server error",
    error: err.message,
  });
});
