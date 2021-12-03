// function inti(){

//     // let nama = 'Octa';
    
//     function tampilnama(nama){
    
//         console.log(nama);
        
//     }
    
//     return tampilnama;
// }
// let panggil = inti();
// panggil('Octa');



function ucapsalam(Waktu){
    return function(nama){
        console.log(`Hallow ${nama}, Selamat ${Waktu}`);
    }
}

let Selamatpagi = ucapsalam('Pagi');
let Selamatsiang = ucapsalam('siang');
let Selamatmalam = ucapsalam('malam');

Selamatpagi('Octa');

