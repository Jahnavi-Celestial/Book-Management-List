function bookDivFunc() {
  const bookDiv = document.createElement("div");
  bookDiv.id = "book-div";

  const bookHeading = document.createElement("h1");
  bookHeading.innerHTML = `Books List`;

  const bookListDiv = document.createElement("div");
  bookListDiv.className = `bookList`;

  const bookTitleDiv = document.createElement("div");
  bookTitleDiv.className = "bookTitleDiv";
  bookTitleDiv.innerHTML = `
                        <i class="fa-solid fa-angle-right"></i>
                        <p className="bookTitle">Book Title</p>
                      `;

  const bookDescDiv = document.createElement("div");
  bookDescDiv.className = "book-desc-div";
  bookDescDiv.innerHTML = `
                        <button id="deleteBtn">Delete</button>
                        <div class="bookDesc">
                            <span>Book Name</span>
                            <p>Name</p>
                        </div>
                        <div class="bookDesc">
                            <span>Book Details</span>
                            <p>Detail</p>
                        </div>
                        <div class="bookDesc">
                            <span>Author Name</span>
                            <p>Author</p>
                        </div>
                        <div class="bookDesc">
                            <span>Publish Date</span>
                            <p>Date</p>
                        </div>
                        <div class="bookDesc">
                            <span>Price</span>
                            <p>Price</p>
                        </div>
                        `;

  bookListDiv.append(bookTitleDiv, bookDescDiv);

  bookDiv.append(bookHeading, bookListDiv);

  return bookDiv;
}
