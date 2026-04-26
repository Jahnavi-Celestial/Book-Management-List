function insertBtnLogic(){
    const btn = document.getElementById("insert-book-btn");
    const bookDetailsDiv = document.querySelector(".book-details-div");

    btn.addEventListener('click',()=>{
        // console.log("clicked");
        bookDetailsDiv.classList.toggle("active");
        if(bookDetailsDiv.classList.contains("active")){
            btn.innerHTML = `<i class="fa-solid fa-caret-down"></i>
                                       <p>Insert Book Detail</p>`;
        }
        else{
            btn.innerHTML = `<i class="fa-solid fa-caret-right"></i>
                                       <p>Insert Book Detail</p>`;
        }
    });
}