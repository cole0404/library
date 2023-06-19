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

function Book() {
  this.title = document.querySelector("#title").value;
  this.author = document.querySelector("#author").value;
  this.pages = document.querySelector("#pages").value;
  this.read = document.querySelector("#read").checked;
}

function openForm() {
  document.getElementById("popup").style.display = "flex";
}

function addBookToLibrary() {
  if (form.checkValidity() == false) return;
  else {
    newBook = new Book();
    myLibrary.push(newBook);

    document.forms["popup"].reset();
    document.getElementById("popup").style.display = "none";

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
  if (newBook.read == true) {
    readButton.textContent = `Read`;
    readButton.style.background = "#ef5a5a";
  } else {
    readButton.textContent = `Not read`;
    readButton.style.background = "#ffa952";
  }

  readButton.addEventListener("click", newBook.toggleRead);

  //when cards are created, create a index of each new card that will correspond with library array
  removeButton.addEventListener("click", function () {
    let cards = document.querySelectorAll(".removeButton");

    for (let i = 0; i < cards; i++) {
      if (i == ) myLibrary.splice(i, 1);
    }

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
  console.log(myLibrary);
};
