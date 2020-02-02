const DoublyLinkedList = require("./doublyLinkedList");

function logResult(value, expected) {
    console.log(`${value === expected ? "SUCCESS" : "FAILURE"}, Output: ${value}`);
}

function main() {
    console.log("Doubly linked list tests");

    // constructor
    process.stdout.write("TEST 1: ");
    logResult(constructorBaseTest(), true);

    process.stdout.write("TEST 2: ");
    logResult(constructorTest(), true);

    // addLast
    process.stdout.write("TEST 3: ");
    logResult(addLastEmptyTest(), true);

    process.stdout.write("TEST 4: ");
    logResult(addLastLength1Test(), true);

    // remove
    process.stdout.write("TEST 5: ");
    logResult(removeBaseTest(), true);

    process.stdout.write("TEST 6: ");
    logResult(removeLength1Test(), true);

    process.stdout.write("TEST 7: ");
    logResult(removeFirstTest(), true);

    process.stdout.write("TEST 8: ");
    logResult(removeLastTest(), true);

    // isEmpty
    process.stdout.write("TEST 9: ");
    logResult(isEmptyTrueTest(), true);

    process.stdout.write("TEST 10: ");
    logResult(isEmptyFalseTest(), false);

    // Symbol.iterator
    process.stdout.write("TEST 11: ");
    logResult(symbolIteratorEmptyTest(), true);

    process.stdout.write("TEST 12: ");
    logResult(symbolIteratorTest(), true);
}

function constructorBaseTest() {
    const list = new DoublyLinkedList();
    return list.length === 0 && list.first === null && list.last === null;
}

function constructorTest() {
    const list = new DoublyLinkedList(["A", "B", "C"]);
    return list.length === 3 && list.first.value === "A" && list.last.value === "C";
}

function addLastEmptyTest() {
    const list = new DoublyLinkedList();
    list.addLast("Test");
    return list.length === 1 && list.first.value === "Test" && list.last.value === "Test";
}

function addLastLength1Test() {
    const list = new DoublyLinkedList(["A"]);
    list.addLast("B");
    return list.length === 2 && list.first.value === "A" && list.last.value === "B";
}

function removeBaseTest() {
    const list = new DoublyLinkedList(["A", "B", "C"]);
    const toRemove = list.first.next;
    list.remove(toRemove);
    return list.length === 2 && list.first.value === "A" && list.last.value === "C";
}

function removeLength1Test() {
    const list = new DoublyLinkedList(["A"]);
    const toRemove = list.first;
    list.remove(toRemove);
    return list.length === 0 && list.first === null && list.last === null;
}

function removeFirstTest() {
    const list = new DoublyLinkedList(["A", "B", "C"]);
    const toRemove = list.first;
    list.remove(toRemove);
    return list.length === 2 && list.first.value === "B" && list.last.value === "C";
}

function removeLastTest() {
    const list = new DoublyLinkedList(["A", "B", "C"]);
    const toRemove = list.last;
    list.remove(toRemove);
    return list.length === 2 && list.first.value === "A" && list.last.value === "B";
}

function isEmptyTrueTest() {
    const list = new DoublyLinkedList();
    return list.isEmpty();
}

function isEmptyFalseTest() {
    const list = new DoublyLinkedList(["A"]);
    return list.isEmpty();
}

function symbolIteratorEmptyTest() {
    const list = new DoublyLinkedList();
    for (const _ of list) {
        return false;
    }

    return true;
}

function symbolIteratorTest() {
    const values = ["A", "B", "C"];
    const list = new DoublyLinkedList(values);

    // Check the iterator returns the same values in the same order
    const nodes = Array.from(list);
    for (let i = 0; i < values.length; i++) {
        if (values[i] !== nodes[i].value) {
            return false;
        }
    }

    // Check that the iterator is iterable
    for (const _ of list) {
        return true;
    }

    return false;
}

main();
console.log();
