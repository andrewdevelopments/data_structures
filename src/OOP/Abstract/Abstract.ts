import { RequestHandler } from "express";

interface IProduct {
    id: string;
    name: string;
    price?: number;
}

abstract class Product {
    abstract addProduct(product: IProduct): IProduct;
    getProducts?(): [] | unknown;
}

class Shop extends Product {
    constructor() {
        super();
    }
    public addProduct(product: IProduct): IProduct {
        return product;
    }
}

const abstractConstructor: RequestHandler = (request, response) => {
    response.send("Check application console");

    const shop = new Shop();

    shop.addProduct({
        id: "1",
        name: "First product",
        price: 10,
    });
    shop.addProduct({
        id: "2",
        name: "Second product",
        price: 20,
    });

    console.log(shop);
};
export default abstractConstructor;
