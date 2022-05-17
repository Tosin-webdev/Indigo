import express from "express";
import connectDB from "./database/connection.js";
import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import path from "path";
import cors from "cors";

dotenv.config({ path: ".env" });

const port = 2000;

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

connectDB();

app.use("/posts", postRoutes);

app.use("/user", userRoutes);
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
