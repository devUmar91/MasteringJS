// 1. Introduction to Object-Oriented Programming
// OOP is a programming paradigm where data and behavior are bundled into "objects." JavaScript supports OOP using objects, prototypes, and ES6 classes.

// Key Principles:

// Encapsulation: Bundling data and functions together (e.g., objects).
// Abstraction: Hiding complex details and exposing only necessary features.
// Inheritance: Reusing existing code by creating subclasses.
// Polymorphism: Overriding methods in child classes.

const student = {
  name: "umar",
  age: 21,
  courses: ["physics Course", "codiing Course"],
};

const addCourse = (course) => {
  student.courses.push(course);
  // console.log(student);
};

//    addCourse('newMarketing course')
const removeCourse = (newCourse) => {
  student.courses = student.courses.filter((course) => course !== newCourse);
  // console.log(student);
  // return newCourses;
};

removeCourse("codiing Course");
// console.log(student);

// ...................Constructor Functions................

function Book(title, author, isAvailable) {
  this.title = title;
  this.author = author;
  this.isAvailable = isAvailable;

  // Add a method to change availability
  this.changeAvailability = function (availability) {
    this.isAvailable = availability;
  };
}

const book1 = new Book("book1", "umer", true);
book1.changeAvailability(false); // Change availability to false
// console.log(book1); // { title: 'book1', author: 'umer', isAvailable: false }

// .....................Prototype....................

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    //  console.log(`hello ${this.name}`);
  };
}

//  Person.prototype.hello = function (){
//      if(this.age !== undefined){
//        console.log(`hello ${this.name} how are you.Age${20}`);
//      }
//      else{
//       console.log(`hello ${this.name} how are you.`);
//      }
//  }

const person1 = new Person("umar", 20);
const person2 = new Person("ali");

person1.greet();
person2.greet();

// ...................Classes in JavaScript..................

// class Car {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }
//   start() {
//     console.log(`${this.brand} ${this.model} ${this.year} is starting....`);

//     setTimeout(() => {
//       this.stop();
//     }, 3000);
//   }

//   stop() {
//     console.log(`${this.brand} ${this.model} ${this.year} is stoped.`);
//   }
//   // this.stop = function(){
//   //   console.log(`${this.brand} ${this.model} ${this.year} is stop.`);
//   // };
// }
// this.stop = function(){
//   console.log(`${this.brand} ${this.model} ${this.year} is stop.`);
// };

// const Bmw = new Car("BMW", "M5", "2011");
// const toyota = new Car("Toyota", "Supra", "1991");

// Bmw.start();
// toyota.start();
// Bmw.stop()


// .......................inheretance...................


// class Car {
  // constructor (name){
  //   this.name = name;
  // }

  //  horn (){
  //   console.log(`${this.name} makes sound`);
    
  //  }
// }

//  class NewCar extends Car{

//      horn(){
//       console.log(`${this.name} honks`);
      
//      }
//  }

// const car1 = new Car ('bmw')

// car1.horn()



// class Utility {
//   static CalculateFactorial (number){
//     if(number< 0){
//       throw new error("factorial is not defined for negative numbers");
      
//     }
//     if(number === 1 || number === 0){
//       return 1;
//     }
//     let factorial = 1;
//     for(let i = 2 ; i<=number;i++){
//       factorial *= i;

//     }
//     return factorial;
//   }
// }

// console.log(Utility.CalculateFactorial(100));

 
// .......................Getter And Setters...................

 class BankAccount {
   constructor (balance){
    this._balance=balance;
   }

   get balance(){
    console.log(`${this._balance}`);
    
   }

   set balance(newBalance){
        this._balance=newBalance;
   }

}


const addBalance = new BankAccount(30)
console.log(addBalance._balance);
addBalance.balance=40
console.log(addBalance._balance);
