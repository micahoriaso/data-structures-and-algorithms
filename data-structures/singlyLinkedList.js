class Node {
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addFirst = node => {

        const tempNode = this.head;

        this.head = node;
        this.head.next = tempNode;
        this.size ++;

        if (this.size === 1) this.tail = this.head;

    }

    addLast = node => {

        this.size === 0 ? this.head = node : this.tail.next = node;
        this.tail = node;

    }

    removeFirst = () => {

        if (this.size === 0) return;
        this.head = this.head.next;
        this.size --;
        if (this.size === 0) this.tail = null;

    }

    removeLast = () => {
        if (this.size === 0) return;
        if (this.size === 1) this.head = this.tail = null 
        else {
            let current = this.head;
            while (current.next !== this.tail) {
                current = current.next;
            }

            current.next = null;
            this.tail = current;
        }
        this.size --;

    }

    enumarate = () => {

        if (this.size === 0) return;

        this.current = this.head;
        const nodes = [];

        while (this.current) {
            nodes.push(this.current.value);
            this.current = this.current.next;
        }

        return nodes.join(' ===> ');

    }

}

const node1 = new Node(10);
const node2 = new Node(11);
const node3 = new Node(12)

const myList = new LinkedList();

myList.addFirst(node1);
myList.addLast(node2);
myList.addFirst(node3);

myList.removeFirst();

console.log(myList.enumarate());