import 'dotenv/config';
import type {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import AppError from "../utils/AppError"; // adjust path as needed

const errorMiddleware: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode =
    err instanceof AppError ? err.statusCode : err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  console.error(`[Error] ${req.method} ${req.url}`, err);

  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

export default errorMiddleware;
