import express from "express";
import mongoose from "mongoose";
import { dbConnect } from "./db/dbConfig.js";
import dotenv from "dotenv";
import userRoute from "./route/userRoute.js";

const app = express();
app.use(express.json());

dotenv.config();
app.use("/api/v1/user", userRoute);

app.use("/", (req, res) => {
  res.send("hello world hello hello ");
});

dbConnect();

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
