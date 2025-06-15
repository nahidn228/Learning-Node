"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const todos_route_1 = require("./app/todos/todos.route");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
const userRouter = express_1.default.Router();
exports.app.use("/todos", todos_route_1.todosRouter);
exports.app.use("/user", userRouter);
const filePath = path_1.default.join(__dirname, "../../db/todo.json");
exports.app.get("/", (req, res) => {
    res.send("Welcome to Todos App");
});
exports.default = exports.app;
