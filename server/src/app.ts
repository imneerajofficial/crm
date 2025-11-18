import express, { Request, Response } from "express";

import cors from "cors";
import { connectDB } from "./config/connectDatabase";
import useUsers from "./routes/user.route";

const app = express();

connectDB();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api/v1/users", useUsers);
export default app;
