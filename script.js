const myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title 
    this.author = author 
    this.pages = pages 
    this.read = read
    this.id = crypto.randomUUID() 
}

function addBookToLibrary(title,author,pages,read) {
    const book = new Book(title,author,pages,read)
    myLibrary.push(book)
}

function displayBooks() {
    for(let book of myLibrary) {
        console.log(`${book.title} is by ${book.author} and is ${book.pages} pages long`)
    }
}

addBookToLibrary("LOTR","TOLKEIN",123,"NO")
addBookToLibrary("LOTR2","TOLKEIN",123,"NO")
addBookToLibrary("LOTR3","TOLKEIN",123,"NO")
displayBooks()