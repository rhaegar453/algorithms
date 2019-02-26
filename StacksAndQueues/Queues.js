class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.length=0;
    }

    peek(){};
    enqueue(value){
        const newNode=new Node(value);
        if(this.length==0){
            this.first=newNode;
            this.last=newNode;
        }
        else{
            this.last.next=newNode;
            this.last=newNode;
        }

        this.length++;
    };
    dequeue(){
        console.log(this.first.value);
        let firstItem=this.first;
        this.first=this.first.next;
        return firstItem.value;
    };
    printList(){
        let arr=[];
        let currentNode=this.first;
        while(currentNode.next!=null){
            arr.push(currentNode.value);
            currentNode=currentNode.next;
        }
        arr.push(this.last.value);
        console.log(arr);
    }
}


let x=new Queue();
x.enqueue(10);
x.enqueue(20);
x.printList();
x.dequeue();
x.enqueue(30);
x.enqueue(40);
x.printList();
x.dequeue();
x.printList();
