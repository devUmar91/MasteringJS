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


