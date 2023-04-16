import * as create from './modules/elements';
import { book } from './modules/book';

export const screenController = (application) => {
	const library = application;
	const bodyElement = document.querySelector('body');

	const header = (() => {
		const headerElement = create.headerElement();
		bodyElement.appendChild(headerElement);
	})();

	const main = (() => {
		const libraryElement = create.libraryElement();
		bodyElement.appendChild(libraryElement);

		const addBookButton = libraryElement.querySelector('.tile.addButton');
		addBookButton.addEventListener('click', e => openModal());

		library.getBookCollection().forEach(book => {
			let bookTile = createBookTile(book);
			insertBookTile(bookTile);
		});

		function createBookTile(book) {
			let bookTile = create.bookTileElement(book.title, book.author, book.pageCount, book.read);
			bookTile.addEventListener('click', e => openModal(book, bookTile));

			let readSwitch = bookTile.querySelector('.switch-widget input[name="readBook"]');
			readSwitch.addEventListener('click', e => e.stopPropagation());
			readSwitch.addEventListener('change', e => toggleRead(e, book, bookTile));

			return bookTile;
		}

		function toggleRead(e, bookObj, bookTile) {
			let bookDelta = book();
			bookDelta.read = e.currentTarget.checked;
			library.update(bookObj, bookDelta);

			bookObj.read = e.currentTarget.checked;
		}

		function insertBookTile(bookTile) {
			const pageElement = libraryElement.querySelector('.page');
			pageElement.insertBefore(bookTile, addBookButton);
		}

		function openModal(book, bookTile) {
			let type = book === undefined ? 'add' : 'update';
			
			const modalElement = create.modifyBookModal(type);
			bodyElement.appendChild(modalElement);

			document.addEventListener('keydown', e => {
				if (event.key === 'Escape')
					closeModal();
			}, { once: true });

			initialiseOverlay(modalElement);

			const form = modalElement.querySelector('form');
			initialiseCancelButton(form);
			
			if (type === 'add')	initialiseAddForm(form);
			if (type === 'update') {
				initialiseRemoveButton(form, book, bookTile);
				initialiseUpdateForm(form, book, bookTile);
			}

			return modalElement;
		}

		function initialiseOverlay(modalElement) {
			const overlay = modalElement.querySelector('.overlay');
			overlay.addEventListener('click', e => closeModal());
		}

		function initialiseRemoveButton(modalElement, book, bookTile) {
			const removeButton = modalElement.querySelector('#modal-removeBook');

			removeButton.addEventListener('click', e => {
				library.remove(book);
				bookTile.remove();
				closeModal();
			});
		}

		function initialiseCancelButton(form) {
			const cancelButton = form.querySelector('#modal-cancel');
			cancelButton.addEventListener('click', e => closeModal());
		}

		function initialiseAddForm(form) {
			const titleInput = form.querySelector('input[name="bookTitle"]');

			addValidationMessages(form);
			titleInput.focus();

			form.addEventListener('submit', e => {
				e.preventDefault(); // stop submit action

				addBook(form);
				closeModal();
			});
		}

		function addBook(form) {
			const titleInput = form.querySelector('input[name="bookTitle"]');
			const authorInput = form.querySelector('input[name="bookAuthor"]');
			const pageCountInput = form.querySelector('input[name="bookPageCount"]');
			const readStatusCheckBox = form.querySelector('input[name="readBook"]');

			let newBook = book(titleInput.value, authorInput.value, parseInt(pageCountInput.value), readStatusCheckBox.checked);
			library.add(newBook);

			let newBookTile = createBookTile(newBook);
			insertBookTile(newBookTile);
		}

		function initialiseUpdateForm(form, bookObj, bookTile) {
			const titleInput = form.querySelector('input[name="bookTitle"]');
			const authorInput = form.querySelector('input[name="bookAuthor"]');
			const pageCountInput = form.querySelector('input[name="bookPageCount"]');
			const readStatusCheckBox = form.querySelector('input[name="readBook"]');

			titleInput.value = bookObj.title;
			authorInput.value = bookObj.author;
			pageCountInput.value = bookObj.pageCount;
			readStatusCheckBox.checked = bookObj.read;

			addValidationMessages(form);

			form.addEventListener('submit', e => {
				e.preventDefault();
				
				let bookDelta = updateBookObj(form, bookObj);
				library.update(bookObj, bookDelta);

				let updatedBookTile = createBookTile(bookObj);
				bookTile.replaceWith(updatedBookTile);

				closeModal();
			});
		}
		
		function updateBookObj(form, bookObj) {
			const titleInput = form.querySelector('input[name="bookTitle"]');
			const authorInput = form.querySelector('input[name="bookAuthor"]');
			const pageCountInput = form.querySelector('input[name="bookPageCount"]');
			const readStatusCheckBox = form.querySelector('input[name="readBook"]');

			const bookDelta = book();
			
			bookDelta.title = bookObj.title !== titleInput.value ?
				titleInput.value : undefined;
			bookDelta.author = bookObj.author !== authorInput.value ?
				authorInput.value : undefined;
			bookDelta.pageCount = bookObj.pageCount !== parseInt(pageCountInput.value) ?
				parseInt(pageCountInput.value) : undefined;
			bookDelta.read = bookObj.read !== readStatusCheckBox.checked ?
				readStatusCheckBox.checked : undefined;

			return bookDelta;
		}

		function addValidationMessages(form) {
			const titleInput = form.querySelector('input[name="bookTitle"]');
			const authorInput = form.querySelector('input[name="bookAuthor"]');
			const pageCountInput = form.querySelector('input[name="bookPageCount"]');

			addTitleValidationMessage(titleInput);
			addAuthorValidationMessage(authorInput);
			addPageCountValidationMessage(pageCountInput);
		}

		function addTitleValidationMessage(titleInput) {
			if (titleInput.value === undefined) 
				titleInput.setCustomValidity('Please enter the book title.');

			titleInput.addEventListener('input', event => {
				if (titleInput.validity.valueMissing) {
					titleInput.setCustomValidity('Please enter the book title.');
				} else {
					titleInput.setCustomValidity('');
				}
			});
		}

		function addAuthorValidationMessage(authorInput) {
			if (authorInput.value === undefined)
				authorInput.setCustomValidity('Please enter an author.');

			authorInput.addEventListener('input', event => {
				if (authorInput.validity.valueMissing) {
					authorInput.setCustomValidity('Please enter an author.');
				} else if (authorInput.validity.patternMismatch) {
					authorInput.setCustomValidity('Author name cannot contain numbers.');
				} else {
					authorInput.setCustomValidity('');
				}
			});
		}

		function addPageCountValidationMessage(pageCountInput) {
			if (pageCountInput.value === undefined)
				pageCountInput.setCustomValidity('Please enter the number of pages.');

			pageCountInput.addEventListener('input', event => {
				if (pageCountInput.validity.valueMissing) {
					pageCountInput.setCustomValidity('Please enter the number of pages.');
				} else if (pageCountInput.validity.rangeUnderflow) {
					pageCountInput.setCustomValidity('Please enter a number greater than 0.');
				} else {
					pageCountInput.setCustomValidity('');
				}
			});
		}

		function closeModal() {
			const modalElement = bodyElement.querySelector('.modal-widget');

			if (modalElement) modalElement.remove();
		}
	})();

	const footer = (() => {
		const footerElement = create.footerElement();
		bodyElement.appendChild(footerElement);
	})();
}
