let myLibrary = [];

//Selectors here:
const bookButton = document.querySelector("#bookButton");
const submitButton = document.querySelector(".popup button");

//Event Listeners here:
bookButton.addEventListener("click", openForm);
submitButton.addEventListener("click", addBookToLibrary);

//book constructor
function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//why did moving selectors from global to inside function work?
function addBookToLibrary() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").value;

  let newBook = new book(title, author, pages, read);

  myLibrary.push(newBook);
  console.log(myLibrary);
  document.forms["popup"].reset();
  document.getElementById("popup").style.display = "none";
}

function openForm() {
  document.getElementById("popup").style.display = "grid";
}
