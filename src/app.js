import { book as newBook } from './modules/book';
import * as storage from './modules/storage';

//app controller
export function library() {
	let bookCollection = [];

	bookCollection = storage.getLibrary();

	const add = (book) => {
		if (bookCollection.some(b => b.title === book.title))
			throw new Error(`Book with title "${book.title}" already exists in library.`);

		bookCollection.push(book);
		storage.saveLibrary(bookCollection);

		console.log(`Book added to library. ${book.getDetails()}`);
	}
	
	const remove = (book) => {
		let bookIndex = bookCollection.indexOf(book);

		if (bookIndex < 0) return;

		bookCollection.splice(bookIndex, 1);
		storage.saveLibrary(bookCollection);

		console.log(`Book removed from library. ${book.getDetails()}`);
	}

	const update = (book, delta) => {
		if (delta.title !== undefined) {
			console.log(`Updating title "${book.title}" to "${delta.title}"`);
			book.title = delta.title;
		}

		if (delta.author !== undefined) {
			console.log(`Updating author "${book.author}" to "${delta.author}"`);
			book.author = delta.author;
		}

		if (delta.pageCount !== undefined) {
			console.log(`Updating page count "${book.pageCount}" to "${delta.pageCount}"`);
			book.pageCount = delta.pageCount;
		}

		if (delta.read !== undefined) {
			console.log(`Updating book read status "${book.read}" to "${delta.read}"`);
			book.read = delta.read;
		}

		storage.saveLibrary(bookCollection);
	}

	const printCollection = () => {
		if (bookCollection <= 0) {
			console.log('Library is empty!');
			return;
		}

		console.log('printing library...');
		bookCollection.forEach(book => console.log(`"${book.title}" by ${book.author}`));
	}

	const getBookCollection = () => {
		return bookCollection;
	}

	return {
		add,
		remove,
		update,
		printCollection,
		getBookCollection,
	}
}

