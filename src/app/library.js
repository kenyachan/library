import * as storage from './storage.js';

class Library {
	constructor() {
		this.bookCollection = storage.getBookCollection();
	}

	add(book) {
		if (!this.bookCollection.has(book.title)) {
			this.bookCollection.set(book.title, book);

			console.log(`Book added to the library: ${book.title} by ${book.author}`);
			storage.save(this.bookCollection);
		}
	}

	get(title) {
		return this.bookCollection.get(title);
	}

	remove(title) {
		const deletedBook = this.bookCollection.delete(title);
		if (deletedBook) {
			console.log(`Book removed from the library : ${title}`);
			storage.save(this.bookCollection);
		}

		return deletedBook;
	}

	getBooks() {
		return this.bookCollection;
	}
}

export { Library };
