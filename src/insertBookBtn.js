function insertBookBtnFunc() {
  const insertBookBtn = document.createElement("button");
  insertBookBtn.id = "insert-book-btn";
  insertBookBtn.innerHTML = `<i class="fa-solid fa-caret-right"></i>
                           <p>Insert Book Detail</p>`;

  return insertBookBtn;
}
