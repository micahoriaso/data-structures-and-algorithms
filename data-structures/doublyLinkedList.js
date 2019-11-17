class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
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
        
        if (this.size === 0) {
            this.tail = this.head
        } else {
            tempNode.previous = this.head
        }
        
        this.size++;
    }

    addLast = node => {

        this.size === 0 ? this.head = node : this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;

    }

    removeFirst = () => {

        if (this.size === 0) return;
        this.head = this.head.next;
        this.size--;

        if (this.size === 0) {
            this.tail = null;
        } else {
            this.head.previous = null;
        }
 
    }

    removeLast = () => {
        if (this.size === 0) return;
        if (this.size === 1) this.head = this.tail = null;
        else {
            this.tail = this.tail.previous;
            this.tail.next =  null;
        }
        this.size--;

    }

    enumarate = () => {

        if (this.size === 0) return;

        this.current = this.head;
        const nodes = [];

        while (this.current) {
            nodes.push(this.current.value);
            this.current = this.current.next;
        }

        return nodes.join(' <===> ');

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