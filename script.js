let myLibrary = [];

//Selectors here:
const main = document.querySelector("main");
const form = document.querySelector("form");
const bookButton = document.querySelector("#bookButton");
const submitButton = document.querySelector(".popup button");

//Event Listeners here:
bookButton.addEventListener("click", openForm);
submitButton.addEventListener("click", addBookToLibrary);

//book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  let newBook = new Book(title, author, pages, read);

  if (form.checkValidity() == false) return;
  else {
    myLibrary.push(newBook);
    document.forms["popup"].reset();
    document.getElementById("popup").style.display = "none";

    const container = document.createElement("div");
    const titleDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const pagesDiv = document.createElement("div");
    const readButton = document.createElement("button");
    const removeButton = document.createElement("button");

    container.className = "container";
    titleDiv.className = "titleDiv";
    authorDiv.className = "authorDiv";
    pagesDiv.className = "pagesDiv";
    readButton.className = "readButton";
    removeButton.id = "removeButton";

    titleDiv.textContent = `"${newBook.title}"`;
    authorDiv.textContent = `${newBook.author}`;
    pagesDiv.textContent = `Pages: ${newBook.pages}`;
    if (newBook.read == true) {
      readButton.textContent = `Read`;
    } else readButton.textContent = `Not read`;
    removeButton.textContent = `Remove`;

    readButton.addEventListener("click", function () {
      if (newBook.read == true) {
        newBook.read = false;
        readButton.textContent = "Not read";
      } else {
        newBook.read = true;
        readButton.textContent = "Read";
      }
    });

    removeButton.addEventListener("click", function () {
      main.removeChild(container);
    });

    main.appendChild(container);
    container.appendChild(titleDiv);
    container.appendChild(authorDiv);
    container.appendChild(pagesDiv);
    container.appendChild(readButton);
    container.appendChild(removeButton);

    form.addEventListener("submit", function (event) {
      event.preventDefault();
    });
  }
}

function openForm() {
  document.getElementById("popup").style.display = "grid";
}
