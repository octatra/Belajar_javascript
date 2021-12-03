// 1 Object Literal
// tidak efektif untuk Object Yang banyak

// let Mahasiswa1 = {
//     nama : 'octa',
//     energy : 10,
//     makan : function(porsi){
//         this.energy = this.energy + porsi;
//         console.log(`Hallow ${this.nama} , selamat makan!!`);

//     }
// }


// 2 Function Declaration
// const methodMahasiswa = {
//     makan : function (porsi){
//         this.energy += porsi;
//         console.log('Hallow Selamat Makan');
//     },

//     main : function (jam){
//         this.energy -= jam;
//         console.log('Selamat bermain');
//     },

//     tidur : function (jam){
//         this.energy += jam * 2;
//         console.log('Selamat Tidur')
//     }
// };
// function Mahasisawa2(nama,energy){
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;
//     return mahasiswa;

// }
// let octa = Mahasisawa2('octa',10);

// 3 Constructor function
// function Mahasisawa2(nama,energy){
//     this.nama = nama;
//     this.energy = energy;

//     this.makan = function(porsi){
//         this.energy += porsi;
//         console.log(`Hallow ${nama}, Selamat Makan`);
//     }

//     this.main = function(jam){
//         this.energy -= jam;
//         console.log(`Selamat bermain ${nama}`);
//     }
// }

// let octa = new Mahasisawa2('octa',10);



// function Mahasisawa(nama,energy){
// //    let mahasiswa = Object.create(methodMahasiswa);
//     this.nama = nama;
//     this.energy = energy;

// }

// Mahasisawa.prototype.makan = function(porsi){
//     this.energy += porsi;
//     return 'Hallo Selamat makan';
// } 

// Mahasisawa.prototype.tidur = function(Jam){
//     this.energy += Jam * 2;
//     return 'Selamat tidur';
// }

// Mahasisawa.prototype.main = function(jam){
//     this.energy -= jam;
//     return 'Salamat bermain';
// }

// let octa = new Mahasisawa('Octa', 10);

class Mahasiswa {
    constructor(nama, Energi){
        this.nama = nama;
        this.Energi = Energi;
    }

    makan (porsi){
        this.energy += porsi;
        return 'Hallo Selamat makan';
    } 

    tidur (Jam){
        this.energy += Jam * 2;
        return 'Selamat tidur';
    }

    main (jam){
        this.energy -= jam;
        return 'Salamat bermain';
    }

}

let octa = new Mahasiswa('octa',10);
let ucok = new Mahasiswa('Jupri',19);
let ade = new Mahasiswa('Ade', 30);
let nabila = new Mahasiswa('Nabila',10);