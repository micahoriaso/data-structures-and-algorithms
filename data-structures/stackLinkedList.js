import { LinkedList } from './doublyLinkedList';

export class Stack {

    constructor() {
        this.list = new LinkedList();
    }

   
    push = value => {

        this.list.addFirst(value)
        
    } 

    pop = () => {

        if (this.list.size === 0) throw new Error("Stack is empty");

        return this.list.removeFirst()

    } 

    peek = () => {

        if (this.list.size === 0) throw new Error("Stack is empty");

        return this.list.head.value;

    } 

    depth = () => {
        return this.list.size
    }
}