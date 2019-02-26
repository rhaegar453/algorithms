class Stack{
    constructor(){
        this.arry=[];
    }

    peek(){
        return this.arry[this.arry.length-1];
    }
    pop(){
        return this.arry.pop();
    }
    push(value){
        this.arry.push(value);
    }
    printList(){
        console.log(this.arry);
    }
}


let x=new Stack();

x.push(12);
x.push(14);
x.printList();
x.pop();
x.printList();