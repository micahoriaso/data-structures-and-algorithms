import { Node, LinkedList } from './doublyLinkedList';

test("creates a doubly linked list", () => {
  const list = new LinkedList();
  expect(list.size).toEqual(0);
  expect(list.head).toEqual(null);
  expect(list.tail).toEqual(null);
});

test("creates a node", () => {
  const node = new Node(2);
  expect(node.value).toEqual(2);
  expect(node.next).toEqual(null);
  expect(node.previous).toEqual(null);
});

test("adds a new node to the beginning of the linked list", () => {

  const list = new LinkedList();

  list.addFirst(1);

  expect(list.head.value).toEqual(1);
  expect(list.tail.value).toEqual(1);
  expect(list.size).toEqual(1);

});

test("adds a new node to the end of the linked list", () => {

  const list = new LinkedList();

  list.addFirst(1);
  list.addLast(2);

  expect(list.head.value).toEqual(1);
  expect(list.tail.value).toEqual(2);
  expect(list.size).toEqual(2);

});

test("removes a node to the beginning of the linked list", () => {

  const list = new LinkedList();

  list.addFirst(1);
  list.addLast(2);
  list.addLast(3);
  list.removeFirst();

  expect(list.head.value).toEqual(2);
  expect(list.tail.value).toEqual(3);
  expect(list.size).toEqual(2);

});

test("removes a node to the end of the linked list", () => {

  const list = new LinkedList();

  list.addFirst(1);
  list.addLast(2);
  list.addLast(3);
  list.removeLast();

  expect(list.head.value).toEqual(1);
  expect(list.tail.value).toEqual(2);
  expect(list.size).toEqual(2);

});

test("removes a node by its value", () => {

  const list = new LinkedList();

  list.addFirst(1);
  list.addLast(2);
  list.addLast(3);
  list.removeByValue(2);

  expect(list.size).toEqual(2);

});