class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}

class LinkedList{
    constructor(value){
        this.head=new Node(value);
        this.tail=this.head;
        this.length=1
    }

    append(value){
        let newNode=new Node(value);
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
    }

    prepend(value){
        let newNode=new Node(value);
        newNode.next=this.head;
        this.head=newNode;
        this.length++;
    }
    insert(index, value){
        if(index>=this.length){
            return this.append(value);
        }
        let newNode=new Node(value);
        let leader=this.traverseLeader(index-1);
        let holder=leader.next;
        leader.next=newNode;
        newNode.next=holder;
        this.length++;
        return this.printList();
    }
    printList(){
        let arr=[];
        let currentNode=this.head;
        while(currentNode.next!=null){
            arr.push(currentNode.value);
            currentNode=currentNode.next;
        }
        arr.push(this.tail.value);
        console.log(arr);
    }
    traverseLeader(index){
        let arr=[];
        let counter=0;
        let currentNode=this.head;
        while(counter!=index){
            currentNode=currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index){
        const leader=this.traverseLeader(index-1);
        const unwantedNode=leader.next;
        leader.next=unwantedNode.next;
        this.length--;
        this.printList();
    }
}

