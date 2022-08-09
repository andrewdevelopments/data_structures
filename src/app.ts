import express, { Express, Request, Response } from "express";
import stack from "./DataStructures/Stack/route";
import abstract from "./OOP/Abstract/route";
import singleton from "./OOP/Singleton/route";

const app: Express = express();

/**
 * Stack data structure
 * @type typescript
 */
app.use(stack);

/**
 * Singleton pattern
 * @type typescript
 */
app.use(singleton);
app.use(abstract);

app.listen(3000);
