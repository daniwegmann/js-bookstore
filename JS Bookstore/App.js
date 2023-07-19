const DataBase = require("./DataBase")
const Author = require("./entities/Author")
const Order = require("./entities/Order")
const User = require("./entities/User")

module.exports = class App {
    static #database = new DataBase()

    createUser(name, email, password) {
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers() {
        App.#database.find('users')
    }

    createAuthor(name, nationality, bio) {
        const author = new Author
        App.#database.saveAuthor(author)
    }

    getAuthor() {
        return App.#database.find('authors')
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock) {
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }

    addBook(bookName, quantity) {
        App.#database.addBooksToStock(bookName, quantity)
    }

    createPoster(name, description, height, width, price, inStock) {
        const poster = new Poster(name, description, height, width, price, inStock)
        App.#database.savePoster(poster)
    }

    addPoster(posterName, quantity) {
        App.#database.addPostersToStock(posterName, quantity)
    }

    createOrder(items, user) {
        const order = new Order(items, user)
        App.#database.saveOrder(order)
        order.data.items.forEach(({product, quantity}) => {
            if(product instanceof Book) {
                App.#database.removeBooksFromStock(product.name, quantity)
            } else if (procuct instanceof poster) {
                App.#database.addPostersToStock(product.name, quantity)
            }
        })        
    }

    getOrders() {
        return App.#database.find('orders')
    }

    showDataBase() {
        App.#database.showStorage()
    }

}