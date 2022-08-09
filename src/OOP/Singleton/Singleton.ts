import { RequestHandler } from "express";

/**
 * Singleton - Creational design pattern
 */
class Singleton {
    private static _instance: Singleton;

    /**
     * The singleton constructor should always be private to prevent
     * direct constructor calls with `new` operator
     */
    private constructor() {}

    /**
     * Private static method that controls the access to the singleton instance
     */
    public static instance() {
        if (!Singleton.instance) {
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    }
}

const singletonConstructor: RequestHandler = (request, response) => {
    response.send("Check application console");

    const instance1 = Singleton.instance();
    const instance2 = Singleton.instance();

    if (instance1 === instance2) {
        console.log(
            "Singleton works, both variables contain the same instance"
        );
    } else {
        console.log("Singleton failed, variables contains different instances");
    }
};
export default singletonConstructor;
