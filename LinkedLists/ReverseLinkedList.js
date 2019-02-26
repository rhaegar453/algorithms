class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        let newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    printList() {
        let arr = [];
        let currentNode = this.head;
        while (currentNode.next != null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        arr.push(this.tail.value);
        console.log(arr);
    }
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        let newNode = new Node(value);
        let leader = this.traverseLeader(index - 1);
        let holderNode = leader.next;
        leader.next = newNode;
        newNode.next = holderNode;
        this.printList();
    }

    traverseLeader(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter != index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.printList();
    }
}


let x = new LinkedList(12);

x.append(14);
x.append(16);
x.insert(1, 11);

x.reverse();
 
