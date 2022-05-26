function Book(title, author, pages, read){
    this.title = title 
    this.author = author  
    this.pages = pages
    this.read = read
    this.info = function(){
        return console.log(title, author, pages, read)
    }
}

const harryPotter = new Book('Goblet of fire', 'J.K Rowling', 9, true)

console.log(harryPotter.title)
console.log(harryPotter.read)
console.log(harryPotter.info)