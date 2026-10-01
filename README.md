# Online Bookstore

Responsive bookstore demo aligned with the Full Stack Java project guide.

## Run
Open `index.html` directly in a browser.

## Included
- Book catalogue with title, author, category and price
- Search and category filter
- Add/remove cart items
- Cart total and simulated checkout
- localStorage cart persistence

## Java/Spring extension
The frontend is structured so the static `books` array can later be replaced with `GET /books`, cart actions with REST endpoints, and checkout with `POST /checkout`.
