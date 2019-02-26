class Person{
    constructor(name, age){
        if(!name||!age){
            throw new Error('Please enter a name and age for the User');
        }
        this.name=name;
        this.age=age;
    }

    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    scream(){
        console.log(`HEY THERE this is SPARTAAAA`);
    }

}


let x=new Person('Shivaraj Bakale', 24);

x.scream();


