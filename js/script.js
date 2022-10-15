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



const libraryWidget = document.querySelector('.library-widget');
const addBookTile = document.querySelector('.add-book-tile');
const modalOverlay = document.querySelector('.modal-widget > .overlay');
const modalForm = document.querySelector('.modal-widget > #add-book-form');
const modalCancel = document.querySelector('.modal-widget #cancel-button');

const addBookButton = document.querySelector('#add-book-form button#add-book');
const readStateSwitch = document.querySelector('#add-book-form input[type="checkbox"]')


addBookTile.addEventListener('click', openModal);
modalOverlay.addEventListener('click', toggleModal);
modalCancel.addEventListener('click', closeModal);


addBookButton.addEventListener('click', () => {
    addBookToLibrary();
    closeModal();
});
    
// modalForm.addEventListener('submit', () => alert('Form Submitted!'));

function toggleModal() {
    modalOverlay.classList.toggle('active');
    modalForm.classList.toggle('active');
}

function openModal() {
    modalOverlay.classList.add('active');
    modalForm.classList.add('active');
}

function closeModal() {
    modalOverlay.classList.remove('active');
    modalForm.classList.remove('active');
    modalForm.reset();
}


function addBookToLibrary() {
    
    const book = new MyBook(readStateSwitch.checked);

    book.id = myLibrary.length === 0 ? 0 : myLibrary[myLibrary.length - 1].id + 1;
    book.title = bookTitle.value;
    book.author = bookAuthor.value;
    book.pageCount = Number(pageCount.value);
    
    myLibrary.push(book);

    displayBook(book);
}


function displayBook(book) {
    let bookTile = createBookTile(book);

    bookTile.dataset.index = book.id;

    let deleteButton = bookTile.querySelector('.book-user-details > button');

    deleteButton.addEventListener('click', () => {
        let index = myLibrary.map(book => book.id).indexOf(Number(bookTile.dataset.index));

        myLibrary.splice(index, 1);
        libraryWidget.removeChild(bookTile);

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
    if (switchState === true)
        toggleSwitch.setAttribute('checked', true);

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