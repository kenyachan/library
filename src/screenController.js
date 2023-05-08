import { newBookTile } from './modules/bookTile';
import { book } from './modules/book';
import { newAddModalButtons, newUpdateModalButtons } from './modules/modal';

export const screenController = (application) => {
	const library = application;

	const libraryList = (() => {
		const libraryElement = document.querySelector('#libraryList');

		const addBookButton = libraryElement.querySelector('.tile.addButton');
		addBookButton.addEventListener('click', e => openModal());

		library.getBookCollection().forEach(book => {
			let bookTile = createBookTile(book);
			insertBookTile(bookTile);
		});

		function createBookTile(book) {
			let bookTile = newBookTile();

			const tileTitle = bookTile.querySelector('.tile-title');
			const tileAuthor = bookTile.querySelector('.tile-author');
			const tilePageCount = bookTile.querySelector('.tile-pageCount');
			const tileReadState = bookTile.querySelector('input[type="checkbox"]');

			tileTitle.textContent = book.title;
			tileAuthor.textContent = book.author;
			tilePageCount.textContent = book.pageCount;
			tileReadState.checked = book.read;

			bookTile.addEventListener('click', e => openModal(book, bookTile));

			let readSwitch = bookTile.querySelector('.switch-widget input[name="bookRead"]');
			readSwitch.addEventListener('click', e => e.stopPropagation());
			readSwitch.addEventListener('change', e => toggleRead(e, book));

			return bookTile;
		}

		function toggleRead(e, bookObj) {
			let bookDelta = book();
			bookDelta.read = e.currentTarget.checked;
			library.update(bookObj, bookDelta);

			bookObj.read = e.currentTarget.checked;
		}

		function insertBookTile(bookTile) {
			libraryElement.insertBefore(bookTile, addBookButton);
		}

		function openModal(bookObj, bookTile) {
			const modalDialog = document.querySelector('.modal');
			const modalDialogTitle = modalDialog.querySelector('#modal-title');
			const modalDialogForm = modalDialog.querySelector('.modal form');
			
			addModalButtons(bookObj, modalDialogForm);
			initialiseCancelButton(modalDialogForm);
			
			if (bookObj !== undefined) {	// update book
				modalDialogTitle.textContent = 'Update Book';
				populateFormInputs(bookObj, modalDialogForm);

				initialiseRemoveButton(modalDialog, bookObj, bookTile);

				modalDialogForm.addEventListener('submit', e => {
					let bookDelta = updateBookObj(modalDialogForm, bookObj);
					library.update(bookObj, bookDelta);
	
					let updatedBookTile = createBookTile(bookObj);
					bookTile.replaceWith(updatedBookTile);
	
					closeModal();
				});
			} else {	// add book
				modalDialogTitle.textContent = 'Add Book';
				populateFormInputs(book('',''), modalDialogForm);

				modalDialogForm.addEventListener('submit', e => {
					addBook(modalDialogForm);
					closeModal();
				});
			}

			modalDialog.showModal();
		}

		function addModalButtons(bookObj, form) {
			const modalButtonsContainer = form.querySelector('#modal-buttons');

			if (bookObj === undefined) {
				modalButtonsContainer === null ? form.appendChild(newAddModalButtons()): modalButtonsContainer.replaceWith(newAddModalButtons());
			} else {
				modalButtonsContainer === null ? form.appendChild(newUpdateModalButtons()): modalButtonsContainer.replaceWith(newUpdateModalButtons());
			}
		}

		function populateFormInputs(bookObj, form) {
			const titleInput = form.querySelector('input[name="bookTitle"]');
			const authorInput = form.querySelector('input[name="bookAuthor"]');
			const pageCountInput = form.querySelector('input[name="bookPageCount"]');
			const readStatusCheckBox = form.querySelector('input[name="bookRead"]');

			titleInput.value = bookObj.title;
			authorInput.value = bookObj.author;
			pageCountInput.value = bookObj.pageCount;
			readStatusCheckBox.checked = bookObj.read;

			addValidationMessages(form);
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

		function addBook(form) {
			const titleInput = form.querySelector('input[name="bookTitle"]');
			const authorInput = form.querySelector('input[name="bookAuthor"]');
			const pageCountInput = form.querySelector('input[name="bookPageCount"]');
			const readStatusCheckBox = form.querySelector('input[name="bookRead"]');

			let newBook = book(titleInput.value, authorInput.value, parseInt(pageCountInput.value), readStatusCheckBox.checked);
			library.add(newBook);

			let newBookTile = createBookTile(newBook);
			insertBookTile(newBookTile);
		}
		
		function updateBookObj(form, bookObj) {
			const titleInput = form.querySelector('input[name="bookTitle"]');
			const authorInput = form.querySelector('input[name="bookAuthor"]');
			const pageCountInput = form.querySelector('input[name="bookPageCount"]');
			const readStatusCheckBox = form.querySelector('input[name="bookRead"]');

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
			const modalDialog = document.querySelector('.modal');

			modalDialog.close();
		}
	})();
}
