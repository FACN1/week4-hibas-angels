# week4-hibas-angels

Hiba's Angels week 4 autocomplete project.

### Local Run Instructions
- Clone the repository && cd
- npm install
- node src/server.js

### Local Test Instructions
- Clone the repository && cd
- npm install
- node tests/tests.js

### Plan
- Navigating to the page with the browser should request index.html from the server
- Each letter typed in the input box should send a request to the server
- The server should search the word list for some results
- The server should respond with an array of results
- The render function should fill the words into the list

### User Stories
As a **user searching for something**
> I want to type in a word

> So that I can see a list of suggested words

As a **disabled user**
> I want the website to be accessible

> So that I can easily understand all the information on the website

### Useful Things Learnt
- We used a `keyup` event listener on the input box - we first tried `change`, `keypress` and `keydown`, but none of them gave us the correct information at the correct time.

### Stretch Goals
- Heroku
- more functionality, e.g. click on a word/autofill a whole sentence
