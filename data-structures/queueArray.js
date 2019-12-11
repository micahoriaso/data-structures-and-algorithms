class Queue {

    constructor() {

        this.list = [];
        this.size = 0;
        this.head = 0;
        this.tail = -1;
        
    }


    enqueue = item => {

        this.list.push(item);
        this.head = this.list.length - 1;
        this.size = this.list.length;
        
    }

    dequeue = () => {

        if (this.list.length === 0) throw new Error("Queue is empty");
        this.list.splice(this.list.size - 2, 1)
        this.size = this.list.length;

    }

    peek = () => {

        if (this.list.length === 0) throw new Error("Queue is empty");
        return this.list[0]

    }

    count = () => {

        return this.list.length;

    }

    enumerate = () => {

        return this.list;
    } 
}

export default Queue;