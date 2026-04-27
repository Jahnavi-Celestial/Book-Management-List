function createBookBtnLogic(){
    const createBookBtn = document.getElementById("create-book-btn");

    let book = JSON.parse(localStorage.getItem("book")) || [];
    const bookList = document.querySelector(".bookList");

    createBookBtn.addEventListener('click',()=>{
        const bookName = document.querySelector("#bookName");
        const bookDetail = document.querySelector("#bookDetails");
        const bookAuthor = document.querySelector("#authorName");
        const bookPublishDate = document.querySelector("#publishDate");
        const bookPrice = document.querySelector("#price");

        console.log(bookName);

        if(bookName.value === "" || bookDetail.value === "" || bookDetail.value === "" || bookDetail.value === ""){
            return;
        }

        let obj = {
            id: Date.now(),
            bookName: bookName.value,
            bookDetail: bookDetail.value,
            bookAuthor: bookAuthor.value,
            bookPublishDate: bookPublishDate.value,
            bookPrice: bookPrice.value,
        };

        
        // console.log(obj.bookPublishDate);


        const exists = book.some(item => 
            item.bookName === obj.bookName && item.bookAuthor === obj.bookAuthor
        );

        if(!exists){
            book.push(obj);
            localStorage.setItem("book", JSON.stringify(book));

            const bookTitleDiv = document.createElement("div");
            bookTitleDiv.className = "bookTitleDiv";

            bookTitleDiv.dataset.id = obj.id;

            bookTitleDiv.innerHTML = `<i class="fa-solid fa-angle-right"></i>
                                      <p class="bookTitle">${obj.bookName}</p>`;

            bookList.classList.remove("empty");

            bookList.append(bookTitleDiv);
        } else {
            console.log("Book already exists");
        }
        // console.log(book);

    });
}