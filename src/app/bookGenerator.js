import { Book } from './book.js';

class BookGenerator {
	static generateBooks(library) {
		const books = [
				{
					title : "Harry Potter and the Philosopher's Stone",
					author : "J.K. Rowling",
					pages : 223
				},
				{
					title : "Harry Potter and the Chamber of Secrets",
					author : "J.K. Rowling",
					pages : 251
				},
				{
					title : "Harry Potter and the Prisoner of Azkaban",
					author : "J.K. Rowling",
					pages : 317
				},
				{
					title : "Harry Potter and the Goblet of Fire",
					author : "J.K. Rowling",
					pages : 636
				},
				{
					title: "Harry Potter an the Order of the Phoenix",
					author : "J.K.Rowling",
					pages : 766
				},
				{
					title: "Harry Potter and the Half-Blood Prince",
					author : "J.K. Rowling",
					pages : 607
				},
				{
					title: "Harry Potter and the Deathly Hallows",
					author : "J.K. Rowling",
					pages : 607
				}
			]

		books.forEach(book => 
			library.add(new Book(book.title, book.author, book.pages))
		);
	}
}

export { BookGenerator };
