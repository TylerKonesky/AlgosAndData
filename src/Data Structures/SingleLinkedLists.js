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