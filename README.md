# Library Management System

## Project Overview
The Library Management System is a robust application that efficiently handles core library tasks like adding, borrowing, and returning books. It emphasizes clean coding practices, ensuring the code is maintainable and extendable. Developed using Test-Driven Development (TDD), the system guarantees reliable functionality through pre-written tests. By adhering to SOLID principles, the application is flexible and scalable, making it adaptable to future needs. Overall, it’s an excellent example of building maintainable software for essential library operations.## Test-Driven Development (TDD) Approach.

### What is TDD?
Test-Driven Development (TDD) is a software development process where developers first write test cases for a feature before implementing the functionality. The cycle follows three main steps:

1. **Red**: Write a test that fails.
2. **Green**: Write the minimal code to pass the test.
3. **Refactor**: Optimize and clean up the code while ensuring that all tests still pass.

### Setting Up the TDD Approach
To set up the TDD approach in this project, follow these steps:

1. **Initialize the Project**: Set up a new TypeScript project and configure testing tools like Jest.
2. **Write Initial Tests**: Start by writing test cases for each functionality you plan to implement (e.g., adding a book).
3. **Implement Functionality**: Develop the code to pass the tests you've written.
4. **Refactor and Repeat**: Continuously refactor the codebase, ensuring all tests pass.

## Project Description

### Project Title
**Library Management System - A TDD-Based TypeScript Application**

### Project Description
This project is designed to create a functional library management system that handles the core operations of any typical library. Built using TypeScript and driven by the TDD approach, it ensures that the system is not only functional but also maintainable and scalable. The project covers the following functionalities:

### Key Functionalities

- **Add Books**:
  - Adds new books to the library collection.
  - Each book has a unique identifier (ISBN), title, author, publication year, and quantity.
  - This is how we can add book!!
  - <img width="1440" alt="Screenshot 2024-09-01 at 5 01 55 PM" src="https://github.com/user-attachments/assets/f759bcc3-af6c-40a4-b6ae-a4a431b9da38">


- **Borrow Books**:
  - Allows users to borrow books from the library.
  - Validates book availability before allowing the operation.
  - Handles errors if the requested book is not available.
 
  - This is the preview of available book!!
  - <img width="1440" alt="Screenshot 2024-09-01 at 4 42 11 PM" src="https://github.com/user-attachments/assets/bdbdf30b-fe2c-4c18-864b-8c5cd3db68b7">

  -If someone has already borrow a particular book then the result looks like this!!
  <img width="1440" alt="Screenshot 2024-09-01 at 4 42 37 PM" src="https://github.com/user-attachments/assets/0c305ee7-e51e-4e13-a4d3-fa6464473ace">

  
- **Return Books**:
  - Allows users to return borrowed books.
  - Updates the library’s inventory accordingly.
  - This is how one can return book and after that someone wants to borrow the same book then it can be borrowed immidiately!!
  - <img width="1440" alt="Screenshot 2024-09-01 at 5 06 18 PM" src="https://github.com/user-attachments/assets/8aca6808-a5e6-4e47-9212-3dd2883501b8">


- **View Available Books**:
  - Provides a list of all books currently available in the library.
  - <img width="1440" alt="Screenshot 2024-09-01 at 5 03 43 PM" src="https://github.com/user-attachments/assets/75eac153-b45e-4f7f-97eb-8baa12d434c2">

### Implemented Features
- `addBook()`: Adds a new book to the library if the ISBN is unique.
- `borrowBooks()`: Allows borrowing of one or multiple books at a time, updating the inventory.
- `returnBooks()`: Handles the return of borrowed books, ensuring the library stock is updated.
- `viewAvailableBooks()`: Lists all available books in the library.

### The Tests i've tried to impliment are

- 1: should not allow adding a book with duplicate ISBN,
- 2:should add multiple books and validate the library contents,
- 3:should not borrow a book if not available,
- 4:should return a borrowed book and then its available from now on,
- 5: should not return a book that is not borrowed or doesn’t exist,
- 6: should view all available books,
- 7:should not borrow multiple books at once,
- 8: should handle cases where the same title has different ISBNs. 



## How to Set Up and Run the Project

### Used Technologies
- TypeScript
- MongoDB
- Node.js
- npm (Node Package Manager)

### Installation Steps
  
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd IncubyteTest1 2
2. **Install Dependencies**
   ```bash
   npm install
   
3. **Run TypeScript**
   ```bash
   npm run dev
**Start the Application**
The application is primarily designed for demonstration through tests, as it doesn't include a user interface.
