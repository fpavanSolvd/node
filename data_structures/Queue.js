module.exports = class Queue {

    #elements;

    constructor() {
        this.#elements = [];
    }

    enqueue(item) {
        this.#elements.push(item);
    }

    dequeue() {
        if (!this.isEmpty()) {
            return this.#elements.shift();
        }
        throw new Error("Queue is empty");
        
    }

    peek() {
        if (!this.isEmpty()) {
            return this.#elements[0];
        }
        throw new Error("Queue is empty");
        
    }

    isEmpty() {
        return this.#elements.length === 0;
    }
}



