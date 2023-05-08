// export const headerElement = () => {
// 	const element = document.createElement('header');

// 	const page = document.createElement('div');
// 	page.classList.add('page');
// 	element.appendChild(page);

// 	const headerTitle = document.createElement('p');
// 	headerTitle.textContent = 'My Library';
// 	headerTitle.classList.add('header-title');
// 	page.appendChild(headerTitle);

// 	const headerTagline = document.createElement('p');
// 	headerTagline.textContent = 'Books I have read and planned to read';
// 	headerTagline.classList.add('header-tagline');
// 	page.appendChild(headerTagline);

// 	return element;
// }

// export const libraryElement = () => {
// 	const element = document.createElement('main');

// 	const page = document.createElement('div');
// 	page.classList.add('page');
// 	element.appendChild(page);

// 	const addBookTile = document.createElement('div');
// 	addBookTile.classList.add('tile', 'addButton');
// 	addBookTile.textContent = '+';
// 	page.appendChild(addBookTile);

// 	return element;
// }

// export const footerElement = () => {
// 	const element = document.createElement('footer');

// 	const page = document.createElement('div');
// 	page.classList.add('page');
// 	element.appendChild(page);

// 	const authorWidget = document.createElement('div');
// 	authorWidget.classList.add('author-widget');

// 	const authorTextElement = document.createElement('p');
// 	authorTextElement.textContent = 'Created by ';

// 	const authorLink = document.createElement('a');
// 	const link = 'https://github.com/kenyachan';
// 	const author = 'Kenya Chan';
// 	authorLink.setAttribute('href', link);
// 	authorLink.setAttribute('target', '_blank');
// 	authorLink.setAttribute('rel', 'noopener noreferrer');
// 	authorLink.textContent = author;
// 	authorTextElement.appendChild(authorLink);

// 	authorWidget.appendChild(authorTextElement);

// 	page.appendChild(authorWidget);

// 	return element;
// }

export const bookTileElement = (title, author, pageCount, read) => {
	const element = document.createElement('div');
	element.classList.add('book', 'tile');

	const titleText = document.createElement('p');
	titleText.classList.add('tileFont-title');
	titleText.textContent = title;
	element.appendChild(titleText);

	const authorText = document.createElement('p');
	authorText.classList.add('tileFont-normal');
	authorText.textContent = author;
	element.appendChild(authorText);

	const pageCountText = document.createElement('p');
	pageCountText.classList.add('tileFont-normal');
	pageCountText.textContent = pageCount;
	element.appendChild(pageCountText);

	element.appendChild(readSwitchWidget(read));

	return element;
}

// export const modifyBookModal = (type) => {
// 	const modal = document.createElement('dialog');
// 	modal.classList.add('modal-widget');

// 	// modal.appendChild(modalOverlay());
// 	modal.appendChild(modalDialog(type));

// 	// function modalOverlay() {
// 	// 	const overlay = document.createElement('div');
// 	// 	overlay.classList.add('overlay');

// 	// 	return overlay;
// 	// }

// 	// function modalDialog(type) {
// 	// 	let modalTitleText;

// 	// 	if (type === 'add')
// 	// 		modalTitleText = 'Add a book';

// 	// 	if (type === 'update')
// 	// 		modalTitleText = "Update book's details";

// 	// 	const modalDialog = document.createElement('div');
// 	// 	modalDialog.classList.add('modal-dialog');

// 	// 	// dialog stuff here
// 	// 	const modalTitle = document.createElement('p');
// 	// 	modalTitle.classList.add('dialog', 'title');
// 	// 	modalTitle.textContent = modalTitleText;
// 	// 	modalDialog.appendChild(modalTitle);

// 	// 	const addBookForm = document.createElement('form');
// 	// 	modalDialog.appendChild(addBookForm);

// 	// 	addBookForm.appendChild(createBookTitleInput());
// 	// 	addBookForm.appendChild(createAuthorInput());
// 	// 	addBookForm.appendChild(createPageCountInput());
// 	// 	addBookForm.appendChild(readSwitchWidget());

// 	// 	addBookForm.appendChild(createSubmitButton(type));
// 	// 	addBookForm.appendChild(createCancelButton());
// 	// 	if (type === 'update')
// 	// 		addBookForm.appendChild(createRemoveButton());
		
// 	// 	return modalDialog;
// 	// }

// 	// function createBookTitleInput() {
// 	// 	const element = document.createElement('div');
// 	// 	element.classList.add('inputItem');

// 	// 	const label = document.createElement('label');
// 	// 	label.setAttribute('for', 'bookTitle');
// 	// 	label.textContent = 'Title: ';
// 	// 	element.appendChild(label);

// 	// 	const input = document.createElement('input');
// 	// 	input.setAttribute('type', 'text');
// 	// 	input.setAttribute('name', 'bookTitle');
// 	// 	input.setAttribute('placeholder', "Harry Potter and the Philisopher's Stone");
// 	// 	input.id = 'bookTitle';
// 	// 	input.required = true;
// 	// 	element.appendChild(input);

// 	// 	return element;
// 	// }

// 	// function createAuthorInput() {
// 	// 	const element = document.createElement('div');
// 	// 	element.classList.add('inputItem');

// 	// 	const label = document.createElement('label');
// 	// 	label.setAttribute('for', 'bookAuthor');
// 	// 	label.textContent = 'Author: ';
// 	// 	element.appendChild(label);

// 	// 	const input = document.createElement('input');
// 	// 	input.setAttribute('type', 'text');
// 	// 	input.setAttribute('name', 'bookAuthor');
// 	// 	input.setAttribute('placeholder', 'J.K Rowling');
// 	// 	input.id = 'bookAuthor';
// 	// 	input.required = true;
// 	// 	input.setAttribute('pattern', '[^0-9]+');
// 	// 	element.appendChild(input);

// 	// 	return element;
// 	// }

// 	// function createPageCountInput() {
// 	// 	const element = document.createElement('div');
// 	// 	element.classList.add('inputItem');

// 	// 	const label = document.createElement('label');
// 	// 	label.setAttribute('for', 'bookPageCount');
// 	// 	label.textContent = 'Page Count: ';
// 	// 	element.appendChild(label);

// 	// 	const input = document.createElement('input');
// 	// 	input.setAttribute('type', 'number');
// 	// 	input.setAttribute('name', 'bookPageCount');
// 	// 	input.setAttribute('placeholder', '256');
// 	// 	input.setAttribute('min', '1');
// 	// 	input.id = 'bookPageCount';
// 	// 	input.required = 'required';
// 	// 	element.appendChild(input);

// 	// 	return element;
// 	// }

// 	// function createSubmitButton(type) {
// 	// 	const button = document.createElement('button');
// 	// 	button.setAttribute('type', 'submit');
// 	// 	button.id = 'modal-addBook';

// 	// 	if (type === 'add') {
// 	// 		button.textContent = 'Add';
// 	// 	}

// 	// 	if (type === 'update') {
// 	// 		button.textContent = 'Update';
// 	// 	}

// 	// 	return button;
// 	// }

// 	// function createCancelButton() {
// 	// 	const button = document.createElement('button');
// 	// 	button.setAttribute('type', 'button');
// 	// 	button.id = 'modal-cancel';
// 	// 	button.textContent = 'Cancel';
		
// 	// 	return button;
// 	// }

// 	// function createRemoveButton() {
// 	// 	const button = document.createElement('button');
// 	// 	button.setAttribute('type', 'button');
// 	// 	button.id = 'modal-removeBook';
// 	// 	button.textContent = 'Remove';

// 	// 	return button;
// 	// }

// 	// return modal;
// }

const readSwitchWidget = (switchState) => {
	const switchWidget = document.createElement('div');
	switchWidget.classList.add('switch-widget');

	const switchInput = document.createElement('input');
	switchInput.setAttribute('type', 'checkbox');
	switchInput.setAttribute('name', 'readBook');
	switchInput.checked = switchState;
	switchWidget.appendChild(switchInput);

	const switchLabel = document.createElement('label');

	const readLabel = document.createElement('span');
	readLabel.textContent = 'Read';
	readLabel.classList.add('on');
	switchLabel.appendChild(readLabel);

	const notReadLabel = document.createElement('span');
	notReadLabel.textContent = 'Not read';
	notReadLabel.classList.add('off');
	switchLabel.appendChild(notReadLabel);

	switchWidget.appendChild(switchLabel);

	return switchWidget;
}
