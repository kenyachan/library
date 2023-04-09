import { book as newBook } from './modules/book';

//app controller
export function library() {
	const bookCollection = [];

	const add = (book) => {
		if (bookCollection.some(b => b.title === book.title))
			throw new Error(`Book with title "${book.title}" already exists in library.`);

		bookCollection.push(book);
		console.log(`"${book.title}" added to library.`);
	}
	
	const remove = (book) => {
		let bookIndex = bookCollection.indexOf(book);

		if (bookIndex < 0) return;

		bookCollection.splice(bookIndex, 1);
		console.log(`Book "${book.title}" removed from library`);
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
		printCollection,
		getBookCollection,
	}
}

