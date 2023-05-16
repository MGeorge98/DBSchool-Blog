const body = document.getElementById('body');
const main = document.getElementById('main')
//Navigation element
const nav = document.createElement('nav');
nav.className = "nav";
main.appendChild(nav);
//Add button
var buttonContainer = document.createElement('div');
buttonContainer.className = 'add__container';
main.appendChild(buttonContainer);


const container = document.createElement('div');
container.className = 'container';
main.appendChild(container);

//Navigation container
const navContainer = document.createElement('ul');
navContainer.className = "nav__container";
nav.appendChild(navContainer);

//Travel Updates Nav Item
const navigationItem1 = document.createElement('li');
navigationItem1.className = "nav__item";
navContainer.appendChild(navigationItem1);

const navLink1 = document.createElement('a');
navLink1.className = "nav__link";
navLink1.href = "index.html";
navLink1.textContent = "Travel updates";
navigationItem1.appendChild(navLink1);

//Reviews Nav Item
const navigationItem2 = document.createElement('li');
navigationItem2.className = "nav__item";
navContainer.appendChild(navigationItem2);

const navLink2 = document.createElement('a');
navLink2.className = "nav__link";
navLink2.href = "reviews.html";
navLink2.textContent = "Reviews";
navigationItem2.appendChild(navLink2);

//About Nav Item
const navigationItem3 = document.createElement('li');
navigationItem3.className = "nav__item";
navContainer.appendChild(navigationItem3);

const navLink3 = document.createElement('a');
navLink3.className = "nav__link";
navLink3.href = "about.html";
navLink3.textContent = "About";
navigationItem3.appendChild(navLink3);

//Contact Nav Item
const navigationItem4 = document.createElement('li');
navigationItem4.className = "nav__item";
navContainer.appendChild(navigationItem4);

const navLink4 = document.createElement('a');
navLink4.className = "nav__link";
navLink4.href = "contact.html";
navLink4.textContent = "Contact";
navigationItem4.appendChild(navLink4);

// BUTON ADAUGARE ARTICOL



var addButton = document.createElement('button');
addButton.innerText = ' + Add Article';
// addButton.onclick = openAddModal;
addButton.addEventListener('click', openAddModal);
addButton.className = 'button';
addButton.id = 'add';
buttonContainer.appendChild(addButton);

// Add article
function addArticleToServer() {
    console.log("test")
    let formTitle = document.getElementById('formTitle');
    let formTag = document.getElementById('formTag');
    let formAuthor = document.getElementById('formAuthor');
    let formDate = document.getElementById('formDate');
    let formImgUrl = document.getElementById('formImgUrl');
    let formContent = document.getElementById('formContent');
    // creat post object
    const postObject = {
        title: formTitle.value,
        tag: formTag.value,
        author: formAuthor.value,
        date: formDate.value,
        imgUrl: formImgUrl.value,
        content: formContent.value
    }
    // Call post request to add a new article
    fetch('http://localhost:3000/articles', {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(postObject)
    }).then(function () {
        console.log("test")
        // Get the new article list
        getArticlesFromServer();

        // Reset Form
        resetForm();

        // Close Modal
        closeModal();
    });
}

// Reset form values
function resetForm() {
    formTitle.value = '';
    formTag.value = '';
    formAuthor.value = '';
    formDate.value = '';
    formImgUrl.value = '';
    formContent.value = '';
}

//Get all articles

// Fetch the articles list
function getArticlesFromServer() {
    fetch('http://localhost:3000/articles')
        .then(function (response) {
            // Trasform server response to plain object
            response.json().then(function (articles) {
                renderArticles(articles);
            });
        });
};

// Remove articles list if exist
function removeOldArticlesFromDOM() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function createArticleDOMNode(article) {

    // Title
    let title = document.createElement('h2');
    title.className = "title";
    title.textContent = article.title;

    // Tag
    let tag = document.createElement('li');
    tag.className = "info__item";
    tag.textContent = article.tag;

    // Author
    let author = document.createElement('span');
    author.className = "info__mark";
    author.textContent = article.author;

    let authorContainer = document.createElement('li');
    authorContainer.className = "info__item";
    authorContainer.textContent = 'Added By ';
    authorContainer.appendChild(author)

    // Date
    let date = document.createElement('li');
    date.className = "info__item";
    date.textContent = article.date;

    // Information container
    let infoContainer = document.createElement('ul');
    infoContainer.className = "info__container";
    infoContainer.appendChild(tag);
    infoContainer.appendChild(authorContainer);
    infoContainer.appendChild(date);

    // Edit button
    let editButton = document.createElement('button');
    editButton.className = "actions__btn";
    editButton.addEventListener('click', function () {
        openEditModal(article);
    })
    editButton.textContent = 'Edit';

    // Delete button
    let deleteButton = document.createElement('button');
    deleteButton.className = "actions__btn";
    // Add event on delete button and pass article id to delete it form server more at https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
    deleteButton.addEventListener('click', function () {
        deleteArticleFromServer(article.id);
    });
    deleteButton.textContent = 'Delete';

    // Buttons container
    let buttonsContainer = document.createElement('div');
    buttonsContainer.className = "actions__container";
    buttonsContainer.appendChild(editButton);
    buttonsContainer.appendChild(deleteButton);

    // Image
    let img = document.createElement('img');
    img.src = article.imgUrl;
    img.className = "article__img";

    // Paragraph
    let paragraph = document.createElement('p');
    paragraph.textContent = article.content;

    // Paragraph container
    let paragraphContainer = document.createElement('div');
    paragraphContainer.className = "content__container";
    paragraphContainer.appendChild(paragraph);

    // Append all article nodes to container
    let articleNode = document.createElement('article');
    articleNode.className = "article__container";
    articleNode.appendChild(title);
    articleNode.appendChild(infoContainer);
    articleNode.appendChild(buttonsContainer);
    articleNode.appendChild(img);
    articleNode.appendChild(paragraphContainer);

    return articleNode;
}

// Delete article from server
function deleteArticleFromServer(id) {
    // Call delete request to delete the article
    fetch(`http://localhost:3000/articles/${id}`, {
        method: 'DELETE',
    }).then(function () {
        // Get the new articles list
        getArticlesFromServer();
    });
}

// Update article
function updateArticleToServer(id) {
    // creat put object
    const putObject = {
        title: formTitle.value,
        tag: formTag.value,
        author: formAuthor.value,
        date: formDate.value,
        imgUrl: formImgUrl.value,
        saying: formSaying.value,
        summary: formSummary.value,
        content: formContent.value
    }
    // Call put request to update the article
    fetch(`http://localhost:3000/articles/${id}`, {
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(putObject)
    }).then(function () {
        // Get the new article list
        getArticlesFromServer();

        // Reset Form
        resetForm();

        // Close Modal
        closeModal();
    });
}

// Create DOM objects and append them to DOM
function renderArticles(articles) {

    removeOldArticlesFromDOM();

    // Create and append tags
    for (let i = 0; i < articles.length; i++) {
        let articleDOMNode = createArticleDOMNode(articles[i]);
        container.appendChild(articleDOMNode);
    }
}

getArticlesFromServer();

// MODALA ADD / EDIT

var modalOverlay = document.createElement('div');
modalOverlay.className = 'modal__overlay';
body.appendChild(modalOverlay);
var modal = document.createElement('div');
modal.className = 'modal';
modalOverlay.appendChild(modal);
var modalContent = document.createElement('div');
modalContent.className = 'modal__content';
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
    let saveButton = document.getElementById('save');
    saveButton.addEventListener('click', function () {
        addArticleToServer()
    });
    body.className = 'show-modal';
}

function openEditModal(article) {
    let formTitle = document.getElementById('formTitle');
    let formTag = document.getElementById('formTag');
    let formAuthor = document.getElementById('formAuthor');
    let formDate = document.getElementById('formDate');
    let formImgUrl = document.getElementById('formImgUrl');
    let formContent = document.getElementById('formContent');
    // Copy article information to form
    formTitle.value = article.title;
    formTag.value = article.tag;
    formAuthor.value = article.author;
    formDate.value = article.date;
    formImgUrl.value = article.imgUrl;
    formContent.value = article.content;

    let saveButton = document.getElementById('save');
    saveButton.addEventListener('click', function () {
        updateArticleToServer(article.id)
    });
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
footerLink1.className = "footer__link";
footerLink1.href = "";//to decide later what to connect
footerLink1.textContent = "previous";
footer.appendChild(footerLink1);

const footerLink2 = document.createElement('a');
footerLink2.className = "footer__link";
footerLink2.href = "";//to decide later what to connect
footerLink2.textContent = "next";
footer.appendChild(footerLink2);