const myLibrary = []

function Book(name , author , pages , read ,) {
   this.name = name
    this.author = author 
    this.read = read
    this.pages = pages
    this.id = crypto.randomUUID();
}

function addToLibrary(name , author ,pages , read) {
   let book = new Book(name , author ,pages , read)
    myLibrary.push(book1)
}

addToLibrary("named" , "author" ,"pages" , "read")
addToLibrary("named" , "author" ,"pages" , "read")
console.log(myLibrary)
 