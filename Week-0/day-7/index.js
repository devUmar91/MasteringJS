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
  
//   console.log(spiralOrder(matrix));
  // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]


//   Problem: Maximum Water Trapped Between Bars
// You are given an array heights where each element represents the height of a bar. Calculate how much water can be trapped between the bars after it rains.
  

  function trapWater(heights) {
    if (heights.length < 3) return 0; // At least 3 bars are needed to trap water.
  
    let left = 0; // Pointer starting from the left
    let right = heights.length - 1; // Pointer starting from the right
    let leftMax = 0; // Max height on the left
    let rightMax = 0; // Max height on the right
    let waterTrapped = 0; // Total water trapped
  
    while (left < right) {
      if (heights[left] < heights[right]) {
        // Process the left side
        if (heights[left] >= leftMax) {
          leftMax = heights[left]; // Update left max
        } else {
          waterTrapped += leftMax - heights[left]; // Calculate water trapped
        }
        left++;
      } else {
        // Process the right side
        if (heights[right] >= rightMax) {
          rightMax = heights[right]; // Update right max
        } else {
          waterTrapped += rightMax - heights[right]; // Calculate water trapped
        }
        right--;
      }
    }
  
    return waterTrapped;
  }
  
  // Example Usage:
  const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  console.log(trapWater(heights));
  // Output: 6
  
  function longestUniqueSubstring(s) {
    let charSet = new Set(); // To store unique characters in the current window
    let left = 0; // Left pointer of the sliding window
    let maxLength = 0; // Maximum length of the substring
  
    for (let right = 0; right < s.length; right++) {
      // Shrink the window if a duplicate character is found
      while (charSet.has(s[right])) {
        charSet.delete(s[left]);
        left++;
      }
      // Add the current character to the set
      charSet.add(s[right]);
      // Update the maximum length
      maxLength = Math.max(maxLength, right - left + 1);
    }
  
    return maxLength;
  }
  
  // Example Usage:
  const input = "abcabcbb";
  console.log(longestUniqueSubstring(input));
  // Output: 3 (The longest substring is "abc")
  
  const input2 = "bbbbb";
  console.log(longestUniqueSubstring(input2));
  // Output: 1 (The longest substring is "b")
  
  const input3 = "pwwkew";
  console.log(longestUniqueSubstring(input3));
  // Output: 3 (The longest substring is "wke")
  

  function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b); // Sort the array to avoid duplicates easily
  
    for (let i = 0; i < nums.length - 2; i++) {
      // Skip duplicate values for the first element
      if (i > 0 && nums[i] === nums[i - 1]) continue;
  
      let left = i + 1; // Pointer to the next element
      let right = nums.length - 1; // Pointer to the last element
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          left++;
          right--;
  
          // Skip duplicates for the second and third elements
          while (left < right && nums[left] === nums[left - 1]) left++;
          while (left < right && nums[right] === nums[right + 1]) right--;
        } else if (sum < 0) {
          left++; // Move left pointer to increase sum
        } else {
          right--; // Move right pointer to decrease sum
        }
      }
    }
  
    return result;
  }
  
  // Example Usage:
  const nums = [-1, 0, 1, 2, -1, -4];
  console.log(threeSum(nums));
  // Output: [[-1, -1, 2], [-1, 0, 1]]
  
  const nums2 = [0, 0, 0, 0];
  console.log(threeSum(nums2));
  // Output: [[0, 0, 0]]
  
  function wordLadder(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList); // Convert list to a set for fast lookups
    if (!wordSet.has(endWord)) return 0; // If endWord is not in wordList, no solution
  
    let queue = [[beginWord, 1]]; // Queue for BFS, storing [currentWord, steps]
    
    while (queue.length) {
      let [word, steps] = queue.shift(); // Dequeue the first element
  
      // If we reached the endWord, return the steps count
      if (word === endWord) return steps;
  
      // Try changing each character of the word
      for (let i = 0; i < word.length; i++) {
        for (let c = 97; c <= 122; c++) { // ASCII a-z
          let newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
          if (wordSet.has(newWord)) {
            queue.push([newWord, steps + 1]); // Push to queue with incremented step count
            wordSet.delete(newWord); // Remove to prevent revisiting
          }
        }
      }
    }
  
    return 0; // If no transformation is possible
  }
  
  // Example Usage:
  const beginWord = "hit";
  const endWord = "cog";
  const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
  
  console.log(wordLadder(beginWord, endWord, wordList));
  // Output: 5 (The sequence is: "hit" → "hot" → "dot" → "dog" → "cog")
  
  const wordList2 = ["hot", "dot", "dog", "lot", "log"];
  console.log(wordLadder(beginWord, endWord, wordList2));
  // Output: 0 (No valid transformation)
  

  class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.map = new Map(); // Stores key-node pairs
      this.head = { next: null, prev: null }; // Dummy head
      this.tail = { next: null, prev: null }; // Dummy tail
      this.head.next = this.tail;
      this.tail.prev = this.head;
    }
  
    _remove(node) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
  
    _insert(node) {
      node.next = this.head.next;
      node.prev = this.head;
      this.head.next.prev = node;
      this.head.next = node;
    }
  
    get(key) {
      if (!this.map.has(key)) return -1;
      let node = this.map.get(key);
      this._remove(node);
      this._insert(node);
      return node.value;
    }
  
    put(key, value) {
      if (this.map.has(key)) this._remove(this.map.get(key));
  
      let node = { key, value, next: null, prev: null };
      this.map.set(key, node);
      this._insert(node);
  
      if (this.map.size > this.capacity) {
        let lru = this.tail.prev;
        this._remove(lru);
        this.map.delete(lru.key);
      }
    }
  }
  
  // Example Usage:
  const cache = new LRUCache(2);
  cache.put(1, 100);
  cache.put(2, 200);
  console.log(cache.get(1)); // Output: 100
  cache.put(3, 300); // Removes key 2
  console.log(cache.get(2)); // Output: -1 (Not found)
  

  function taskScheduler(tasks, limit) {
    return new Promise((resolve) => {
      let index = 0;
      let running = 0;
      let results = new Array(tasks.length);
  
      function runNext() {
        if (index >= tasks.length && running === 0) {
          return resolve(results);
        }
        while (running < limit && index < tasks.length) {
          let i = index++;
          running++;
          tasks[i]().then((res) => {
            results[i] = res;
            running--;
            runNext();
          });
        }
      }
      
      runNext();
    });
  }
  
  // Example Usage:
  const tasks = [
    () => new Promise(res => setTimeout(() => res("Task 1 done"), 3000)),
    () => new Promise(res => setTimeout(() => res("Task 2 done"), 2000)),
    () => new Promise(res => setTimeout(() => res("Task 3 done"), 1000)),
    () => new Promise(res => setTimeout(() => res("Task 4 done"), 4000)),
  ];
  
  taskScheduler(tasks, 2).then(console.log);
  // Expected Output: ["Task 1 done", "Task 2 done", "Task 3 done", "Task 4 done"]
  
  function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "John Doe" });
    }, 1000);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { postId: 1, title: "First Post" },
        { postId: 2, title: "Second Post" },
      ]);
    }, 1500);
  });
}

function getUserWithPosts(id) {
  return fetchUser(id)
    .then(user => {
      return fetchUserPosts(user.id).then(posts => {
        return { ...user, posts };
      });
    });
}

// Example Usage:
getUserWithPosts(101).then(console.log);
/* Expected Output:
{
  id: 101,
  name: "John Doe",
  posts: [
    { postId: 1, title: "First Post" },
    { postId: 2, title: "Second Post" }
  ]
}
*/

function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "Alice" });
    }, 1000);
  });
}

function fetchOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { orderId: 1, item: "Laptop" },
        { orderId: 2, item: "Phone" },
      ]);
    }, 1500);
  });
}

async function getUserWithOrders(userId) {
  try {
    const user = await fetchUser(userId);
    const orders = await fetchOrders(user.id);
    return { ...user, orders };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Example Usage:
getUserWithOrders(202).then(console.log);
/* Expected Output:
{
  id: 202,
  name: "Alice",
  orders: [
    { orderId: 1, item: "Laptop" },
    { orderId: 2, item: "Phone" }
  ]
}
*/
