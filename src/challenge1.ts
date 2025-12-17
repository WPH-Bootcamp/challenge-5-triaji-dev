// Bikin type dari objek Book
interface Book {
    title: string;
    author: string;
    year: number;
}

// Bikin array kosong dulu, untuk menampung data books
const books: Book[] = [];

// Function untuk menambahkan data books
function addBook(title: string, author: string, year: number): void {
    // Pakai push untuk menambahkan data books
    books.push({ title, author, year });
    console.log(`Book added: "${title}" by ${author} (${year})`);
}

// Function untuk menampilkan data books
function listBooks(): void {
    console.log('All Books:');

    // Pakai foreach untuk menampilkan data books
    books.forEach((book) => {
        console.log(`- ${book.title} by ${book.author} (${book.year})`);
    });
}

// Function untuk mencari data books
function searchBook(title?: string): void {
    // Cek dulu input title bener nggak
    if (!title) {
        console.log('Please provide a title to search.');
        return;
    }
    
    // Cari data books yang sesuai dengan title, lalu disimpan sebagai results
    const results = books.filter((book) => book.title.includes(title));
    
    // Cek results ada isinya nggak / ada buku dengan title yang dicari nggak
    if (results.length === 0) {
        console.log(`No books found with title containing "${title}".`);
        return;
    }
    
    console.log(`Search Results for "${title}":`);

    // Pakai foreach untuk menampilkan data books hasil pencarian
    results.forEach((book) => {
        console.log(`- ${book.title} by ${book.author} (${book.year})`);
    });
}

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
