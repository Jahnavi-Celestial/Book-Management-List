function bookDetailsDivFunc() {
  const bookDetailsDiv = document.createElement("div");
  bookDetailsDiv.className = "book-details-div";

  const detailsForm = document.createElement("form");
  detailsForm.id = "details-form";
  detailsForm.innerHTML = `
                            <div class="formData">
                                <label for="bookName">Book Name</label>
                                <input type="text" name="bookName" required="true">
                            </div>
                            <div class="formData">
                                <label for="bookDetails">Book Details</label>
                                <input type="text" name="bookDetails" required="true">
                            </div>
                            <div class="formData">
                                <label for="authorName">Author Name</label>
                                <input type="text" name="authorName" required="true">
                            </div>
                            <div class="formData">
                                <label for="publishDate">Publish Date</label>
                                <input type="date" name="publishDate" required="true">
                            </div>
                            <div class="formData">
                                <label for="price">Price</label>
                                <input type="number" name="price" required="true">
                            </div>
                            <button id="create-book-btn">Create Book Item</button>
                        `;

  bookDetailsDiv.append(detailsForm);

  return bookDetailsDiv;
}
