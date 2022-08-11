import { RequestHandler } from "express";

interface IComputerParts {
    keyboard(): void;
    monitor(): void;
}

const builderConstructor: RequestHandler = (request, response) => {
    response.send("Check application console");
};
export default builderConstructor;
