export class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

export class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /*
        case 1
        head ===> null ====> tail (null)
        head ===> | 3 | ====> tail (null)

        case 2
        head ===> | 3 | ====> tail (null)
        head ===> | 2 | <===> | 3 | ===> tail (null)
    */
    addFirst = value => {
        const node = new Node(value);

        const tempNode = this.head;
        this.head = node;
        this.size ++;
         
        if(this.size === 1) {
            this.tail = this.head;
        } else {
            this.head.next = tempNode;
            this.head.next.previous = this.head;
        }
    }


    /*
        case 1
        head ===> null ====> tail (null)
        head ===> | 3 | ====> tail (null)

        case 2
        head ===> | 3 | ====> tail (null)
        head ===> | 3 | <===> | 2 | ===> tail (null)
    */
    addLast = value => {

        const node = new Node(value);

        this.size === 0 ? this.head = this.tail = node : this.tail.next = node;
        this.tail.next = node;
        node.previous = this.tail; // intially missed this
        this.tail = node;
        this.size ++;

    }

    /*
        case 1
        head ===> null ===> tail (null)

        case 2
        head ===> | 3 | ===> tail (null)
        head ===> null ===> tail (null)

        case 3
        head ===> | 2 | <===> | 3 | ===> tail (null)
        head ===============> | 3 | ===> tail (null)
    */
    removeFirst = () => {

        let tempNode;

        if (this.size === 0) return;

        tempNode = this.head;

        this.head = this.head.next;
        this.size --;

        if (this.size === 0) {
            this.tail = null;
        } else {
            this.head.previous = null; //reset previous to null
        }

        return tempNode.value;
 
    }

    /*
        case 1
        head ===> null ===> tail (null)

        case 2
        head ===> | 3 | ===> tail (null)
        head ===> null ===> tail (null)

        case 3
        head ===> | 2 | <===> | 3 | ===> tail (null)
        head ===> | 2 | ===============> tail (null)
    */
    removeLast = () => {

        let tempNode;

        if (this.size === 0) return;

        tempNode = this.tail;

        if (this.size === 1) this.head = this.tail = null;


        else {
            
            this.tail = this.tail.previous;
            this.tail.next =  null;
        }
        this.size --;

        return tempNode.value;
    }

    /*
        case 1
        head ===> null ===> tail (null)

        case 2
        head ===> | 3 | ===> tail (null)
        head ===> null ===> tail (null)

        case 3
        head ===> | 2 | <===> | 3 | ===> tail (null)
        head ===> | 2 | ===============> tail (null)

        case 4
        head ===> | 2 | <===> | 3 | <===> | 4 | ===> tail (null)
        head ===============> | 3 | <===> | 4 | ===> tail (null)

        case 5
        head ===> | 2 | <===> | 3 | <===> | 4 | ===> tail (null)
        head ===> | 2 | <===============> | 4 | ===> tail (null)
    */
    removeByValue = value => {

        const node = new Node(value);

        // case 1
        if (this.size === 0) return;

        if (this.size === 1) {
            // case 2
            if (this.head.value === node.value) this.head = this.tail = null;
            this.size --;

        } else {
            let current = this.head;
            let prevNode = null
            while (current) {
                if (current.value === node.value) {
                    // case 4
                    if (!prevNode) {
                        current.next.previous = null;
                        this.head = current.next
                    }
                    else {
                        // case 5
                        current.next.previous = prevNode
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

        return nodes.join(' <===> ');

    }

}
