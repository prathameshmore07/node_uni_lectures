class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author, isbn) {
        this.books.push({ title, author, isbn, isAvailable: true });
        console.log(`Added: "${title}"`);
    }

    borrowBook(isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        if (!book) {
            console.log(`Book with ISBN ${isbn} not found.`);
            return;
        }
        if (!book.isAvailable) {
            console.log(`"${book.title}" is already borrowed.`);
            return;
        }
        book.isAvailable = false;
        console.log(`Successfully borrowed: "${book.title}"`);
    }

    returnBook(isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        if (!book) {
            console.log(`Book with ISBN ${isbn} not found.`);
            return;
        }
        book.isAvailable = true;
        console.log(`Successfully returned: "${book.title}"`);
    }

    displayBooks() {
        console.log("\n--- Library Catalog ---");
        this.books.forEach(b => {
            console.log(`${b.title} by ${b.author} [ISBN: ${b.isbn}] - ${b.isAvailable ? "Available" : "Borrowed"}`);
        });
    }
}

// Example Usage
const myLibrary = new Library();
myLibrary.addBook("Atomic Habits", "James Clear", "9781847941831");
myLibrary.addBook("Clean Code", "Robert C. Martin", "9780132350884");
myLibrary.borrowBook("9781847941831");
myLibrary.displayBooks();
myLibrary.returnBook("9781847941831");