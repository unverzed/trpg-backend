import express from "express";
import "express-async-errors";
import cors from "cors";
import authRouter from "./src/routes/authRouter";
import errorHandler from "./src/middlewares/errorHandlerMiddleware";

const app = express();
app.use(express.json());
app.use(cors());
app.use(authRouter);
app.use(errorHandler)

export default app;