import Queue from './queueLinkedList';

test('creates a queue', () => {
    const queue = new Queue();

    expect(queue.size).toEqual(0)
})

test('enqueues an item', () => {
    const queue = new Queue();

    queue.enqueue(1);
    expect(queue.size).toEqual(1)
})

test('dequeues an item', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);


    queue.dequeue();


    expect(queue.size).toEqual(3)
    expect(queue.peek()).toEqual(2)

})

test('dequeues an empty queue', () => {

    const queue = new Queue();
    expect(() => queue.dequeue()).toThrow("Queue is empty");

})

test('peeks  at an empty queue', () => {

    const queue = new Queue();
    expect(() => queue.peek()).toThrow("Queue is empty");

})