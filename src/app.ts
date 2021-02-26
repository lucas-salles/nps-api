import express from "express";
import cors from "cors";
import "express-async-errors";
import "reflect-metadata";
import createConnection from "./database";
import { router } from "./routes";
import errorHandler from "./errors/Handler";

createConnection();
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

export { app };
