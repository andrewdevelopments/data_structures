import { Router } from "express";
import stackConstructor from ".";

const stack = Router();

stack.get("/stack", stackConstructor);

export default stack;
