export function book(title, author, pageCount) {

	const printDetails = () => {
		console.log(`title: "${title}", author: "${author}", pageCount: ${pageCount}`);
	}

	return {
		printDetails,

		get title() {
			return title;
		},

		get author() {
			return author;
		},

		get pageCount() {
			return pageCount;
		},

		set title(newTitle) {
			if (!newTitle) return;
			if (newTitle === '') return;

			title = newTitle;
		},

		set author(newAuthor) {
			if (!newAuthor) return;
			if (newAuthor === '') return;

			author = newAuthor;
		},

		set pageCount(newPageCount) {
			if (typeof newPageCount !== 'number') return;
			if (newPageCount <= 0) throw new Error(`Page Count invalid. Expected positive number, recieved ${newPageCount}`);

			pageCount = newPageCount;
		},

	}
}
