import { Request, Response, Router } from "express";
import stackConstructor from "../Stack";

const stack = Router();

stack.get("/stack", stackConstructor);

export default stack;
