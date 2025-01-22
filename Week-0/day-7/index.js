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

// getData();



// .advane asyn code

// Simulated API call
const fetchData = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const mockData = {
          users: [
            { id: 1, name: "Alice", age: 25 },
            { id: 2, name: "Bob", age: 30 },
            { id: 3, name: "Charlie", age: 35 },
          ],
        };
        url ? resolve(mockData) : reject("URL not provided!");
      }, 2000); // Simulating 2-second delay
    });
  };
  
  // Async function to fetch and process data
  const fetchAndProcessUsers = async (url) => {
    try {
      console.log("Fetching data...");
      const data = await fetchData(url); // Fetching mock data
      console.log("Data fetched successfully:", data);
  
      const processedUsers = data.users
        .filter((user) => user.age > 28) // Filter users older than 28
        .map((user) => ({
          ...user,
          status: "Active", // Add new property to each user
        }));
  
      console.log("Processed Users:", processedUsers);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      console.log("Fetch and process operation complete.");
    }
  };
  
  // Call the function with a valid URL
  fetchAndProcessUsers("https://mockapi.com/users");
  

  // Simulated API calls
const fetchPosts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: "Post One" },
          { id: 2, title: "Post Two" },
          { id: 3, title: "Post Three" },
        ]);
      }, 2000); // Simulating a 2-second delay
    });
  };
  
  const fetchComments = (postId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const comments = {
          1: ["Comment A", "Comment B"],
          2: ["Comment C"],
          3: ["Comment D", "Comment E", "Comment F"],
        };
        resolve(comments[postId] || []);
      }, 1500); // Simulating a 1.5-second delay
    });
  };
  
  // Async function to fetch posts and their comments
  const fetchPostsWithComments = async () => {
    try {
      console.log("Fetching posts...");
      const posts = await fetchPosts();
      console.log("Posts fetched successfully:", posts);
  
      const postsWithComments = await Promise.all(
        posts.map(async (post) => {
          const comments = await fetchComments(post.id); // Fetch comments for each post
          return { ...post, comments };
        })
      );
  
      console.log("Posts with Comments:");
      console.log(postsWithComments);
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      console.log("Operation complete.");
    }
  };
  
  // Execute the function
  fetchPostsWithComments();
  