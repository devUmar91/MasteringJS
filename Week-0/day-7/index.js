// ...............JavaScript Modules and Error Handling........
 import { addTwoNumbers, fetchData } from "./utills/utills.js";

const result =addTwoNumbers(1,3)
// console.log(result);



const getData = async () => {
    const url = "https://dummyjson.com/carts"; // API URL
    const products = await fetchData(url); // Call the function with the URL
    console.log(products);
    
    products.carts.map((product)=>{
        console.log(product);
        return product
        
    })
    // console.log(); // Log the products data
};

getData();



