import { Router } from "express";
import singletonConstructor from "./Singleton";

const singleton = Router();

singleton.get("/data-structures/singleton", singletonConstructor);

export default singleton;
