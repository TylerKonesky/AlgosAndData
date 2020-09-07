//Almost identical to Singly Linked Lists... Just has a previous pointer and not just a next pointer.
// Uses more memory, but offers more flexibility 

class Node {
    //val, next, prev
    constructor(val){
        this.val = val; 
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(this.length === 0){
            return undefined
        }
        let temp = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.previous;
            this.tail.next = null;
            temp.previous = null;
        }
        this.length--;
        return temp;
    }

    shift(){
        if(this.length === 0) return undefined
        let temp = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = temp.next;
            this.head.previous = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }

    unshift(val){
        let newNode = new Node(val);
        if(this.head === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return undefined
        if(index <= this.length / 2){
            let count = 0;
            let current = this.head;
            while(count != index){
                current = current.next;
                count++;
            } 
            return current;
        } else {
            let count = this.length -1;
            let current = this.tail;
            while(count != index){
                current = current.previous;
                current--;
            }
            return current;
        }
        
    }
}