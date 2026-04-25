A simple and efficient Book Management System built using Vanilla JavaScript. This project allows users to manage a collection of books by adding, viewing, and deleting entries, with data persistence using the browser's Local Storage.

Features-
-> Add new books with details:
Book Name
Author
Description / Details
Publish Date
Price
-> Display a dynamic list of all added books
-> Delete books from the list
-> Persistent storage using Local Storage (data remains even after page reload)
-> Automatically sync UI with stored data

Tech Stack-
-> JavaScript (ES6)
-> Local Storage API

How It Works-
Users input book details through a form
On clicking the Create Book Item button, the book is:
Stored in Local Storage
Displayed instantly in the UI
Users can remove any book, which updates both the UI and Local Storage
On page reload, stored books are fetched and rendered automatically

Purpose of the Project-
This project demonstrates core JavaScript concepts such as:
DOM Manipulation
Event Handling
Data Storage with Local Storage
CRUD Operations (Create, Read, Delete)