function bookData(){
    let book = JSON.parse(localStorage.getItem("book")) || [];

    const bookList = document.querySelector(".bookList");

    if(book.length === 0){
        bookList.innerHTML = `<h2 style="font-weight: normal;">No Books Available</h2>`;
        bookList.classList.add("empty");
    }
    else{
        bookList.classList.remove("empty");
        for(let item of book){
            const bookTitleDiv = document.createElement("div");
            bookTitleDiv.className = "bookTitleDiv";

            bookTitleDiv.dataset.id = item.id;

            bookTitleDiv.innerHTML = `<i class="fa-solid fa-angle-right"></i>
                                      <p class="bookTitle">${item.bookName}</p>`;

            bookList.append(bookTitleDiv);
        }
    }
}