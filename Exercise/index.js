// - Destructuring (Array & Object)
// Destructuring adalah teknik dalam JavaScript yang memungkinkan Anda untuk mengekstrak nilai-nilai 
// dari array atau properti-properti dari objek dan menyimpannya dalam variabel terpisah.
// Ini membuat kode lebih ringkas dan mudah dibaca.
// Array
const colors = ["merah", "hijau", "biru"];
const [warna1, warna2, warna3] = colors;

console.log(warna1); // Output: "merah"
console.log(warna2); // Output: "hijau"
console.log(warna3); // Output: "biru"

// Object
const person = { nama: "Kyle", umur: 30 };
const { nama, umur } = person;

console.log(nama); // Output: "John"
console.log(umur); // Output: 30


// - Destructuring dengan mengambil sebagian item (Array & Object)
// Destructuring dengan mengambil sebagian item adalah cara untuk hanya mengekstrak sebagian 
// nilai dari array atau objek yang sesuai dengan variabel yang telah Anda tentukan, 
// yang memungkinkan Anda mengabaikan nilai yang tidak Anda perlukan.
// Array
const fruits = ["apel", "pisang", "mangga", "jeruk"];
const [buah1, buah2] = fruits;

console.log(buah1); // Output: "apel"
console.log(buah2); // Output: "pisang"

// Object
const student = { nama: "Handly", usia: 21, jurusan: "FilKom" };
const { nama, jurusan } = student;

console.log(nama); // Output: "Alice"
console.log(jurusan); // Output: "Biologi"

// - Destructuring dengan menggunakan default value (Array & Object)
// Destructuring dengan menggunakan default value adalah fitur yang memungkinkan Anda 
// memberikan nilai default untuk variabel yang dihasilkan dari destructuring jika nilai 
// yang sesuai tidak ditemukan dalam array atau objek. Ini membantu menghindari 
// kesalahan ketika nilai yang diharapkan tidak ada.
// Array
const numbers = [1, 2];
const [a, b, c = 3] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3 (default value karena indeks ke-2 tidak ada)

// Object
const person = { nama: "Jofan" };
const { nama, pekerjaan = "Tidak Ada" } = person;

console.log(nama); // Output: "David"
console.log(pekerjaan); // Output: "Tidak Ada" (default value karena properti pekerjaan tidak ada)

// - Destructuring dengan menggunakan rest operator (Array & Object)
// Destructuring dengan menggunakan rest operator adalah cara untuk mengambil sisa elemen dari array 
// atau sisa properti dari objek setelah beberapa nilai atau properti telah diekstrak.Ini memungkinkan 
// Anda untuk mengelompokkan nilai atau properti tertentu dan menyimpan sisanya dalam satu variabel.
// Array 
const scores = [95, 89, 78, 92, 88];
const [best, ...rest] = scores;

console.log(best); // Output: 95
console.log(rest); // Output: [89, 78, 92, 88]

// Object
const book = { judul: "Harry Potter", penulis: "J.K. Rowling", tahun: 1997 };
const { judul, ...details } = book;

console.log(judul); // Output: "Harry Potter"
console.log(details); // Output: { penulis: "J.K. Rowling", tahun: 1997 }
