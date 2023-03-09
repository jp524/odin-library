const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = Boolean(read);
}

Book.prototype.info = function info() {
  return `${this.title} by ${this.author}, ${this.pages}, ${
    this.read ? 'read' : 'not read yet'
  }`;
};

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary(
  'Harry Potter and the Chamber of Secrets',
  'J.K. Rowling',
  305,
  true
);
addBookToLibrary('Twilight', 'Stephanie Meyer', 500, true);

// console.log(myLibrary);

const container = document.querySelector('#container');

function displayLibrary() {
  myLibrary.forEach((element, index) => {
      const book = document.createElement('div');
      book.classList.add('book');
      book.id = index;
    
      const info = document.createElement('div');
      info.classList.add('info');
      info.textContent = element.info();
    
      container.appendChild(book);
      book.append(info);
  });
}

displayLibrary();