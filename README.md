# JavaScript Fundamentals (Practice Exercises and Mini Projects)
This repository contains JavaScript fundamentals exercises and projects designed to help learners practice and improve their coding skills.

---
# Table of Contents
## Practice Exercises
- [JavaScript Fundamentals](#javascript-fundamentals)

<br>
<br>

## Mini Practice Projects
- [Console Contact Book](#console-contact-book)

<br>
<br>


---
# Console Contact Book
This is a simple console-based contact book application that allows users to add, view, and delete contacts.

## Features
- Add a new contact with name and phone number.
- View all contacts.
- Delete a contact by name.
- Exit the application.

## How It Works
- The program uses `prompt()` to interact with the user.
- Contacts are stored in an in-memory array (`contactList`) during the session.
- The application runs in a loop until the user chooses to exit or cancels the input.
- Output is displayed using `console.log()` and alerts.

## Limitations
- Data is not persistent. All contacts are lost when the page is refreshed.
- Input validation is basic (e.g., no phone/email format checking).
- Case-sensitive search (e.g., "John" is not equal to "john").

## Learning Goals
- Practice using loops, conditionals, and functions
- Work with arrays and object data structures
- Build simple console-based user interfaces
- Understand program structure and flow control

## Future Improvements (Stretch Ideas)
- Make the search case-insensitive
- Add the ability to delete or edit contacts
- Connect with localStorage to persist data
- Convert the project to a basic webpage using HTML/CSS