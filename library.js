let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${title} by ${author}, ${pages} pages,` + (read? 'read':'not yet read');
  }
}

function addBookToLibrary(Book) {
  return myLibrary.push(Book)
}

