import express from "express";
import mongoose from "mongoose";
import { dbConnect } from "./db/dbConfig.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();
app.use("/", (req, res) => {
  res.send("hello world hello hello ");
});

dbConnect();

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
