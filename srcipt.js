/* eslint-disable no-undef */
stylesFunc();

const root = document.createElement("div");
root.className = "container";

document.body.append(root);

const rootContainer = document.createElement("div");
rootContainer.className = "root-container";

rootContainer.append(insertBookBtnFunc(), bookDetailsDivFunc(), bookDivFunc());

root.append(rootContainer);

insertBtnLogic();

createBookBtnLogic();

bookData();

bookTitleBtn();