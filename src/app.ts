import express, { type Application,type Response } from "express";
import cors from 'cors';
import router from "./route/routes";
import errorMiddleware from "./middleware/error.middleware";
import AppError from "./utils/AppError";

const app:Application = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


app.get("/", (_, res :Response) => {
  res.json({
    status: "OK",
    message: "Server Health is OK",
    timestamp: new Date().toISOString(),
  });
});

// API routes for admin
app.use('/api/v1',router);

// Public route
app.use('/public',router);


app.use(errorMiddleware)

export default app;
