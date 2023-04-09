export const headerElement = () => {
	const element = document.createElement('header');

	const headerTitle = document.createElement('p');
	headerTitle.textContent = 'My Library';
	
	element.appendChild(headerTitle);

	return element;
}

export const mainElement = () => {
	const element = document.createElement('main');

	return element;
}

export const footerElement = () => {
	const element = document.createElement('footer');

	const authorWidget = document.createElement('div');
	authorWidget.classList.add('author-widget');

	const authorTextElement = document.createElement('p');
	authorTextElement.textContent = 'Create by ';

	const authorLink = document.createElement('a');
	const link = 'https://github.com/kenyachan';
	const author = 'Kenya Chan';
	authorLink.setAttribute('href', link);
	authorLink.textContent = author;
	authorTextElement.appendChild(authorLink);

	authorWidget.appendChild(authorTextElement);

	element.appendChild(authorWidget);

	return element;
}
