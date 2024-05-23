// Array of books
const books = [
    { title: "Book One", author: "john doe", year: 2005 },
    { title: "Book Two", author: "jane smith", year: 2015 },
    { title: "Book Three", author: "peter pan", year: 2012 },
    { title: "Book Four", author: "mary jane", year: 2008 }
];

// Function to capitalize author names
function capitalizeAuthorName(author) {
    return author.split(' ')
                 .map(name => name.charAt(0).toUpperCase() + name.slice(1))
                 .join(' ');
}

// Filter books published after 2010 and capitalize author names
const filteredBooks = books
    .filter(book => book.year >= 2010)
    .map(book => ({
        ...book,
        author: capitalizeAuthorName(book.author)
    }));

// Output the filtered books
console.log(filteredBooks);
