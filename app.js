const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = Boolean(read);
}

Book.prototype.info = function info() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
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
const form = document.querySelector('form');
const newBtn = document.querySelector('.new-btn');
const submitBtn = document.querySelector('.submit-btn');

function displayBook(element, index) {
  const book = document.createElement('div');
  book.classList.add('book');
  book.id = index;

  const info = document.createElement('div');
  info.classList.add('info');
  info.textContent = element.info();

  container.appendChild(book);
  book.append(info);
}

function displayLibrary() {
  myLibrary.forEach((element, index) => {
      displayBook(element, index)
  });
}

displayLibrary();

function displayForm() {
  form.classList.remove('hidden');
}

newBtn.addEventListener('click', () => {
  displayForm();
})

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  addBookToLibrary(form.title.value, form.author.value, form.pages.value, form.read.value);
  const newBookIndex = myLibrary.length - 1;
  displayBook(myLibrary[newBookIndex], newBookIndex);
})