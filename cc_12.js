//Task 1 - Created Revenue Metric Card
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }

    updateCopies(quantity) {
        this.copies += quantity;
    }
}

class Borrower {
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        this.borrowedBooks.push(book);
    }

    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
        }
    }
}

class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }

    lendBook(borrowerId, isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
        
        if (book && borrower && book.copies > 0) {
            book.updateCopies(-1);
            borrower.borrowBook(book.title);
        }
    }

    returnBook(borrowerId, isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
        
        if (book && borrower) {
            book.updateCopies(1);
            borrower.returnBook(book.title);
        }
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 4);
const borrower1 = new Borrower("Alice Johnson", 201);
const library = new Library();
library.addBook(book1);
library.borrowers.push(borrower1);
library.lendBook(201, 123456);
library.returnBook(201, 123456);
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks);


//Task 2 - Updated Metric Cards via Array Conversion
const metricCardsNodeList = document.querySelectorAll('.metric-card');
const metricCardsArray = Array.from(metricCardsNodeList);

metricCardsArray.forEach(card => {
    
    card.innerHTML = `
        <h3>${card.querySelector('h3').textContent} - Updated</h3>
        <p>${card.querySelector('p').textContent}</p>
    `;
    card.style.backgroundColor = '#f0f0f0';
});


//Task 3 - Implemented Dynamic Inventory List
const inventoryList = document.getElementById('inventoryList');
const addButton = document.getElementById('addButton');
let productCounter = 1;

function addProduct() {
    const productItem = document.createElement('li');
    productItem.setAttribute('class', 'product-item');
    productItem.setAttribute('data-product-id', productCounter);
    productItem.textContent = `Product ${productCounter}`;
    
    productItem.addEventListener('click', function() {
        removeProduct(this);
    });
    
    inventoryList.appendChild(productItem);
    productCounter++;
}

function removeProduct(item) {
    inventoryList.removeChild(item);
}

addButton.addEventListener('click', addProduct);


//Task 4 - Demonstrated Event Bubbling in Customer Section
const customerSection = document.getElementById('customerSection');
const customerCards = document.querySelectorAll('.customer-card');

customerSection.addEventListener('click', function() {
    console.log('Customer section clicked');
});

customerCards.forEach(card => {
    card.addEventListener('click', function(event) {
        console.log('Customer card clicked');
        event.stopPropagation(); 
    });
});
