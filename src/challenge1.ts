// Bikin type dulu 
interface Book {
    title: string;
    author: string;
    year: number;
}

// Lalu bikin array kosong, untuk menampung data books
const books: Book[] = [];

// Bikin addBook, lengkap sama parameter dan return void
function addBook(title: string, author: string, year: number): void {
    // Pakai push untuk menambahkan data books
    books.push({ title, author, year });
    console.log(`Book added: "${title}" by ${author} (${year})`);
}

// Bikin listBooks, lengkap sama return void
function listBooks(): void {
    console.log('All Books:');

    // Pakai foreach untuk menampilkan data books
    books.forEach((book) => {
        console.log(`- ${book.title} by ${book.author} (${book.year})`);
    });
}

// Bikin searchBook, parameter title? dan return void
function searchBook(title?: string): void {
    // Cek dulu input, kalau nggak ada title, tampilkan pesan
    if (!title) {
        console.log('Please provide a title to search.');
        return;
    }
    
    // Cari data books yang sesuai dengan title pakai filter
    // lalu disimpan sebagai results
    const results = books.filter((book) => book.title.includes(title));
    
    // Cek results, kalau nggak ada results, tampilkan pesan
    if (results.length === 0) {
        console.log(`No books found with title containing "${title}".`);
        return;
    }
    
    // Kalau ada results, tampilkan pesan
    console.log(`Search Results for "${title}":`);

    // Pakai foreach untuk menampilkan data books hasil pencarian
    results.forEach((book) => {
        console.log(`- ${book.title} by ${book.author} (${book.year})`);
    });
}

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
