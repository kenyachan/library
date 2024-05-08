function save(bookCollection) {
	localStorage.setItem('bookCollection', JSON.stringify([...bookCollection]));
}

function getBookCollection() {
	return new Map(JSON.parse(localStorage.getItem('bookCollection')));
}


export { save, getBookCollection };
