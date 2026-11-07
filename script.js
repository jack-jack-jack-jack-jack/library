const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = crypto.randomUUID()
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read)
    myLibrary.push(book)
}

function displayBooks() {
    document.querySelectorAll(".book").forEach(book => book.remove())

    for (let book of myLibrary) {
        const myBook = document.createElement("div")
        myBook.dataset.id = book.id;
        myBook.classList.add("book")

        myBook.style.backgroundColor = "lightgrey"
        myBook.style.margin = "10px"
        myBook.style.display = "flex"
        myBook.style.width = "800px"
        myBook.style.justifyContent = "space-between"

        myBook.textContent = `${book.title} is by ${book.author} and is ${book.pages} pages long`

        const removeBtn = document.createElement("button")
        removeBtn.textContent = "Remove book"
        removeBtn.addEventListener("click", () => {
            const index = myLibrary.findIndex(book => book.id === myBook.dataset.id)
            myLibrary.splice(index, 1)
            displayBooks()
        })

        const readBtn = document.createElement("button")
        readBtn.textContent = book.read ? "Read" : "Unread"
        readBtn.addEventListener("click", () => {
            book.read = !book.read
            readBtn.textContent = book.read ? "Read" : "Unread"
        })

        myBook.append(readBtn)
        myBook.append(removeBtn)

        document.body.append(myBook)
    }
}

const bookForm = document.querySelector("#book-form")

bookForm.addEventListener("submit", (e) => {
    e.preventDefault()

    addBookToLibrary(
        document.querySelector("#title").value,
        document.querySelector("#author").value,
        Number(document.querySelector("#pages").value),
        document.querySelector("#read").checked
    )

    displayBooks()
    bookForm.reset()
    document.querySelector("#my-dialog").close()
})

displayBooks()
