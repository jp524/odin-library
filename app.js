const myLibrary = [];

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = Boolean(read);
// }

// Book.prototype.info = function info() {
//   return `${this.title} by ${this.author}, ${this.pages} pages, ${
//     this.read ? 'read' : 'not read yet'
//   }`;
// };

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = Boolean(read);
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? 'read' : 'not read yet'
    }`;
  }
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary(
  'Harry Potter and the Chamber of Secrets',
  'J.K. Rowling',
  251,
  true
);
addBookToLibrary('A Tale of Two Cities', 'Charles Dickens', 344, true);
addBookToLibrary('Au Bonheur des Dames', 'Émile Zola', 384, true);

// console.log(myLibrary);

const books = document.querySelector('#books');
const form = document.querySelector('form');
const newBtn = document.querySelector('.new-btn');
const submitBtn = document.querySelector('.submit-btn');

function displayBook(element, index) {
  const book = document.createElement('div');
  book.classList.add('book');
  book.id = index;

  const info = document.createElement('div');
  info.classList.add(`info-${index}`);
  info.textContent = element.info();

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.id = index;
  deleteBtn.addEventListener('click', () => {
    books.removeChild(book);
  });

  const readBtn = document.createElement('button');
  readBtn.textContent = 'Change read status';
  readBtn.classList.add('read-btn');
  readBtn.id = index;
  readBtn.addEventListener('click', () => {
    element.read = !element.read;
    info.textContent = element.info();
  });

  books.appendChild(book);
  book.append(info, deleteBtn, readBtn);
}

function displayLibrary() {
  myLibrary.forEach((element, index) => {
    displayBook(element, index);
  });
}

displayLibrary();

function displayForm() {
  form.classList.remove('hidden');
}

newBtn.addEventListener('click', () => {
  displayForm();
});

submitBtn.addEventListener('click', (event) => {
  if (form.checkValidity()) {
    event.preventDefault();
    addBookToLibrary(
      form.title.value,
      form.author.value,
      form.pages.value,
      form.read.value
    );
    const newBookIndex = myLibrary.length - 1;
    displayBook(myLibrary[newBookIndex], newBookIndex);
  } else {
    form.reportValidity();
    event.preventDefault();
  }
});
