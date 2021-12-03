// Callback
// function halo(nama){
//     alert(`Halo ${nama}`);
// }

// function tampilkanpesan(Callback){
//     const nama = prompt('Masukan Nama anda : ')
//     Callback(nama);
// }

// tampilkanpesan((nama => alert(`Halo ${nama}`)));



// const mhs = [
//     {
//         "nama" : "Octa travelian",
//         "Nim "  : "1901010035",
//         "Jurusan" : "Ilmu Komputer",
//         "iddosen" : 1
//     },
//     {
//         "nama" : "Ziad alfian",
//         "Nim "  : "1901010030",
//         "Jurusan" : "Ilmu Komputer",
//         "iddosen" : 1
//     },
//     {
//         "nama" : "Wawan indrawan",
//         "Nim "  : "1901010045",
//         "Jurusan" : "Ilmu Komputer",
//         "iddosen" : 1
//     }
// ];

// console.log('Mulai');
// mhs.forEach(m =>{
//     for(let i = 0; i < 1000000; i++){
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('Selesai');




// Asynchronous Callback
// function getDataMahasiswa(url, success, error){
//     let xhr = new XMLHttpRequest();
    
//     xhr.onreadystatechange = function (){
//         if (xhr.readyState === 4){
//             if (xhr.status === 200){
//                 success(xhr.response);
//             } else if(xhr.status === 404){
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();

// }
// console.log('Mulai');
// getDataMahasiswa('json/mahasiswa.json', result => {
//     const mhs = JSON.parse(result);
//     mhs.forEach(m => console.log(m.nama));        
// }, () => {

// });
// console.log('Selesai');

console.log('Mulai');
$.ajax({
    url: 'json/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('Selesai');



