import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { todosRouter } from "./app/todos/todos.route";
export const app: Application = express();
app.use(express.json());


const userRouter = express.Router();

app.use("/todos", todosRouter);
app.use("/user", userRouter);

const filePath = path.join(__dirname, "../../db/todo.json");

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Todos App");
});

export default app;
