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
  this.changeAvailability = function  (availability) {
    this.isAvailable = availability;
  };
}

const book1 = new Book("book1", "umer", true);
book1.changeAvailability(false); // Change availability to false
console.log(book1); // { title: 'book1', author: 'umer', isAvailable: false }
