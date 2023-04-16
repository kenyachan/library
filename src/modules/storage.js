import { book as newBook } from './book';

export function saveLibrary(bookCollection) {
	localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
}

export function getLibrary() {
	let bookCollection = JSON.parse(localStorage.getItem('bookCollection') || '[]');
	bookCollection = bookCollection.map(book => 
		Object.assign(newBook(), book)
	);

	return bookCollection;
}
