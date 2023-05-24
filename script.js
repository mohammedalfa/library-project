let myLibrary = [];

function Book(title, author, pages, read, image) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.image = image;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, read: ${this.read}`;
  };
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

const cardContainer = document.querySelector(".container");

function addCard(book) {
  const card = document.createElement("div");
  const image = document.createElement("img");
  const title = document.createElement("div");
  const author = document.createElement("div");
  const pages = document.createElement("div");
  const read = document.createElement("div");
  const readCheckbox = document.createElement("input");
  const removeButton = document.createElement("button");
  card.classList.add("card");
  title.classList.add("title");
  author.classList.add("author");
  pages.classList.add("pages");
  read.classList.add("read");
  readCheckbox.classList.add("read-check");
  removeButton.classList.add("remove");
  image.src = book.image;
  title.textContent = `Title: ${book.title}`;
  author.textContent = `Author: ${book.author}`;
  pages.textContent = `Pages: ${book.pages}`;
  read.textContent = `Read: `;
  readCheckbox.type = "checkbox";
  removeButton.type = "button";
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });
  readCheckbox.checked = +book.read ? true : false;
  read.appendChild(readCheckbox);
  card.append(image, title, author, pages, read, removeButton);
  cardContainer.appendChild(card);
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
  addBookToLibrary(bookInfo.title, bookInfo.author, bookInfo.pages, bookInfo.read, bookInfo.image);
  cancelButton.click();
  console.log(myLibrary);
  addCard(bookInfo);
});

const deleteAllButton = document.querySelector(".delete-all");
deleteAllButton.addEventListener("click", () => {
  myLibrary = [];
  cardContainer.innerHTML = "";
});