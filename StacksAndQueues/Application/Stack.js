var Node=require('./Node');
export default class Stack{
    constructor(){
        this.top=null;
        this.bottom=null;
        this.length=null;
    }

    peek(){
        return this.top.value;
    };
    push(value){

        let check=value instanceof User;
        if(!check){
            throw new Error('Please input a User Object');
        } 
        else{
            let newNode=new Node(value);
            if(this.length==0){
                this.top=newNode;
                this.bottom=newNode;
            }
            else{
                let holdingPointer=this.top;
                this.top=newNode;
                this.top.next=holdingPointer;
            }
            this.length++;
            return this.printUsers();
        }  
    };
    pop(){
        let lastUser=this.top;
        this.top=this.top.next;
        return lastUser.value;
    };
    printUsers(){
        let currentNode=this.top;
        let arr=[];
        while(currentNode.next!=null){
            arr.push(currentNode.value);
            currentNode=currentNode.next;
        }
        console.log(arr);
    }
}


let x=new Stack();

let user1=new User('Shivaraj', 23, 'shivarajapple@gmail.com');
let user2=new User('Sheela', 45, 'sheelabakale@gmail.com');
let user3=new User('Sachin', 23, 'sachinbakale@gmail.com');
let user4=new User('Shankar', 54, 'shankarbakale@gmail.com');


x.push(user1);
x.printUsers();