function bookDetailsDivFunc() {
  const bookDetailsDiv = document.createElement("div");
  bookDetailsDiv.className = "book-details-div";

  const detailsForm = document.createElement("form");
  detailsForm.id = "details-form";
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  detailsForm.innerHTML = `
                            <div class="formData">
                                <label for="bookName">Book Name</label>
                                <input type="text" name="bookName" required="true" id="bookName">
                            </div>
                            <div class="formData">
                                <label for="bookDetails">Book Details</label>
                                <input type="text" name="bookDetails" required="true" id="bookDetails">
                            </div>
                            <div class="formData">
                                <label for="authorName">Author Name</label>
                                <input type="text" name="authorName" required="true" id="authorName">
                            </div>
                            <div class="formData">
                                <label for="publishDate">Publish Date</label>
                                <input type="date" name="publishDate" required="true" id="publishDate" max=${formattedDate}>
                            </div>
                            <div class="formData">
                                <label for="price">Price</label>
                                <input type="number" name="price" required="true" id="price">
                            </div>
                            <button id="create-book-btn">Create Book Item</button>
                        `;

  bookDetailsDiv.append(detailsForm);

  return bookDetailsDiv;
}
