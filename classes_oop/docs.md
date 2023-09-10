# Classes

## Book Class
This class represents a generic book with properties such as title, author, ISBN, price, and availability.

## FictionBook Class
This class extends the Book class and includes an additional property called genre. It represents fiction books.

## NonFictionBook Class
This class also extends the Book class but has a property called subject. It represents non-fiction books.

## User Class
This class represents a user with properties including name, email, and a user ID.

## Cart Class
This class represents a shopping cart that can hold books.

It has methods to **addBook** (add a book to the cart), **removeBook** (remove a book from the cart), and **calculateTotalPrice** (calculate the total price of all books in the cart).

It prevents adding books with availability of 0 or less.

## Order Class
This class represents an order placed by a user.
It includes properties for the user, an array of books, and the total price of the order.

# Example Usage

## Using Book Class
- Create instances of the Book class.
- Create instances of the User class.
- Simulate users adding books to their carts using instances of the Cart class.
- Simulate users placing orders using instances of the Order class.

## Using Different Book Types
- Create instances of FictionBook and NonFictionBook classes to demonstrate polymorphism and inheritance.
- Create instances of the User class.
- Simulate users adding books of different types to their carts using instances of the Cart class.
- Simulate users placing orders using instances of the Order class.

# Key Concepts
- **Inheritance**: FictionBook and NonFictionBook inherit properties and methods from the Book class.
- **Polymorphism**: Different book types can be added to the cart and ordered uniformly.
- **Encapsulation**: Data about books, users, carts, and orders are encapsulated within their respective classes.
