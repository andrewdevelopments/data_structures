import { Router } from "express";
import builderConstructor from "./Builder";

const builder = Router();

builder.get("/data-structures/builder", builderConstructor);

export default builder;
