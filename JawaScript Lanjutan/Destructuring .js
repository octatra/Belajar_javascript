// Destructuring 

// ================================================

// Array
// const perkenalan = ['Halo','nama','saya','octa','travelian'];

// const [salam,satu,dua,nama,panjang] =perkenalan;

// ================================================

// Skip Array
// const [salam,,,nama,panjang] =perkenalan;
// console.log(salam);

// ================================================

// swap item
// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);

// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// ================================================

// return Value pada funtion
// function coba() {
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(a)

// ================================================

// Rest parameter
// const [a, ...values] = [1,2,3,4,5];
// console.log(a);
// console.log(values);

// ================================================

// Destruction Object
// const mhs = {
//     nama : 'Octa Travelian',
//     umur : 33
// }

// const {nama, umur} = mhs;
// console.log(nama);

// Assigment tanpa deklarasi object
// ({nama, umur} = {nama : 'Octa', umur: 33});
// console.log(nama);

// ================================================

// Assigment ke variabel baru
// const mhs = {
//     nama : ' Octa Travelian',
//     umur : 21
// }

// const {nama:n, umur:u} = mhs;
// console.log(n);

// ================================================

// memberi Default value
// const mhs = {
//     nama : 'Octa Travelian',
//     Umur : 21
// }

// const {nama, umur, email = 'Email@gmail.com'} = mhs;
// console.log(email);


// ================================================

// memberi nilai default + assign ke variabel baru
// const mhs = {
//     nama : 'Octa travelian',
//     umur : 21,
//     Email : 'Octatravelia@gmail.com'
// }

// const{nama: n, umur:u,Email:e= 'Octa@gmail.com'} = mhs;
// console.log(e);

// ================================================

// rest Parameter
// const mhs = {
//     nama : 'Octa travelian',
//     umur : 21,
//     Email : 'Octatravelia@gmail.com'
// }

// const{nama, ...Value} = mhs;
// console.log(Value);

// ================================================

// Mengambil field pada object, stelah dikirim sebagai parameter untuk function

const mhs = {
    id : 123,
    nama : 'Octa',
    umur : 21,
    Email : 'Octa@gmail.com'
}

function getid(mhs){
    return mhs.id;
}

console.log(getid(mhs));