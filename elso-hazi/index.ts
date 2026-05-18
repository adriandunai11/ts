class Book {
    id: string;
    title: string;
    author: string;
    price: number;

    constructor(id: string, title: string, author: string, price: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

class Library {
    books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        this.books.push(book);

        console.log(`A könyv sikeresen hozzáadva: ${book.title}`);
    }

    removeBook(id: string): void {
        const bookIndex = this.books.findIndex(book => book.id === id);

        if (bookIndex !== -1) {
            const removeBook = this.books.splice(bookIndex, 1)[0];
            console.log(`A könyv sikeresen eltávolítva: ${removeBook.title}`);
        } else {
            console.log("Nem található könyv ezzel az azonosítóval.");
        }
    }

    findBookById(id: string): Book | undefined {
        return this.books.find(book => book.id === id);
    }

    listAllBooks(): void {
        if (this.books.length === 0) {
            console.log("A könyvtár üres.");
            return;
        }

        console.log("A könyvtárban található könyvek:");

        this.books.forEach(book => {
            console.log(`ID: ${book.id}, Cím: ${book.title}, Szerző: ${book.author}, Ár: ${book.price} Ft`);
        });
    }
}

class User {
    userId: string;
    name: string;
    email: string;

    constructor(userId: string, name: string, email: string) {
        this.userId = userId;
        this.name = name;
        this.email = email;
    }

    borrowBook (library: Library, bookId: string): void {
        const book = library.findBookById(bookId);

        if (book) {
            console.log(`${this.name} kikölcsönözte ezt a könyvet: ${book.title}`);
            library.removeBook(bookId);
        } else {
            console.log("A keresett könyv nem található a könyvtárban.");
        }
    }
}

const library = new Library();
library.listAllBooks();

const book1 = new Book("1", "Teszt könyv", "Teszt Szerző", 3500);
library.addBook(book1);

library.listAllBooks();

const user = new User("u1", "Teszt Felhasználó", "teszt@example.com");

user.borrowBook(library, "1");

library.listAllBooks();