function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${read ? 'read' : 'not read yet'}`;
  };
}

const aBook = new Book('HP', 'JK', 100, false);
alert(aBook.info());