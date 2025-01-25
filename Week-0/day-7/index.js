// ...............JavaScript Modules and Error Handling........
//  import { addTwoNumbers, fetchData } from "./utills/utills.js";

// const result =addTwoNumbers(1,3)
// console.log(result);



// const getData = async () => {
//     const url = "https://dummyjson.com/carts"; // API URL
//     const products = await fetchData(url); // Call the function with the URL
//     console.log(products);
    
//     products.carts.map((product)=>{
//         console.log(product);
//         return product
        
//     })
//     // console.log(); // Log the products data
// };

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
//   fetchAndProcessUsers("https://mockapi.com/users");
  

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
//   fetchPostsWithComments();
  

// Simulated API for users
const fetchUsers = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" },
        ]);
      }, 1000);
    });
  };
  
  // Simulated API for user posts
  const fetchPostsByUser = (userId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.8) reject(`Failed to fetch posts for user ${userId}`);
        else
          resolve([
            { postId: 101, title: `Post 101 by User ${userId}` },
            { postId: 102, title: `Post 102 by User ${userId}` },
          ]);
      }, 1500);
    });
  };
  
  // Simulated API for post details
  const fetchPostDetails = (postId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.7) reject(`Failed to fetch details for post ${postId}`);
        else resolve({ postId, content: `Detailed content for post ${postId}` });
      }, 1200);
    });
  };
  
  // Retry logic: Retry an async function up to 'retries' times
  const withRetry = async (fn, args, retries = 3) => {
    let attempt = 0;
    while (attempt < retries) {
      try {
        return await fn(...args);
      } catch (error) {
        attempt++;
        console.warn(`Retry ${attempt}/${retries} for function ${fn.name} failed. Error: ${error}`);
        if (attempt === retries) throw new Error(`All retries failed: ${error}`);
      }
    }
  };
  
  // Main function to fetch users, their posts, and post details
  const fetchUsersWithPostsAndDetails = async () => {
    try {
      console.log("Fetching users...");
      const users = await fetchUsers();
      console.log("Users fetched successfully:", users);
  
      const userPostDetails = await Promise.all(
        users.map(async (user) => {
          const posts = await withRetry(fetchPostsByUser, [user.id]);
          const detailedPosts = await Promise.all(
            posts.map(async (post) => {
              const details = await withRetry(fetchPostDetails, [post.postId]);
              return { ...post, ...details };
            })
          );
          return { ...user, posts: detailedPosts };
        })
      );
  
      console.log("User Post Details:");
      console.log(userPostDetails);
    } catch (error) {
      console.error("Error during fetching process:", error);
    } finally {
      console.log("Process complete.");
    }
  };
  
  // Execute the function
//   fetchUsersWithPostsAndDetails();
const queue = new TaskQueue(2);

const task = (id) => new Promise((resolve) => {
  setTimeout(() => {
    console.log(`Task ${id} completed`);
    resolve();
  }, 1000);
});

// queue.add(() => task(1));
// queue.add(() => task(2));
// queue.add(() => task(3));
// queue.add(() => task(4));

// ....Spiral Matrix..

function spiralOrder(matrix) {
    if (matrix.length === 0) return [];
  
    const result = [];
    let top = 0,
      bottom = matrix.length - 1,
      left = 0,
      right = matrix[0].length - 1;
  
    while (top <= bottom && left <= right) {
      // Traverse from left to right
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
  
      // Traverse from top to bottom
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
  
      if (top <= bottom) {
        // Traverse from right to left
        for (let i = right; i >= left; i--) {
          result.push(matrix[bottom][i]);
        }
        bottom--;
      }
  
      if (left <= right) {
        // Traverse from bottom to top
        for (let i = bottom; i >= top; i--) {
          result.push(matrix[i][left]);
        }
        left++;
      }
    }
  
    return result;
  }
  
  // Example Usage:
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  console.log(spiralOrder(matrix));
  // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
  
