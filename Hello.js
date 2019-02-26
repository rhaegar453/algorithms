class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    introduce(){
        console.log(`Hi, I am ${this.name}`);
    }
}

class Wizard extends Person{
    constructor(name, age, skill){
        super(name, age);
        this.skill=skill;
    }

    play(){
        console.log(`Playing my new skill. Boom ${this.skill}`);
    }
}



var x=new Wizard('Shivaraj', 23, 'Winter is Coming');

x.play();