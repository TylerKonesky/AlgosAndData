// What is a Stack? What do we use them for?
// Both Stacks and Queues are abstract data sctructures-- Must use a LIFO method, the last 
// element added to a stack will be the first one removed. 


// ************ STACK ************
class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }

        return ++this.size;
    }

    pop(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;

        return temp.value;
    }
}


// ************ Queues ************

// What is a queue --->>> FIRST IN FIRST OUT data structure (Think like a queue of orders... or a line in a store...)
// enqueue and dequeue

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
// Adds to the queue
    enqueue(val){
        let newNode = new Node(val);
        if(this.size === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

// Removes from the queue
    dequeue(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--
        return temp.value;
    }


}

