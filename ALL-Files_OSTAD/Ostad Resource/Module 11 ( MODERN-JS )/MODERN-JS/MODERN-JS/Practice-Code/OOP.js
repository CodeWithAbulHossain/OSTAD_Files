// What is object & how works.
/*
let laptop={
    brand:"Apple",
    ram:8,
    isM1:true,
    display:13.3,
    freeStorage:(total,used)=>{
        console.log(total-used);
    }

}

laptop.freeStorage(256,80);
*/












// What is object blueprint(CLASS) & how works.
/*
class laptop{

    brand="Apple"
    ram=8
    isM1=true
    display=13.3

    freeStoragename=(total,used)=>{
        console.log(total-used);
    }
}


let LaptopObj= new laptop();

LaptopObj.freeStoragename(300,200);
console.log(LaptopObj.brand);
console.log(LaptopObj.ram);

*/










// What is constructor function inside calss & How it work

/*
class Laptop{

    constructor(a,b){
           let c=a+b;
           console.log(c);
    }

    abc(a,b){
        return (a+b);
    }

}

let obj=new Laptop(20,30)  // () is called constrcutor 
console.log(obj.abc(1,2)+10)

*/




// What is Static Keyword , How it work
/*
class Person{
    firstName="Jack"
    lastName="Ma"

    static addTwo=(a,b)=>{
      console.log(a+b);      
    }
}

Person.addTwo(3,4);
*/




// What is Inheritance? Properties Overriding 
/*
class Father{
    addTwo(a,b){
        console.log(a+b);
    }
}


class Son extends Father{
    addTwo(a,b){
        console.log(a-b);
    }
}

let sonObj=new Son();
sonObj.addTwo(40,50);
*/


// Properties/Method Overloading --> Not in JS


// Abstract Class --> Not in JS


// Polymorphism= Overloading+Overriding+Inheritance


// Question: Change values, 

class Phone{

    Model="14 Pro Max";
    RAM=8
    Storage=256

    constructor(M,R){
       this.Model=M
       this.RAM=R     
    }

    PrintMyPhone=()=>{
        console.log(`My Phone Model is = ${this.Model} & RAM is= ${this.RAM}`)
    }

}

let obj=new Phone("15 Pro Max",32);
obj.PrintMyPhone();


