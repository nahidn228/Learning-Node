import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";

export const todosRouter = express.Router();
const filePath = path.join(__dirname, "../../../db/todo.json");

todosRouter.get("/", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  console.log(data);

  res.json({
    message: "from todos router",
    data,
  });
});

todosRouter.post("/create-todo", (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);

  res.send(data);
});
