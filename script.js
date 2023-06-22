let myLibrary = [];
let newBook;

//Selectors:
const main = document.querySelector("main");
const bookButton = document.querySelector("#bookButton");
const form = document.querySelector("form");
const submitButton = document.querySelector("#popup button");

//Event listeners:
bookButton.addEventListener("click", openForm);
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
submitButton.addEventListener("click", addBookToLibrary);
window.addEventListener("click", (event) => {
  if (!event.target.matches("#bookButton")) {
    if (document.getElementById("popup").style.display == "flex") {
      closeForm();
    }
  }
});
form.addEventListener("click", (event) => event.stopPropagation());

function Book() {
  this.title = document.querySelector("#title").value;
  this.author = document.querySelector("#author").value;
  this.pages = document.querySelector("#pages").value;
  this.read = document.querySelector("#read").checked;
}

function openForm() {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("invisible").style.display = "block";
}

function closeForm() {
  document.forms["popup"].reset();
  document.getElementById("popup").style.display = "none";
  document.getElementById("invisible").style.display = "none";
}

function addBookToLibrary() {
  if (form.checkValidity() == false) return;
  else {
    newBook = new Book();
    myLibrary.push(newBook);
    closeForm();
    createCard();
  }
}

function createCard() {
  const card = document.createElement("div");
  const titleDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const pagesDiv = document.createElement("div");
  const readButton = document.createElement("button");
  const removeButton = document.createElement("button");

  card.className = "card";
  titleDiv.className = "titleDiv";
  authorDiv.className = "authorDiv";
  pagesDiv.className = "pagesDiv";
  readButton.className = "readButton";
  removeButton.className = "removeButton";

  titleDiv.textContent = `"${newBook.title}"`;
  authorDiv.textContent = `${newBook.author}`;
  pagesDiv.textContent = `Pages: ${newBook.pages}`;
  removeButton.textContent = `Remove`;
  removeButton.value = myLibrary.indexOf(newBook);

  if (newBook.read == true) {
    readButton.textContent = `Read`;
    readButton.style.background = "#ef5a5a";
  } else {
    readButton.textContent = `Not read`;
    readButton.style.background = "#ffa952";
  }

  readButton.addEventListener("click", newBook.toggleRead);

  removeButton.addEventListener("click", function () {
    myLibrary.splice(parseInt(event.currentTarget.value), 1);
    main.removeChild(card);
  });

  main.appendChild(card);
  card.appendChild(titleDiv);
  card.appendChild(authorDiv);
  card.appendChild(pagesDiv);
  card.appendChild(readButton);
  card.appendChild(removeButton);
}

Book.prototype.toggleRead = function () {
  if (newBook.read == true) {
    newBook.read = false;
    this.textContent = "Not read";
    this.style.background = "#ffa952";
  } else if (newBook.read == false) {
    newBook.read = true;
    this.textContent = "Read";
    this.style.background = "#ef5a5a";
  }
};
