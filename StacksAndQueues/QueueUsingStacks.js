class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
//We can create a stack using arrays.



class Stack{
    constructor(){
        this.top=null;
        this.last=null;
        this.length=0
    }
    push(value){
        let newNode=new Node(value);
        if(this.length==0){
            this.top=newNode;
            this.last=newNode;
        }
        else{
            let holdingPointer=this.top;
            this.top=newNode;
            this.top.next=holdingPointer;
        }
        this.length++;
    };
    pop(){
        let popped=this.top;
        this.top=this.top.next;
        return popped;
    };
    peek(){
        return this.top.value;
    };
    printList(){
        let currentNode=this.top;
        let arr=[];
        if(this.length==0){
            return null;
        }
        while(currentNode.next!=null){
            arr.push(currentNode.value);
            currentNode=currentNode.next;
        }
        arr.push(this.last.value);
        console.log(arr);
    }
}

let x=new Stack();
x.push(10);
x.push(20);
x.push(30);
x.printList();


