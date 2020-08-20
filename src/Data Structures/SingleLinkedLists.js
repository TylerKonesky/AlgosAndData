// What is a linked list? 
// A data structure that contains a head, tail, and length property
//Linked lists consist of Nodes, and each Node has a value and a pointer to another node or null
// Each node is only connected to one other node going one direction. 

// Lists:
// - Do not have indexes
// - Connected via nodes with a NEXT pointer
// - Random access is not allowed

// Arrays:
// - Indexed in order
// - Insertion and deletion can be expensive
// - Can quickly be accessed at a specific index

//Piece of data = val
// reference to next node = next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }

  
}

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        var current ;
        var newTail ;

        while(current.next){
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length --;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        
        return current;
    }

    shift(){
        if(!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return current;
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        let counter = 0;
        let current = this.head;
        if(index < 0 || index >= index.length) return null;
        while( counter !== index){
            current.next
            counter++
        }
        return current;
    }

    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length){
            this.push(val);
            return true;
        } 
        if(index === 0){
            this.unshift(val);
            return true;
        }
        let newNode = new Node(val);
        let previous = this.get(index -1);
        let temp = previous.next;
        previous.next = newNode;
        newNode.next = temp;
        this.length ++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();
        let previous = this.get(index -1);
        let removed = previous.next;
        previous.next = removed.next;
        this.length--;
        return removed;
    }

    // Used just to see what is happening with reverse...
    print(){
        let arr = [];
        var current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next
        }
        console.log(arr);
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let previous = null;
        let next;

        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            previous = noe;
            node = next;
        }
        return this;
    }

    // traverse(){
    //     var current = this.head;
    //     while(current){
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }
    
}


// var first = new Node("Hi");
// first.next = new Node("there")
// first.next.next = new Node("How are you?")
var list = new SinglyLinkedList();
list.push("Hello");
list.push("goodbye!");