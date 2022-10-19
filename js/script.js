const addTestData = true;

function Book(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
}

// change MyBook to LibraryBook
function MyBook(read = false) {
    this.read = read;
}

MyBook.prototype = Object.create(Book.prototype);

MyBook.prototype.toggleReadStatus = function () {
    this.read = this.read === true ? false : true;
};

const addBookForm = (() => {
    const _overlay = document.querySelector('.modal-widget > .overlay');
    const _form = document.querySelector('.modal-widget > #add-book-form');
    const _cancelButton = document.querySelector('.modal-widget #cancel-button');
    const _addBookButton = document.querySelector('.modal-widget button#add-book');
    const _readStateSwitch = document.querySelector('#add-book-form input[type="checkbox"]')
    const _addBookTile = document.querySelector('.add-book-tile');

    const _addBookToLibrary = () => {
        let newBook = _createBook();
        
        // change this to emit an event and use mediator
        library.add(newBook); 
        close();
    }

    const _createBook = () => {
        const _book = new MyBook(_readStateSwitch.checked);

        // _book.id = myLibrary.length === 0 ? 0 : myLibrary[myLibrary.length - 1].id + 1;

        _book.title = bookTitle.value;
        _book.author = bookAuthor.value;
        _book.pageCount = Number(pageCount.value);
        _book.read = _readStateSwitch.checked;

        return _book;
    }

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
    _addBookButton.addEventListener('click', _addBookToLibrary);
    _addBookTile.addEventListener('click', open);

    // public API
    return {
        toggle, open, close,
    };
})();


const library = (() => {
    const _library = [];

    const _libraryWidget = document.querySelector('.library-widget');
    const _addBookTile = document.querySelector('.add-book-tile');
    

    const add = (book) => {
        _library.push(book);
        _render(book);
    }

    const remove = (book) => {
        _library.splice(_library.indexOf(book), 1);
        
        // remove book from library
        // remove book from 'display'?
    }

    const _render = (book) => {
        let bookTile = _createBookTile(book);

        let deleteButton = bookTile.querySelector('.book-user-details > button');
        let readStateSwitch = bookTile.querySelector('.book .switch-widget input[type="checkbox"]');

        deleteButton.addEventListener('click', (event) => {
            _library.splice(_library.indexOf(book), 1);
            event.target.closest('.tile.book').remove();
        });

        readStateSwitch.addEventListener('change', (event) => {
            book.read = event.target.checked;
            console.log(book);
            console.log(_library);
        });

        _libraryWidget.insertBefore(bookTile, _addBookTile.nextElementSibling);
    }

    const _createBookTile = (book) => {
        let bookTile = document.createElement('div');
        let bookDetail = _createBookDetails(book);
        let bookUserDetails = document.createElement('section'); 
        let switchWidget = _createSwitchWidget(book.read);
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
    
    const _createBookDetails = (book) => {
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
    
    const _createSwitchWidget = (switchState = false) => {
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

    // Change this to emit an event for a mediator to pick up?
    _addBookTile.addEventListener('click', () => addBookForm.open());

    return {
        add, remove,
    }

})();


// Tests

if (addTestData === true) {
    addTestBooks();
    // displayBooks();
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

        // book.id = myLibrary.length === 0 ? 0 : myLibrary[myLibrary.length - 1].id + 1;
        book.title = title;
        book.author = hpAuthor;
        book.pageCount = 250;

        library.add(book);
    });
}