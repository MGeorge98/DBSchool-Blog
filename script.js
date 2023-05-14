const body = document.getElementById('body');
const main = document.getElementById('main');

// BUTON ADAUGARE ARTICOL

var buttonContainer = document.createElement('div');
buttonContainer.className ='add__container';
document.body.appendChild(buttonContainer);

var addButton = document.createElement('button');
addButton.innerText = ' + Add Article';
// addButton.onclick = openAddModal;
addButton.addEventListener('click', openAddModal);
addButton.className = 'button';
addButton.id= 'add';
buttonContainer.appendChild(addButton);

//

// MODALA ADD / EDIT

var modalOverlay = document.createElement('div');
modalOverlay.className ='modal__overlay';
body.appendChild(modalOverlay);
var modal = document.createElement('div');
modal.className ='modal';
modalOverlay.appendChild(modal);
var modalContent = document.createElement('div');
modalContent.className ='modal__content';
modal.appendChild(modalContent);

// Create a <h2> element
var title = document.createElement('h2');
title.className = 'title';
title.innerText = 'Add/Edit article';

// Create a div for inputs
var inputsContainer = document.createElement('div');
inputsContainer.className = 'inputs__container';

// Create input elements
var inputIds = ['formTitle', 'formTag', 'formAuthor', 'formDate', 'formImgUrl'];
var inputPlaceholders = ['Please enter title', 'Please enter tag', 'Please enter author', 'Please enter date', 'Please enter image url'];
for (var i = 0; i < inputIds.length; i++) {
    var input = document.createElement('input');
    input.id = inputIds[i];
    input.type = 'text';
    input.className = 'input';
    input.placeholder = inputPlaceholders[i];
    inputsContainer.appendChild(input);
}

// Create a textarea
var textarea = document.createElement('textarea');
textarea.id = 'formContent';
textarea.className = 'textarea';
textarea.name = 'content';
textarea.cols = '28';
textarea.rows = '7';
textarea.placeholder = 'Please enter content';

// Create a div for buttons
var buttonsContainer = document.createElement('div');
buttonsContainer.className = 'modal__buttons';

// Create buttons
var buttonIds = ['cancel', 'save'];
var buttonTexts = ['Cancel', 'Save'];
for (var i = 0; i < buttonIds.length; i++) {
    var button = document.createElement('button');
    button.id = buttonIds[i];
    button.type = 'button';
    button.className = 'button';
    if (button.id === 'save') {
        button.className += ' button--pink';
    } else {
        button.addEventListener('click', closeModal)
    }
    button.innerText = buttonTexts[i];
    buttonsContainer.appendChild(button);
}

// Append everything to main



modal.appendChild(title);
modal.appendChild(inputsContainer);
modal.appendChild(textarea);
modal.appendChild(buttonsContainer);

//



function openAddModal() {

    // saveButton.addEventListener('click', function () {
    //     addArticleToServer()
    // });

    body.className = 'show-modal';
}

// Close modal
function closeModal() {
    body.className = '';
}

functiom