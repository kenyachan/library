let myLibrary = [];

function Book(title, cover, author, pages) {
    this.title = title;
    this.cover = cover;
    this.author = author;
    this.pages = pages;
}

function MyBook(read, readPages) {
    this.read = read;
    this.readPages = readPages;
}

MyBook.prototype = Object.create(Book.prototype);

function addBookToLibrary(book) {
    myLibrary.push(book);
}