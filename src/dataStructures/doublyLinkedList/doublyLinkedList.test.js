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

main();
console.log();
