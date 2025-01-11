// // map()

// // let numbers=[1,2,3,4,5,6]
// // let doubled=numbers.map(num=>num * 2)
// // console.log(doubled);

// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map((num) => num * 2);
// // console.log(doubled); // [2, 4, 6, 8, 10]

// let evenNumbers = numbers.filter((num) => num % 2 === 0);
// // console.log(evenNumbers); // [2, 4]

let library = {
  name: "City Library",
  location: "Downtown",
  books: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isAvailable: true, // true means the book is available
    },
    {
      title: "1984",
      author: "George Orwell",
      isAvailable: false, // false means the book is borrowed
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isAvailable: true,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      isAvailable: false,
    },
  ],
};

// const borrowABook = (borrowBook) => {
       
//     let BorrowedBook = null;
//   library.books.forEach((book) => {
//     if (book.title === borrowBook) {
//           if(book.isAvailable){
//             book.isAvailable = false
//             BorrowedBook = book;
//           }
//     } else{
//         console.log(`${book.title} is not available for borrow`);
        
//     };
//   });

//   // console.log(library.books);

// //   console.log(BorrowedBook);
//   return BorrowedBook;
// };

// borrowABook("Pride and Prejudice");
// console.log(library.books);


// const borrowABook = (borrowBook) => {
//     let borrowedBook = null; // To store the borrowed book details
  
//     library.books.forEach((book) => {
//       if (book.title === borrowBook) {
//         if (book.isAvailable) {
//           console.log(`"${borrowBook}" is  available for borrowing.`);

//         //   book.isAvailable = false; // Update availability
//         //   borrowedBook = book; // Save the borrowed book
//         } else {
//           console.log(`"${borrowBook}" is not available for borrowing.`);
//         }
//       }
//     });
  
//     // If no matching book was found
//     if (!borrowedBook) {
//       console.log(`"${borrowBook}" is not in the library.`);
//     }
  
//     return borrowedBook; // Return the borrowed book details, or null if not borrowed
//   };
  
//   // Testing the function
//   borrowABook("To Kill a Mockingbird");
//   console.log(library.books);

const borrowABook = (borrowBook) => {
    let borrowedBook = null; // To store the borrowed book details
  
    library.books.forEach((book) => {
      if (book.title === borrowBook) {
        console.log(book);
        
        if (book.isAvailable) {
          book.isAvailable = false; // Update availability
          borrowedBook = book; // Save the borrowed book
          console.log(`You have successfully borrowed "${borrowBook}".`);
        } else {
          console.log(`"${borrowBook}" is not available for borrowing.`);
        }
      }
    });
  
    // If no matching book was found
    if (!borrowBook) {
      console.log(`"${borrowBook}" is not in the library.`);
    }
  
    displayBooks(); // Call the function to display the updated library
  };
  
  const displayBooks = () => {
    console.log("\nBooks in the Library:");
    library.books.map((book, index) => {
      console.log(
        `${index + 1}. "${book.title}" by ${book.author} - ${
          book.isAvailable ? "Available" : "Not Available"
        }`
      );
    });
  };
  
  // Testing the function
  borrowABook("1984");
  
  