var modal = document.getElementById('book-modal');
var addCard = document.getElementById('add-card');
var span = document.getElementsByClassName('close')[0];

window.onload = function (){
    pageSetup();
}

function pageSetup(){
    var content = document.getElementById('card-content')
    var bins = content.getElementsByClassName('bin-button')

    Array.from(bins).forEach(function(btn) {
        btn.addEventListener('click', deleteItem)
    })

    var readStatus = content.getElementsByClassName('read')
    Array.from(readStatus).forEach(function(status) {
        status.addEventListener('click', updateStatus)
    })

}

addCard.onclick = () => modal.style.display='block';
span.onclick = () => modal.style.display='none';
window.onclick = function (e) {
    if(e.target == modal){
        modal.style.display = "none";
    }
}

function getBookData(){
    var title=document.getElementById('book-title').value;
    var author=document.getElementById('book-author').value;
    var pages = document.getElementById('number-picker').value;
    var read = document.querySelector('#read').checked;

    var newBook = new Book(title,author,pages,read)
    addBookToLibrary(newBook);

    addBookCard(newBook);

    document.getElementById('Form').reset()
    modal.style.display = "none";
}

function addBookCard(book){
    var cardDiv = document.createElement("div");
    cardDiv.classList.add('card','book-card');
    
    var titleP = document.createElement('p');
    titleP.classList.add('title');
    titleP.innerText = book.title

    var authorP = document.createElement('p');
    authorP.classList.add('author');
    authorP.innerText = book.author

    var pageP = document.createElement('p');
    pageP.classList.add('page');
    pageP.innerText = book.pages

    var actionDiv = document.createElement('div');
    actionDiv.classList.add('action');

    var image = document.createElement('img');
    image.src = 'delete.png'
    image.classList.add('bin-button')
    image.addEventListener('click', deleteItem)


    var statusDiv = document.createElement('div');
    statusDiv.classList.add('read');
    if(book.read == true) {
        statusDiv.innerText = "Read"
    } else {
        statusDiv.innerText = "Not Read"
    }
    statusDiv.addEventListener('click', updateStatus)

    actionDiv.append(statusDiv, image);
    cardDiv.append(titleP, authorP, pageP, actionDiv);

    document.getElementById('add-card').insertAdjacentElement('afterend',cardDiv)
}

function deleteItem(){
    var bin = this.parentElement.parentElement
    bin.parentElement.removeChild(bin)
}

function updateStatus(){
    this.innerText = (this.innerText == 'Read') ? "Not Read": "Read";
}