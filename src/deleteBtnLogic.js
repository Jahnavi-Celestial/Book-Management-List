function deleteBtnLogic(titleDiv) {
  const bookDescDiv = titleDiv.nextElementSibling;
  const deleteBtn = bookDescDiv.querySelector("#deleteBtn");
  const bookList = document.querySelector(".bookList");

  deleteBtn.addEventListener("click", () => {
    const id = titleDiv.dataset.id;
    const name = titleDiv.querySelector(".bookTitle").textContent;

    const deleteDiv = document.createElement("div");
    deleteDiv.className = "deleteDiv";

    const deleteMsgBox = document.createElement("div");
    deleteMsgBox.className = "deleteMsgBox";
    deleteMsgBox.innerHTML = `
    <p>You are deleting the following book:</p>
    <h3>${name}</h3>
    <button id="okBtn">OK</button>
  `;
    deleteDiv.appendChild(deleteMsgBox);
    document.body.appendChild(deleteDiv);

    let book = JSON.parse(localStorage.getItem("book")) || [];
    deleteMsgBox.querySelector("#okBtn").addEventListener("click", () => {

      book = book.filter((item) => item.id !== Number(id));

      localStorage.setItem("book", JSON.stringify(book));

      bookDescDiv.remove();
      titleDiv.remove();

      if (book.length === 0) {
        bookList.innerHTML = `<h2 style="font-weight: normal;">No Books Available</h2>`;
        bookList.classList.add("empty");
      }

      deleteDiv.remove();
    });

    deleteDiv.addEventListener("click", (e) => {
      if (e.target === deleteDiv) {
        deleteDiv.remove();
      }
    });

  });
}
