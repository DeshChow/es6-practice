class Parent{
    constructor(){
        this.FatherName="schwengger";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name= name;
    }
    getFullName(){
        return this.name + " " + this.FatherName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby);
console.log(baby2);
console.log(baby.getFullName());