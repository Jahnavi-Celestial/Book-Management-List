function editBookDesc(titleDiv) {
  const bookDescDiv = titleDiv.nextElementSibling;
  if (!bookDescDiv || !bookDescDiv.classList.contains("book-desc-div")) return;

  const fieldMap = {
    "Book Name": "bookName",
    "Book Detail": "bookDetail",
    "Author Name": "bookAuthor",
    "Publish Date": "bookPublishDate",
    "Price": "bookPrice",
  };

  const bookDescItems = bookDescDiv.querySelectorAll(".bookDesc");

  bookDescItems.forEach((descItem) => {
    const label = descItem.querySelector("span").textContent.trim();
    const storageKey = fieldMap[label];

    const para = descItem.querySelector("p");

    const input = document.createElement("input");
    input.className = "book-desc-input"; 
    if(storageKey === "bookPublishDate"){
        input.type = "date";
    }
    else if(storageKey === "bookPrice"){
        input.type = "number";
    }
    else{
        input.type = "text";
    }
    input.value = para.textContent;
    input.style.display = "none";
    descItem.appendChild(input);

    para.addEventListener("click", () => {
      para.style.display = "none";
      input.style.display = "";
      input.value = para.textContent; 
      input.focus();
    });

    input.addEventListener("blur", () => {
      const newValue = input.value.trim();

      para.textContent = newValue;
      input.style.display = "none";
      para.style.display = "";

      const bookName = titleDiv.querySelector(".bookTitle").textContent;
      let books = JSON.parse(localStorage.getItem("book")) || [];
      const bookIndex = books.findIndex((b) => b.bookName === bookName);

      if (bookIndex !== -1) {
        books[bookIndex][storageKey] = newValue;

        if (storageKey === "bookName") {
          const titleEl = titleDiv.querySelector(".bookTitle");
          if (titleEl) titleEl.textContent = newValue;
        }

        localStorage.setItem("book", JSON.stringify(books));
      }
    });
  });
}
