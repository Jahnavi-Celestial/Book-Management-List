function bookDivFunc() {
  const bookDiv = document.createElement("div");
  bookDiv.id = "book-div";

  const bookHeading = document.createElement("h1");
  bookHeading.innerHTML = `Books List`;

  const bookListDiv = document.createElement("div");
  bookListDiv.className = `bookList`;

  bookDiv.append(bookHeading, bookListDiv);

  return bookDiv;
}
