/**
 * @description Push - Add item to the top of the stack
 * @description Pop - Remove item from the stack
 * @description Peek(optional) - Return the top of the stack without removing it
 * @description Storage - Return all stacked items
 * @description Capacity(optional) - Maximum of items a stack can fit
 */

import { RequestHandler } from "express";

interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
}

class Stack<T> implements IStack<T> {
    private storage: T[] = [];

    constructor(private capacity: number = Infinity) {}

    push(item: T): void {
        if (this.size() === this.capacity) {
            throw Error(
                "Stack reached max capacity, you cannot add any items."
            );
        }
        this.storage.push(item);
    }

    pop(): T | undefined {
        return this.storage.pop();
    }

    peek(): T | undefined {
        return this.storage[this.size() - 1];
    }

    size(): number {
        return this.storage.length;
    }
}

const stack = new Stack<string>(4);

stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

console.log(stack.size());
console.log(stack.peek());

stack.pop();

console.log(stack.size());
console.log(stack.peek());

console.log(stack);

const stackConstructor: RequestHandler = (request, response) => {
    response.send("Check application console");
};
export default stackConstructor;
