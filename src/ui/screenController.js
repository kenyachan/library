import { BookTile } from './bookTile.js';
import { Book } from '../app/book.js';
import OdinIcon from './odin.png';
import LibraryIcon from './library.png';

class ScreenController {
	constructor(library) {
		this.#loadHeaderIcon();

		this.library = library;
		this.libraryElement = document.querySelector('#library');
		this.modal = document.querySelector('.modal');

		document.querySelector('#open-modal-btn').
			addEventListener('click', () => this.modal.showModal());
		document.querySelector('#close-modal-btn').
			addEventListener('click', () => this.modal.close());
		document.querySelector('#add-book-btn').
			addEventListener('click', (event) => {
				event.preventDefault();
				this.#addBookToLibrary()
			});

		this.library.getBooks().forEach(book => this.#createBookTile(book));
	}

	#loadHeaderIcon() {
		const headerElement = document.querySelector('#icon-container');

		const odinLogo = new Image();
		odinLogo.src = OdinIcon;

		const libraryLogo = new Image();
		libraryLogo.src = LibraryIcon;

		headerElement.appendChild(odinLogo);
		headerElement.appendChild(libraryLogo);
	}

	#createBookTile(book) {
		const bookTile = new BookTile(book);

		bookTile.element.querySelector('.remove-book-btn').addEventListener(
			'click', () => this.#removeBook(bookTile)
		);

		this.libraryElement.appendChild(bookTile.element);
	}

	#removeBook(bookTile) {
		this.library.remove(bookTile.book.title);
		bookTile.element.remove();
	}

	#addBookToLibrary() {
		const title = document.querySelector('#book-title').value;
		const author= document.querySelector('#book-author').value;
		const pages = document.querySelector('#book-pages').value;
		const read = document.querySelector('#book-read').checked;

		const book = new Book(title, author, pages, read);

		this.library.add(book);
		this.#createBookTile(book);

		document.querySelector('#new-book-form').reset();

		this.modal.close();
	}
}

export { ScreenController };
