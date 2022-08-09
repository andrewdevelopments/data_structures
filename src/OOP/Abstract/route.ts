import { Router } from "express";
import abstractConstructor from "./Abstract";

const abstract = Router();

abstract.get("/data-structures/abstract", abstractConstructor);

export default abstract;
