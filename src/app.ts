import express, { Express, Request, Response } from "express";
import stack from "./routes";

const app: Express = express();

/**
 * Stack data structure
 * @type typescript
 */
app.use(stack);

app.listen(3000);
