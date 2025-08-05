import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.router.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: process.env.CORS_URL,
  credentials: true,
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/auth", authRouter);
app.use("/api", userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
