import { RequestHandler } from "express";

interface IProduct {
    id: string;
    name: string;
    price?: number;
}

abstract class Product {
    abstract addProduct(product: IProduct): IProduct;
    getProducts?(): IProduct | undefined;
}

class Shop extends Product {
    private static _products: IProduct | undefined;

    constructor() {
        super();
    }
    public addProduct(product: IProduct): IProduct {
        Shop._products = product;
        return product;
    }
    public getProducts(): IProduct | undefined {
        return Shop._products;
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
    console.log(shop.getProducts());
};
export default abstractConstructor;
