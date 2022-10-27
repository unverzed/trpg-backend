import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./src/routes/authRouter";

const app = express();
app.use(express.json());
app.use(cors());
app.use(authRouter);
dotenv.config();


app.listen(process.env.PORT, () => console.log(`Server working on port ${process.env.PORT}`));