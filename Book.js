let myLibrary = []

function addBookToLibrary(Book){
    myLibrary.push(Book)
}

//need to write function to scroll through an array 
function Book(title, author, pages, read){
    this.title = title 
    this.author = author  
    this.pages = pages
    this.read = read
    this.info = function(){
        return console.log(title, author, pages, read)
    }
}

const harryPotter = new Book('Goblet of fire', 'J.K Rowling', 9, true);