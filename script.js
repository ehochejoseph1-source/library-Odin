let table = document.querySelector("table")
const myLibrary = []

function Book(name , author , pages , read ,) {
   this.name = name
    this.author = author 
    this.read = read
    this.pages = pages
    this.id = crypto.randomUUID();
}

function addToLibrary(name , author ,pages , read) {
   let book1 = new Book(name , author ,pages , read)
    myLibrary.push(book1)
}
console.log(myLibrary)

let form = document.getElementById("form")
let dialog = document.getElementById("dialog")
let button = document.getElementById("submit")

 
function displayBook() {
    table.textContent = "";
    let caption = document.createElement("caption")
    caption.textContent = "Library"
    table.appendChild(caption)
    let row1 = document.createElement("tr")
    let name = document.createElement("th")
        let author = document.createElement("th")
        let pages = document.createElement("th")
        let read = document.createElement("th")
        let id = document.createElement('th')

        name.textContent = "Name"
        author.textContent = "Author"
        pages.textContent = "Pages"
        read.textContent = "Read status"
        id.textContent = "Book ID"

        row1.appendChild(name)
        row1.appendChild(author)
        row1.appendChild(pages)
        row1.appendChild(read)
        row1.appendChild(id)
        table.appendChild(row1)

    myLibrary.forEach(book => {
        

        let row = document.createElement("tr")
        let name = document.createElement("td")
        let author = document.createElement("td")
        let pages = document.createElement("td")
        let read = document.createElement("td")
        let id = document.createElement('td')

        name.textContent = book.name
        author.textContent = book.author
        pages.textContent = book.pages
        read.textContent = book.read
        id.textContent = book.id

        row.appendChild(name)
        row.appendChild(author)
        row.appendChild(pages)
        row.appendChild(read)
        row.appendChild(id)
        table.appendChild(row)
    })
}

button.addEventListener("click" , function(){
   
    let name = document.getElementById("name")
        let author = document.getElementById("author")
        let pages = document.getElementById("pages")
        let read = document.getElementById("read")

        form.reset()
        dialog.close()
        
        addToLibrary(name.value , author.value , pages.value , read.value)
      displayBook()
} )
  
