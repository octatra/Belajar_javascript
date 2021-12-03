// Destructuring return value

// function Kalkulasi(a,b){
//     return {
//         tambah : a + b,
//         kurang : a - b,
//         Kali : a * b,
//         bagi : a / b
//     }
    
// }


// const {tambah, kurang, Kali, bagi} = Kalkulasi(2, 3);
// console.log(tambah);

// Destructuring function arguments
const mhs = {
    nama : 'Octa travelian',
    Nim : 19,
    kelas : 'A',
    IPK : {
        S1 : 89,
        S2 : 85,
        S3 : 81
    }
}

function cetakmhs({nama,Nim,IPK:{S1,S2,S3}}){
    return `Halo nama Saya ${mhs.nama}, Nim Saya ${mhs.Nim} Nilai Saya ${S1}`;
}

console.log(cetakmhs(mhs));