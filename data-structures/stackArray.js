export class Stack {

    constructor() {
        this.list = [];
    }

    push = value => {

        this.list.push(value)

    }

    pop = () => {

        if (this.list.length === 0) throw new Error("Stack is empty");
        return this.list.pop();

    }

    peek = () => {

        const { length } = this.list;

        if (length === 0) throw new Error("Stack is empty");
        return this.list[length - 1]

    }

    depth = () => {

       return  this.list.length;

    }
}