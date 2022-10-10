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

const addBookButton = document.querySelector('.modal-widget #add-book');
const addBookForm = document.querySelector('#add-book-form');

const libraryWidget = document.querySelector('.library-widget');

const addBookCard = document.querySelector('.add-book-card');
const modalDialog = document.querySelector('.modal-dialog');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalButton = document.querySelector('.close-modal');

addBookCard.addEventListener('click', toggleModal);
modalOverlay.addEventListener('click', closeAddBookForm);
closeModalButton.addEventListener('click', closeAddBookForm);

addBookButton.addEventListener('click', () => {
    addBookToLibrary();
    closeAddBookForm();
});


function toggleModal() {
    modalDialog.classList.toggle('active');
    modalOverlay.classList.toggle('hidden');
}

function closeAddBookForm() {
    addBookForm.reset();
    toggleModal();
}

function addBookToLibrary() {
    let book = new MyBook(readBook.checked, 0);

    book.cover = './book-covers/placeholder-icon.png'
    book.title = bookTitle.value;
    book.author = bookAuthor.value;
    book.pages = pageCount.value;

    myLibrary.unshift(book);

    addToDisplay(book);

}

function addToDisplay(book) {
    let bookCard = document.createElement('div');
    let cover = document.createElement('img');
    let bookDetails = document.createElement('div');
    let title = document.createElement('p');
    let author = document.createElement('p');
    let pageCount = document.createElement('p');
    let readIndicator = document.createElement('div');
    
    bookCard.appendChild(cover);
    bookCard.appendChild(bookDetails);

    bookDetails.appendChild(title);
    bookDetails.appendChild(author);
    bookDetails.appendChild(pageCount);
    bookDetails.appendChild(readIndicator);
    
    bookCard.classList.add('book');
    bookDetails.classList.add('book-details');
    title.classList.add('title');
    author.classList.add('author');
    pageCount.classList.add('page-count');
    readIndicator.classList.add('read-indicator');
    
    cover.src = book.cover;
    title.textContent = book.title;
    author.textContent = book.author;
    pageCount.textContent = `Pages: ${book.pages}`;
    readIndicator.textContent = book.read;

    libraryWidget.insertBefore(bookCard, addBookCard.nextElementSibling);
}


function displayBooks() {
    let reverseLibrary = myLibrary.map( book => ({...book}));
    
    reverseLibrary.reverse();
    reverseLibrary.forEach((book) => {
        addToDisplay(book);
    });
}


addTestBooks();
displayBooks();

function addTestBooks() {
    const bookTitles = [
        "Harry Potter and the Philosopher's Stone",
        "Harry Potter and the Chamber of Secrets",
        "Harry Potter and the Prisoner of Azkaban",
        "Harry Potter and the Goblet of Fire",
        "Harry Potter and the Order of the Phoenix",
        "Harry Potter and the Half-Blood Prince",
        "Harry Potter and the Deathly Hallows"
    ]

    const bookCovers = [
        "./book-covers/philsophers-stone-uk-childrens-edition-600x0-c-default.jpeg",
        "./book-covers/chamber-of-secrets-uk-childrens-edition-600x0-c-default.jpeg",
        "./book-covers/prisoner-of-azkaban-uk-childrens-edition-600x0-c-default.jpeg",
        "./book-covers/goblet-of-fire-uk-childrens-edition-1050x0-c-default.jpeg",
        "./book-covers/order-of-the-phoenix-uk-childrens-edition-600x0-c-default.jpeg",
        "./book-covers/half-blood-prince-uk-childrens-edition-600x0-c-default.jpeg",
        "./book-covers/deathly-hallows-uk-childrens-edition-600x0-c-default.jpeg"
    ]

    let hpAuthor = "J.K. Rowling";
    
    for (let i = 0; i < 7; i++) {
        let book = new MyBook(true, 250);

        book.title = bookTitles[i];
        book.author = hpAuthor;
        book.pages = 250;
        book.cover = bookCovers[i];
        myLibrary.push(book);
    }
}