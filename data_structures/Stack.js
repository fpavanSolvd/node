module.exports = class Stack {

    #elements;

    constructor() {
        this.#elements = []
    }

    isEmpty() {
        return (this.#elements.length === 0);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty")
        }
        return this.#elements.pop()
    }

    push(newElement) {
        this.#elements.push(newElement);
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty")
        }
        return this.#elements[this.#elements.length - 1];
    }

    
}

