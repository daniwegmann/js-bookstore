const Product = require("./Product");

module.exports = class Book extends Product {
    constructor(title, synopsis, genre, pages, author, description, price, inStock) {
        super(`Livro: ${title}`, description, price, inStock)
        this.tite = title
        this.synopsis = synopsis
        this.genre = genre
        this.pages = pages
        this.author = author
    }
}