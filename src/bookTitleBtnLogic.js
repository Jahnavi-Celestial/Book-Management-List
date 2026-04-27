function bookTitleBtn() {
  let book = JSON.parse(localStorage.getItem("book")) || [];
  const bookList = document.querySelector(".bookList");

  const bookTitle = document.querySelectorAll(".bookTitleDiv");

  bookTitle.forEach((titleDiv) => {
    titleDiv.addEventListener("click", () => {
        const icon = titleDiv.querySelector("i");
        if(icon.classList.contains("fa-angle-right")){
            icon.classList.remove("fa-angle-right");
            icon.classList.add("fa-angle-down");
        }
        else{
            icon.classList.remove("fa-angle-down");
            icon.classList.add("fa-angle-right");
        }
      
      const name = titleDiv.querySelector(".bookTitle").textContent;
      const item = book.find(b => b.bookName === name);

      const alreadyOpen = titleDiv.nextElementSibling;

      if (alreadyOpen && alreadyOpen.classList.contains("book-desc-div")) {
        alreadyOpen.remove();
        return;
      }

      if(document.querySelector(".book-desc-div")){
        document.querySelector(".book-desc-div").remove();
      }

      const bookDescDiv = document.createElement("div");
      bookDescDiv.className = "book-desc-div";

      bookDescDiv.innerHTML = `
        <button id="deleteBtn">Delete</button>
        <div class="bookDesc">
            <span>Book Name</span>
            <p>${item.bookName}</p>
        </div>
        <div class="bookDesc">
            <span>Book Detail</span>
            <p>${item.bookDetail}</p>
        </div>
        <div class="bookDesc">
            <span>Author Name</span>
            <p>${item.bookAuthor}</p>
        </div>
        <div class="bookDesc">
            <span>Publish Date</span>
            <p>${item.bookPublishDate}</p>
        </div>
        <div class="bookDesc">
            <span>Price</span>
            <p>${item.bookPrice}</p>
        </div>
      `;

      titleDiv.insertAdjacentElement("afterend", bookDescDiv);

      /* eslint-disable no-undef*/
      deleteBtnLogic(titleDiv);

      editBookDesc(titleDiv);
    });
  });
}
