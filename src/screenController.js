import * as create from './modules/elements';

export const screenController = (application) => {
	const library = application;
	const bodyElement = document.querySelector('body');

	const header = (() => {
		let headerElement;
		let parentNode = bodyElement;

		function render() {
			headerElement = create.headerElement();
			parentNode.appendChild(headerElement);
		}

		return {
			render,
		}

	})();

	const main = (() => {
		let mainElement;
		let parentNode = bodyElement;

		function render() {
			mainElement = create.mainElement();
			parentNode.appendChild(mainElement);
		}

		return {
			render,
		}
	})();

	const footer = (() => {
		let footerElement;
		let parentNode = bodyElement;

		function render() {
			footerElement = create.footerElement();
			parentNode.appendChild(footerElement);
		}

		return {
			render,
		}
	})();

	const init = (() => {
		header.render();
		main.render();
		footer.render();
	})();
}
