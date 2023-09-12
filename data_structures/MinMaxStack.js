module.exports = class MinMaxStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
        this.maxStack = [];
    }

    push(value) {
        this.stack.push(value);

        if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(value);
        }

        if (this.maxStack.length === 0 || value >= this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.push(value);
        }
    }

    pop() {
        if (this.stack.length === 0) return undefined;

        const poppedValue = this.stack.pop();

        if (poppedValue === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }

        if (poppedValue === this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.pop();
        }

        return poppedValue;
    }

    getMin() {
        if (this.minStack.length === 0) return undefined;
        return this.minStack[this.minStack.length - 1];
    }

    getMax() {
        if (this.maxStack.length === 0) return undefined;
        return this.maxStack[this.maxStack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}
