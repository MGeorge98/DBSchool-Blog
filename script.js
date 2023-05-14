const body = document.getElementById('body');
const main = document.getElementById('main');

//Navigation element
const nav= document.createElement('nav');
nav.className = "nav";
document.body.appendChild(nav);

//Navigation container
const navContainer = document.createElement('ul');
navContainer.className = "nav__container";
nav.appendChild(navContainer);

//Travel Updates Nav Item
const navigationItem1 = document.createElement('li');
navigationItem1.className = "nav__item";
navContainer.appendChild(navigationItem1);

const navLink1 = document.createElement('a');
navLink1.className ="nav__link";
navLink1.href = "index.html";
navLink1.textContent = "Travel updates";
navigationItem1.appendChild(navLink1);

//Reviews Nav Item
const navigationItem2 = document.createElement('li');
navigationItem2.className = "nav__item";
navContainer.appendChild(navigationItem2);

const navLink2 = document.createElement('a');
navLink2.className ="nav__link";
navLink2.href = "reviews.html";
navLink2.textContent = "Reviews";
navigationItem2.appendChild(navLink2);

//About Nav Item
const navigationItem3 = document.createElement('li');
navigationItem3.className = "nav__item";
navContainer.appendChild(navigationItem3);

const navLink3 = document.createElement('a');
navLink3.className ="nav__link";
navLink3.href = "about.html";
navLink3.textContent = "About";
navigationItem3.appendChild(navLink3);

//Contact Nav Item
const navigationItem4 = document.createElement('li');
navigationItem4.className = "nav__item";
navContainer.appendChild(navigationItem4);

const navLink4 = document.createElement('a');
navLink4.className ="nav__link";
navLink4.href = "contact.html";
navLink4.textContent = "Contact";
navigationItem4.appendChild(navLink4);

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


//Butoane next and previous
const footer = document.createElement('footer');
footer.className = "footer";
document.body.appendChild(footer);

const footerLink1 = document.createElement('a');
footerLink1.className ="footer__link";
footerLink1.href = "";//to decide later what to connect
footerLink1.textContent = "previous";
footer.appendChild(footerLink1);

const footerLink2 = document.createElement('a');
footerLink2.className ="footer__link";
footerLink2.href = "";//to decide later what to connect
footerLink2.textContent = "next";
footer.appendChild(footerLink2);