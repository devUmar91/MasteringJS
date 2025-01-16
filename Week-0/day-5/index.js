// ..............Mastering JavaScript Asynchronous Programming.................

// .............Callbacks.......
// A callback is a function passed as an argument to another function, executed after some operation completes.

const processUSerData = (callback) => {
  // console.log('fetching data')
  setTimeout(() => {
    callback("data fetched");
  }, 3000);
};

//   processUSerData(()=>{
//   console.log("data1 fetched")
//   })

// ..............Promises................

const login = (user) => {
  return new Promise((resolve, reject) => {
    if (user == "admin") {
      resolve("login Success");
    } else {
      reject("invailid cedentials");
    }
  });
};

login("admin").then((data) => {
//   console.log(data);
}).catch((data)=>{
    // console.log(data)
})

// ...........Async Await...........

// async/await simplifies working with promises and makes asynchronous code look synchronous.

const getData = async() =>{
    try {
        const response =await fetch('https://jsonplaceholder.typicode.com/todos/1')
               if(!response.ok){
                    throw new error("network response was not ok")
               }
               const data = await response.json()
               console.log(data);
               
            
        
        
    } catch (error) {
        console.log(error)
        
    }
}

getData()
