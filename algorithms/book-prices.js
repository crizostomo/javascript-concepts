const books = require('./book-list')

let cheapest = 0;

for (let current = 0; current < books.length; current++) {
    if (books[current].price < books[cheapest].price) {
        cheapest = current
    }
}

console.log(`the cheapest book costs ${books[cheapest].price} and the title is ${books[cheapest].title}`)
