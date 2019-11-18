class Node {
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    /*
        The head, tail and size are properties of the linked list not the node chain.
        The head and tail simply point to / are assigned a node in the node chain.
        If the node chain is empty, the head and tail are assigned NULL because no node exists.
    */
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
        
    /*
        case 1
        head ===> null ===> tail (null)
        head ===> | 3 | ===> tail (null)

        case 2
        head ===> | 3 | ===> tail (null)
        head ===> | 2 | ===> | 3 | ===> tail (null)
    */
    addFirst = node => {

        const tempNode = this.head;

        this.head = node;
        this.head.next = tempNode;
        this.size ++;

        if (this.size === 1) this.tail = this.head;

    }

    /*
        case 1
        head ===> null ===> tail (null)
        head ===> | 3 | ===> tail (null)

        case 2
        head ===> | 3 | ===> tail (null)
        head ===> | 3 | ===> | 2 | ===> tail (null)
    */
    addLast = node => {

        this.size === 0 ? this.head = node : this.tail.next = node;
        this.tail = node;
        this.size++;

    }

    /*
        case 1
        head ===> null ===> tail (null)

        case 2
        head ===> | 3 | ===> tail (null)
        head ===> null ===> tail (null)

        case 3
        head ===> | 2 | ===> | 3 | ===> tail (null)
        head ===> | 3 | ===> tail (null)
    */
    removeFirst = () => {

        if (this.size === 0) return;
        this.head = this.head.next;
        this.size --;
        if (this.size === 0) this.tail = null;

    }

    /*
        case 1
        head ===> null ===> tail (null)

        case 2
        head ===> | 3 | ===> tail (null)
        head ===> null ===> tail (null)

        case 3
        head ===> | 2 | ===> | 3 | ===> tail (null)
        head ===> | 2 | ===> tail (null)
    */
    removeLast = () => {
        if (this.size === 0) return;
        if (this.size === 1) this.head = this.tail = null 
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }

            current.next = null;
            this.tail = current;
        }
        this.size --;

    }

    /*
        case 1
        head ===> null ===> tail (null)

        case 2
        head ===> | 3 | ===> tail (null)
        head ===> null ===> tail (null)

        case 3
        head ===> | 2 | ===> | 3 | ===> tail (null)
        head ===> | 2 | ===> tail (null)

        case 4
        head ===> | 2 | ===> | 3 | ===> | 4 | ===> tail (null)
        head ===> | 3 | ===> | 4 | ===> tail (null)

        case 5
        head ===> | 2 | ===> | 3 | ===> | 4 | ===> tail (null)
        head ===> | 2 | ===> | 4 | ===> tail (null)
    */
    removeByValue = node => {

        // case 1
        if (this.size === 0) return;

        if (this.size === 1) {
            // case 2
            if (this.head.value === node.value) this.head = this.tail = null;
            this.size--;

        } else {
            let current = this.head;
            let prevNode = null
            while (current) {
                if (current.value === node.value) {
                    // case 3
                    if (!prevNode)
                    {
                        this.head = current.next
                    }
                    else {
                        // case 4
                        prevNode.next = current.next;
                        this.size--;
                    }

                }
                prevNode = current;
                current = current.next;
            }
        }

    }

    enumerate = () => {

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
const node4 = new Node(13)
const node5 = new Node(10)

const myList = new LinkedList();

myList.addFirst(node1);
myList.addLast(node2);
myList.addFirst(node3);
myList.addLast(node4);
myList.addLast(node5);

// myList.removeFirst();

myList.removeByValue(node1);

console.log('node list: ', myList.enumerate());
console.log('size:', myList.size);