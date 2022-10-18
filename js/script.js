const addTestData = true;

let myLibrary = [];

function Book(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
}

function MyBook(read = false) {
    this.read = read;
    this.id = -1;
}

MyBook.prototype = Object.create(Book.prototype);

MyBook.prototype.toggleReadStatus = function () {
    this.read = this.read === true ? false : true;
};

const modal = (() => {
    const _overlay = document.querySelector('.modal-widget > .overlay');
    const _form = document.querySelector('.modal-widget > #add-book-form');
    const _cancelButton = document.querySelector('.modal-widget #cancel-button');

    const toggle = () => {
        _overlay.classList.toggle('active');
        _form.classList.toggle('active');
    };

    const open = () => {
        _overlay.classList.add('active');
        _form.classList.add('active');
    };

    const close = () => {
        _overlay.classList.remove('active');
        _form.classList.remove('active');
        _form.reset();
    };

    // bind events
    _overlay.addEventListener('click', toggle);
    _cancelButton.addEventListener('click', close);

    // public API
    return {
        toggle, open, close,
    };
})();


const libraryWidget = document.querySelector('.library-widget');
const addBookTile = document.querySelector('.add-book-tile');

const addBookButton = document.querySelector('#add-book-form button#add-book');
const readStateSwitch = document.querySelector('#add-book-form input[type="checkbox"]')


addBookTile.addEventListener('click', () => modal.open());


addBookButton.addEventListener('click', () => {
    let book = addBookToLibrary();
    displayBook(book);
    modal.close();
});


function addBookToLibrary() {
    const book = new MyBook(readStateSwitch.checked);

    book.id = myLibrary.length === 0 ? 0 : myLibrary[myLibrary.length - 1].id + 1;
    book.title = bookTitle.value;
    book.author = bookAuthor.value;
    book.pageCount = Number(pageCount.value);
    
    myLibrary.push(book);

    return book;
}


function displayBook(book) {
    let bookTile = createBookTile(book);

    bookTile.dataset.index = book.id;

    let deleteButton = bookTile.querySelector('.book-user-details > button');
    let readStateSwitch = bookTile.querySelector('.book .switch-widget input[type="checkbox"]');

    deleteButton.addEventListener('click', () => {
        let index = myLibrary.map(book => book.id).indexOf(Number(bookTile.dataset.index));

        myLibrary.splice(index, 1);
        libraryWidget.removeChild(bookTile);

    });

    readStateSwitch.addEventListener('change', () => {
        let index = myLibrary.map(book => book.id).indexOf(Number(bookTile.dataset.index));

        myLibrary[index].toggleReadStatus();
    });

    libraryWidget.insertBefore(bookTile, addBookTile.nextElementSibling);
}

function displayBooks() {
    let reversedMyLibrary = myLibrary.map(obj => ({...obj}));
    reversedMyLibrary = reversedMyLibrary.reverse();

    reversedMyLibrary.forEach(book => {
        displayBook(book);
    });
}

// creates a book tile
function createBookTile(newBook) {
    let bookTile = document.createElement('div');
    let bookDetail = createBookDetails(newBook);
    let bookUserDetails = document.createElement('section'); 
    let switchWidget = createSwitchWidget(newBook.read);
    let deleteButton = document.createElement('button');
    
    deleteButton.setAttribute('type', 'button');
    deleteButton.textContent = 'Delete';

    deleteButton.classList.add('delete-button');
    bookTile.classList.add('tile');
    bookTile.classList.add('book');
    bookUserDetails.classList.add('book-user-details');

    bookUserDetails.appendChild(switchWidget);
    bookUserDetails.appendChild(deleteButton);

    bookTile.appendChild(bookDetail);
    bookTile.appendChild(bookUserDetails);
    
    return bookTile;
}

function createBookDetails(book) {
    let bookDetail = document.createElement('section');
    
    let title = document.createElement('p');
    let author = document.createElement('p');
    let pageCount = document.createElement('p');

    bookDetail.classList.add('book-details');
    title.classList.add('book-title');
    author.classList.add('book-author');
    pageCount.classList.add('book-page-count');

    bookDetail.appendChild(title);
    bookDetail.appendChild(author);
    bookDetail.appendChild(pageCount);

    title.textContent = book.title;
    author.textContent = book.author;
    pageCount.textContent = book.pageCount;

    return bookDetail;
}

function createSwitchWidget(switchState = false) {
    let switchWidget = document.createElement('div');
    let toggleSwitch = document.createElement('input');
    let switchLabel = document.createElement('label');
    let switchLabelOn = document.createElement('span');
    let switchLabelOff = document.createElement('span');

    switchWidget.classList.add('switch-widget');
    switchLabelOff.classList.add('off');
    switchLabelOn.classList.add('on');

    toggleSwitch.setAttribute('type', 'checkbox');
    toggleSwitch.setAttribute('name', 'readBook');
    toggleSwitch.checked = switchState;


    switchWidget.appendChild(toggleSwitch);
    switchWidget.appendChild(switchLabel);

    switchLabel.appendChild(switchLabelOn);
    switchLabel.appendChild(switchLabelOff);

    switchLabelOn.textContent = 'Read';
    switchLabelOff.textContent = 'Not Read';

    return switchWidget;
}



// Tests

if (addTestData === true) {
    addTestBooks();
    displayBooks();
}

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

    let hpAuthor = "J.K. Rowling";
    
    bookTitles.forEach(title => {
        let book = new MyBook(true);

        book.id = myLibrary.length === 0 ? 0 : myLibrary[myLibrary.length - 1].id + 1;
        book.title = title;
        book.author = hpAuthor;
        book.pageCount = 250;

        myLibrary.push(book);
    });
}