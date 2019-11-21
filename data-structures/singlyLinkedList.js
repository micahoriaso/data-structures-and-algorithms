export class Node {
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {

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
    addFirst = value => {

        const node = new Node(value);

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
    addLast = value => {

        const node = new Node(value);

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

            let tempNode;
            let current = this.head;

            while (current.next) {

                tempNode = current;
                current = current.next;

            }

            this.tail = tempNode;
            this.tail.next = null;

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
    removeByValue = value => {

        const node = new Node(value);

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
