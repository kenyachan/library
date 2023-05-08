export function newAddModalButtons() {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.id = 'modal-buttons';

    buttonsContainer.appendChild(createSubmitButton('add'));
    buttonsContainer.appendChild(createCancelButton());

    return buttonsContainer;
}

export function newUpdateModalButtons() {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.id = 'modal-buttons';

    buttonsContainer.appendChild(createSubmitButton('update'));
    buttonsContainer.appendChild(createCancelButton());
    buttonsContainer.appendChild(createRemoveButton());

    return buttonsContainer;
}

function createSubmitButton(type) {
    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.id = 'modal-addBook';

    if (type === 'add') {
        button.textContent = 'Add';
    }

    if (type === 'update') {
        button.textContent = 'Update';
    }

    return button;
}

function createCancelButton() {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.id = 'modal-cancel';
    button.textContent = 'Cancel';
    
    return button;
}

function createRemoveButton() {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.id = 'modal-removeBook';
    button.textContent = 'Remove';

    return button;
}