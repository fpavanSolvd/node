class Book {
    constructor(title, author, isbn, price, availability) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.price = price;
        this.availability = availability;
    }
}


class FictionBook extends Book {
    constructor(title, author, isbn, price, availability, genre) {
        super(title, author, isbn, price, availability);
        this.genre = genre;
    }
}

class NonFictionBook extends Book {
    constructor(title, author, isbn, price, availability, subject) {
        super(title, author, isbn, price, availability);
        this.subject = subject;
    }
}
  
class User {
    constructor(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
    }
}

class Cart {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        if (book.availability > 0) {
            this.books.push(book);
            book.availability--;
            console.log(`Added ${book.title} to the cart.`);
        } else {
            console.log(`${book.title} is out of stock.`);
        }
    }

    removeBook(book) {
        const index = this.books.indexOf(book);

        if (index !== -1) {
            this.books.splice(index, 1);
            book.availability++;
            console.log(`Removed ${book.title} from the cart.`);
        } else {
            console.log(`${book.title} is not in the cart.`);
        }
    }

    calculateTotalPrice() {
        let totalPrice = 0;

        for (const book of this.books) {
            totalPrice += book.price;
        }

        return totalPrice;
    }
}

class Order {
    constructor(user, books, totalPrice) {
        this.user = user;
        this.books = books;
        this.totalPrice = totalPrice;
    }
}


// Example using book class

// Create Book instances
const book1 = new Book("Book 1", "Author 1", "ISBN1", 20, 5);
const book2 = new Book("Book 2", "Author 2", "ISBN2", 15, 3);
const book3 = new Book("Book 3", "Author 3", "ISBN3", 25, 2);

// Create User instances
const user1 = new User("Anna", "anna@example.com", "user123");
const user2 = new User("Tom", "tom@example.com", "user456");

// Simulate users adding books to their carts
// Here we can see how the book and cart classes interact, we are adding instances of the book class to an array inside a cart instance.
const cart1 = new Cart();
cart1.addBook(book1);
cart1.addBook(book2);

const cart2 = new Cart();
cart2.addBook(book2);
cart2.addBook(book3);

// Simulate users placing orders
// Here we can see how the order class interacts with the user, cart and book class. 
// We are placing a user instance inside a order instance, and using a cart instance to get an array of 
// book instances and inserting them into a order instance

const order1 = new Order(user1, cart1.books, cart1.calculateTotalPrice());
console.log(`${user1.name} placed an order with a total price of $${order1.totalPrice}.`);

const order2 = new Order(user2, cart2.books, cart2.calculateTotalPrice());
console.log(`${user2.name} placed an order with a total price of $${order2.totalPrice}.`);



// Example using different book classes to show how we can use polymorphism and inheritance to treat different book types uniformly

// Create Fiction and Non-Fiction Book objects
const fictionBook = new FictionBook("Fiction Book", "Fiction Author", "ISBNF", 20, 5, "Mystery");
const nonFictionBook = new NonFictionBook("Non-Fiction Book", "Non-Fiction Author", "ISBNNF", 15, 3, "History");

// Create User objects
const user3 = new User("Joe", "joe@example.com", "user789");

// Simulate users adding books to their carts
const cart3 = new Cart();
cart3.addBook(fictionBook);
cart3.addBook(nonFictionBook);

// Simulate users placing orders
const order3 = new Order(user3, cart3.books, cart3.calculateTotalPrice());
console.log(`${user3.name} placed an order with a total price of $${order3.totalPrice}.`);





