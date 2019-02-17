class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    createNode(data) {
        return new Node(data);
    }

    view(logMsg = '') {
        let list = this.head;
        const linkedList = new Array;
        while(list !== null) {        
            linkedList.push(list.data);
            list = list.next;
        }
        // Showing LinkedList as an array
        console.log(logMsg);
        console.dir(this.head);
    }

    insertAtFirst(data) {
        const newNode = this.createNode(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtLast(data) {
        let list = this.head;
        const newNode = this.createNode(data);
        if (list === null) {
            this.head = newNode;
        } else {
            while(list.next !== null) {
                list = list.next;
            }
            list.next = newNode;
        }
    }

    insertAtMiddle(data, position) {
        const newNode = this.createNode(data);
        let list = this.head;
        if (this.head === null) {
            this.head = newNode;
        } else if (position >= this.getLength()) {
            this.insertAtLast(data);
        } else {
            let counter = 0;
            while (list !== null) {
                if (counter === position - 1) {
                    newNode.next = list.next;
                    list.next = newNode;
                }
                list = list.next;
                counter++;
            }
        }
    }

    getLength() {
        let size = 0, list = this.head;
        while (list !== null) {
            size++;
            list = list.next;
        }
        return size;
    }

    deleteAtFirst() {
        const list = this.head;
        if (list !== null) {
            if (list.next !== null) {
                this.head = list.next;
            } else {
                this.head = null;
            }
        }
    }

    deleteAtLast() {
        let prevList = this.head;
        let list = this.head.next;
        if (list === null) {
            this.head = null;
        } else {
            while(list.next !== null) {
                prevList = list;
                list = list.next;
            }
            prevList.next = null;
        }
    }

    deleteAtMiddle(position) {
        let list = this.head;
        const size = this.getLength();
        if (!this.head) {
            this.head = null;
        } else if (position >= size) {
            console.log('Invalid Position');
        } else if (position === size -1) {
            this.deleteAtLast();
        } else {
            let counter = 0;
            let deleteNode, nextnodePtr;
            while (list !== null) {
                if (counter === position - 1) {
                    deleteNode = list;
                }
                if (counter === position) {
                    deleteNode.next = list.next;
                }
                list = list.next;
                counter++;
            }
        }
    }

    delete() {
        this.head = null;
    }
}

const node = new Node(10);
console.log('Creating Sample Node -> ', node);

/**
 * LINKED LIST OPERATIONS
 * ---------------------------
 * 1. Creating an empty LL
 * 2. Inserting Node at Front, Last and Middle (given position)
 * 3. Showing LL as an array
 * 4. Deleting Node at Front, Last and Middle (given position)
 * */
//Creating an empty Linked List
const linkedList = new LinkedList();
linkedList.view('An empty LinkedList ->');

// Inserting nodes at different place
linkedList.insertAtFirst(26);
linkedList.insertAtFirst(20);
linkedList.insertAtFirst(10);
linkedList.insertAtFirst(5);
linkedList.insertAtFirst(1);
linkedList.view('\nInserted at First ->');

linkedList.insertAtLast(30);
linkedList.view('Inserted at Last ->');

linkedList.insertAtMiddle(23, 3);
linkedList.insertAtMiddle(27, 5);
linkedList.view('Inserted at Middle ->');

linkedList.view('\nAfter insertion -> ');

linkedList.deleteAtFirst();
linkedList.view('\nAfter Deletion at First -> ');

linkedList.deleteAtLast();
linkedList.view('After Deletion at Last -> ');


linkedList.deleteAtMiddle(20);
linkedList.view('After Deletion at invalid position -> ');


linkedList.deleteAtMiddle(3);
linkedList.view('After Deletion at Middle -> ');


linkedList.view('\nAfter deletion -> ');

linkedList.delete();
linkedList.view('\nAfter deleting a LinkedList -> ');

