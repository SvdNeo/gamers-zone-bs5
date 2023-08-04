// Simulating a library management system

// Books
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: '1984', author: 'George Orwell' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' }
];

// Users
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'David Johnson' }
];

// Borrowed Books
const borrowedBooks = [];

// Function to borrow a book
function borrowBook(userId, bookId) {
    const user = users.find(user => user.id === userId);
    const book = books.find(book => book.id === bookId);

    if (user && book) {
        borrowedBooks.push({ userId, bookId });
        console.log(`Book "${book.title}" borrowed by ${user.name}`);
    } else {
        console.log('Invalid user or book ID.');
    }
}

// Function to return a book
function returnBook(userId, bookId) {
    const borrowedBookIndex = borrowedBooks.findIndex(
        borrowedBook => borrowedBook.userId === userId && borrowedBook.bookId === bookId
    );

    if (borrowedBookIndex !== -1) {
        const borrowedBook = borrowedBooks[borrowedBookIndex];
        const user = users.find(user => user.id === borrowedBook.userId);
        const book = books.find(book => book.id === borrowedBook.bookId);

        borrowedBooks.splice(borrowedBookIndex, 1);
        console.log(`Book "${book.title}" returned by ${user.name}`);
    } else {
        console.log('Book not found or not borrowed by the specified user.');
    }
}

// Example usage
borrowBook(2, 3); // Borrow "1984" by Jane Smith
borrowBook(1, 4); // Borrow "Pride and Prejudice" by John Doe
returnBook(2, 3); // Return "1984" by Jane Smith
borrowBook(3, 2); // Borrow "To Kill a Mockingbird" by David Johnson
