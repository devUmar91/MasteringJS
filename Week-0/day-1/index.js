// Odd or even

const check = (number) => {
    if (number % 2 == 0) {
      console.log(`${number} is an even number`);
    } else {
      console.log(`${number} is an odd number`);
    }
  };
  // check(5)
  
  // check some of all numbers
  
  const calculateSum = (arr) => {
    let a = 0;
    for (let i = 1; i <= arr.length; i++) {
      // console.log(i);
      a = a + i;
    }
    // console.log(a);
  };
  
  // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // calculateSum(arr)
  
  const AddEvenNumbers = (arr) => {
    let evenNumbers = [];
    let result = 0;
    for (num of arr) {
      if (num % 2 == 0) {
        result = result + num;
      }
    }
    console.log(result);
  };
  
  AddEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  
  // Print numbers greater than a threshold
  
  const calculateTheNumber = (arr, threshold) => {
    let greaterNumbers = [];
    // for(let i=1;i<=arr.length;i++){
    //   if (arr[i]>threshold){
    //     greaterNumbers.push(arr[i])
    //   }
    // }
    // console.log(greaterNumbers)
  
    for (let number of arr) {
      // console.log(number);
    }
  };
  // calculateTheNumber([1,2,45,23,5],24)
  
  // let fruits=['banana','orange','peach','avacado']
  
  // // fruits.push('grapes')
  // // fruits.unshift('apple')
  // // fruits.slice(2, 3)
  // fruits.indexOf('grapes')
  // console.log(fruits.indexOf('grapes'));
  