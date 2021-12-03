const angka = [-1,8,9,7,6,4,3,2];

// const newAngka = [];
// for (i = 0;i <= angka.length; i++){
//     if(angka[i] >= 3){
//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka);


// Fillter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);


// Map
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// reduce
// const hitungangka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(hitungangka);


// Method Chaining
const newAngkaHasil = angka.filter(a => a > 5)
    .map(a => a * 3)
    .map(a => a / 2)
    .reduce((acc, cur) => acc + cur);
console.log(newAngkaHasil);