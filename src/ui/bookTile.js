class BookTile {
	constructor(book) {
		this.book = book;

		this.element = document.createElement('div');
		this.element.classList.add('book', 'tile', 'tile-padding');

		this.element.appendChild(this.#createTitleElement(book.title));
		this.element.appendChild(this.#createAuthorElement(book.author));
		this.element.appendChild(this.#createPagesElement(book.pages))
		this.element.appendChild(this.#createReadSwitch(book.read));
		this.element.appendChild(this.#createRemoveButton());
	}

	#createTitleElement(titleText) {
		const element = document.createElement('p');
		element.classList.add('tile-title');
		element.textContent = titleText;

		return element;
	}

	#createAuthorElement(authorText) {
		const element = document.createElement('p');
		element.classList.add('tile-author');
		element.textContent = authorText;

		return element;
	}

	#createPagesElement(pagesText) {
		const element = document.createElement('p');
		element.classList.add('tile-pages');
		element.textContent = `${pagesText} pages`;

		return element;
	}

	#createReadSwitch(read) {
		const switchElement = document.createElement('div');
		const input = document.createElement('input');
		const label = document.createElement('label');
		const readLabel = document.createElement('span');
		const notReadLabel = document.createElement('span');

		switchElement.classList.add('switch-widget');

		input.setAttribute('type', 'checkbox');
		input.setAttribute('name', 'bookRead');
		input.checked = read ? true : false;

		readLabel.textContent = 'Read';
		readLabel.classList.add('on');

		notReadLabel.textContent = 'Not read';
		notReadLabel.classList.add('off');
	
		label.appendChild(readLabel);
		label.appendChild(notReadLabel);

		switchElement.appendChild(input);
		switchElement.appendChild(label);
		
		return switchElement;
	}

	#createRemoveButton() {
		const button = document.createElement('button');
		button.setAttribute('type', 'button');
		button.classList.add('remove-book-btn');
		button.textContent = 'Remove';

		return button;
	}
}

export { BookTile };
