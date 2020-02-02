class DoublyLinkedList {
    constructor(initialValues = []) {
        this.length = 0;
        this.first = null;
        this.last = null;

        for (const value of initialValues) {
            this.addLast(value);
        }
    }

    addLast(value) {
        const node = new Node(value, this.last);

        if (this.isEmpty()) {
            this.first = node;
            this.last = node;
            this.length++;

            return;
        }

        this.last.next = node;
        this.last = node;
        this.length++;
    }

    remove(node) {
        // assumes that the provided node is currently in the list
        if (this.length === 1) {
            this.first = null;
            this.last = null;
            this.length--;

            return;
        }

        if (node === this.first) {
            node.next.previous = null;
            this.first = node.next;
            this.length--;

            return;
        }

        if (node === this.last) {
            node.previous.next = null;
            this.last = node.previous;
            this.length--;

            return;
        }

        node.previous.next = node.next;
        node.next.previous = node.previous;
        this.length--;
    }

    isEmpty() {
        return this.length === 0;
    }
}

class Node {
    constructor(value, previous = null, next = null) {
        this.value = value;
        this.previous = previous;
        this.next = next;
    }
}

module.exports = DoublyLinkedList;
