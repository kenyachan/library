export function newBookTile() {
    const tile = document.createElement('div');
    tile.classList.add('book', 'tile');

    const titleText = document.createElement('p');
    titleText.classList.add('tileFont-title', 'tile-title');
    tile.appendChild(titleText);

    const authorText = document.createElement('p');
	authorText.classList.add('tileFont-normal', 'tile-author');
    tile.appendChild(authorText);
    
    const pageCountText = document.createElement('p');
	pageCountText.classList.add('tileFont-normal', 'tile-pageCount');
    tile.appendChild(pageCountText);

    tile.appendChild(newReadSwitch());

    return tile;
}

function newReadSwitch() {
    const switchWidget = document.createElement('div');
	switchWidget.classList.add('switch-widget');

	const switchInput = document.createElement('input');
	switchInput.setAttribute('type', 'checkbox');
	switchInput.setAttribute('name', 'bookRead');

    switchWidget.appendChild(switchInput);

	const switchLabel = document.createElement('label');

	const readLabel = document.createElement('span');
	readLabel.textContent = 'Read';
	readLabel.classList.add('on');
	switchLabel.appendChild(readLabel);

	const notReadLabel = document.createElement('span');
	notReadLabel.textContent = 'Not read';
	notReadLabel.classList.add('off');
	switchLabel.appendChild(notReadLabel);

	switchWidget.appendChild(switchLabel);

	return switchWidget;
}
