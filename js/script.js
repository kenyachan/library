const addTestData = true;

let libraryWidget = document.querySelector('.library-widget');
let myLibrary = [];


function Book(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
}

function MyBook(read = false) {
    this.read = read;
}

const addBookButton = document.querySelector('.add-book-tile');
const modalOverlay = document.querySelector('.modal-widget > .overlay');
const modalForm = document.querySelector('.modal-widget > #add-book-form');
const modalCancel = document.querySelector('.modal-widget #cancel-button');

addBookButton.addEventListener('click', toggleModal);
modalOverlay.addEventListener('click', toggleModal);
modalCancel.addEventListener('click', toggleModal);

modalForm.addEventListener('submit', () => alert('Form Submitted!'));

function toggleModal() {
    modalOverlay.classList.toggle('active');
    modalForm.classList.toggle('active');
}




// creates an empty book tile
function createBookTile(newBook) {
    let book = document.createElement('div');
    let bookDetail = createBookDetails(newBook);
    let bookUserDetails = document.createElement('section'); 
    let switchWidget = createSwitchWidget(newBook.read);
    let deleteButton = document.createElement('button');
    
    deleteButton.setAttribute('type', 'button');
    deleteButton.textContent = 'Delete';

    book.classList.add('tile');
    book.classList.add('book');
    bookUserDetails.classList.add('book-user-details');

    bookUserDetails.appendChild(switchWidget);
    bookUserDetails.appendChild(deleteButton);

    book.appendChild(bookDetail);
    book.appendChild(bookUserDetails);
    
    return book;
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
 
    myLibrary.forEach((book) => {
        libraryWidget.appendChild(createBookTile(book));
    });
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
    
    for (let i = 0; i < 7; i++) {
        let book = new MyBook(true);

        book.title = bookTitles[i];
        book.author = hpAuthor;
        book.pageCount = 250;
        
        myLibrary.push(book);
    }
}