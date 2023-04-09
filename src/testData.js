import { book as newBook } from './modules/book';

const bookList = ["Harry Potter and the Philosopher's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Order of the Pheonix", "Harry Potter and the Half Bood-Prince", "Harry Potter and the Deathly Hallows"];

const pageCounts = [309, 341, 435, 734, 870, 652, 759];

export function createTestData(app) {
	bookList.forEach(title => {
		let book = newBook(title, 'J.K Rowling', pageCounts[bookList.indexOf(title)]);

		app.add(book);
	});
}

