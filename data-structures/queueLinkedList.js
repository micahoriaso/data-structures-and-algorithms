import { LinkedList } from './doublyLinkedList';

class Queue {

    constructor() {
        this.list = new LinkedList();
        this.size = 0;
    }

    enqueue = item => {
        this.list.addLast(item);
        this.size = this.count();
    }

    dequeue = () => {
        if (this.list.size == 0) throw new Error("Queue is empty");
        this.list.removeFirst();
        this.size = this.count();
    }

    peek = () => {
        if (this.list.size == 0) throw new Error("Queue is empty");
        return this.list.head.value;
    }

    count = () => {
        return this.list.size;
    }

    enumerate = () => {
        return this.list.enumerate();
    }

}

export default Queue;