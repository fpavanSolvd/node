class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

module.exports = class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (!this.root) {
            this.root = new TreeNode(value);
        } else {
            this.#insertRecursive(this.root, value);
        }
    }

    #insertRecursive(node, value) {
        if (value < node.value) {
            if (node.left === null) {
                node.left = new TreeNode(value);
            } else {
                this.#insertRecursive(node.left, value);
            }
        } else {
            if (node.right === null) {
                node.right = new TreeNode(value);
            } else {
                this.#insertRecursive(node.right, value);
            }
        }
    }

    search(value) {
        return this.#searchRecursive(this.root, value);
    }

    #searchRecursive(node, value) {
        if (node === null) {
            return false;
        }
        if (node.value === value) {
            return true;
        } else if (value < node.value) {
            return this.#searchRecursive(node.left, value);
        } else {
            return this.#searchRecursive(node.right, value);
        }
    }
}
