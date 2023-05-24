let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${read ? 'read' : 'not read yet'}`;
  };
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

const cardContainer = document.querySelector(".container");

function addCard(book) {
  const card = document.createElement("div");
  const title = document.createElement("div");
  const author = document.createElement("div");
  const pages = document.createElement("div");
  const read = document.createElement("div");
  card.classList.add("card");
  title.classList.add("title");
  author.classList.add("author");
  pages.classList.add("pages");
  read.classList.add("read");
  title.textContent = `Title: ${book.title}`;
  author.textContent = `Author: ${book.author}`;
  pages.textContent = `Pages: ${book.pages}`;
  read.textContent = `read: ${book.read}`;
  card.appendChild(title, author, pages, read);
  cardContainer.append(card);
}

const addBookButton = document.querySelector("#add-book");
const addBookModal = document.querySelector(".modal");
addBookButton.addEventListener("click", () => {
  addBookModal.style.display = "block";
});

const cancelButton = document.querySelector(".modal #cancel");
cancelButton.addEventListener("click", () => {
  addBookModal.style.display = "none";
});

const bookForm = document.querySelector("#book-info");
const addButton = document.querySelector(".modal #add");
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let bookInfo = Object.fromEntries(new FormData(e.target));
  addBookToLibrary(bookInfo.title, bookInfo.author, bookInfo.pages, bookInfo.read);
  cancelButton.click();
  console.log(myLibrary);
  addCard(bookInfo);
});

