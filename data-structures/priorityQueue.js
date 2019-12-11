class Queue {

    constructor() {

        this.list = [];
        this.size = 0;
        this.head = 0;
        this.tail = -1;

    }


    enqueue = item => {

        if (this.list.length === 0){

            this.list.push(item);

        } else {

            // [5, 4, 3]
            // 2
            for (let i = 0; i < this.list.length; i++) {

                // [3]
                if (item > this.list[i])
                {
                    this.list.splice(i, 0, item)
                    break;
                    
                }
                 else {
                    
                }
            }
        }

        console.log(this.list)


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