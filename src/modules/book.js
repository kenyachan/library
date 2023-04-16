export function book(title, author, pageCount, read) {
	const getDetails = () => {
		return `Title: "${title}", Author: "${author}", Page Count: ${pageCount}`;
	}

	return {
		getDetails,

		get title() {
			return title;
		},

		get author() {
			return author;
		},

		get pageCount() {
			return pageCount;
		},

		get read() {
			return read;
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
			if (typeof newPageCount !== 'number' && newPageCount !== undefined) {
				throw new Error(`Page Count invalid. Expected 'number', received ${typeof newPageCount}`);
				return;
			}

			if (newPageCount <= 0)  {
				throw new Error(`Page Count invalid. Expected positive number, recieved ${newPageCount}`);
				return;
			}

			pageCount = newPageCount;
		},

		set read(readStatus) {
			read = readStatus;
		},
	}
}
