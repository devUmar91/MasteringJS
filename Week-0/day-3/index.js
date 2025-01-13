// ................higher-order fn.................

// const add = (a,b)=>{
//     let sum=a+b
//     console.log(sum);

//      return sum
// }

// const calculate = (add)=>{

//     let a = 3;
//     let b= 4;
//      add(a,b)

// }

// calculate(add)

// .................Closures.................

// function outerFunction(outerVar) {
//     return function innerFunction(innerVar) {
//       console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
//     };
//   }

//   const closureFunc = outerFunction("outside");
//   closureFunc("inside"); // Output: Outer: outside, Inner: inside

const counter = (value1) => {
  return (increment = (value2) => {
    let result = value1 +1;
    // console.log(result);
    return result;
  });
};

const closerFn = counter(20);
closerFn();
// ToDo: real world problem with closure



// ..................Immediately Invoked Function Expressions (IIFE)................

const arr =[1,2,3,4,5,"donkey","kutta"];

(function (){
      let result=[]
      for(let num of arr){

         result.push(num*2)
        }
        // console.log(result);
})()
        


// console.log(arr[Math.round(Math.random()*arr.length)]);

// ................this keyword............

const  hello=()=>{

}

const person={
    name:"ali",
    class:"BSCS",
    greet: (name)=>{
          console.log( ` ${name}`);
          
    }
}

person.greet('umree')

person.greet = hello;
console.log(person);


