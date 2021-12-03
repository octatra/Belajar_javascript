// Spread Operator
// memecah iterabeles menjadi single element

// const mhs = ['Octa','Travelian','Purnomo'];
// const dosen = ['Tomi','Mayadi','Apri'];
// const ubg = [...mhs, ...dosen];
// const ubg = [...mhs, 'Romi',...dosen];
 // const orang = mhs.concat(dosen);
// console.log(...orang);


// meng-copy array
// const dosen1 = [...dosen];
// dosen1[2] = 'Katerin';
// console.log(dosen1);


// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for(let i = 0; i < liMhs.length; i++){
//     mhs.push(liMhs[i].textContent);
// }

// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<Span>${h}</Span>`).join('');
nama.innerHTML = huruf;

const nama2 = document.querySelector('.nama2');
const huruf2 = [...nama2.textContent].map(h => `<Span>${h}</Span>`).join('');
nama2.innerHTML = huruf2;

const nama3 = document.querySelector('.nama3');
const huruf3 = [...nama3.textContent].map(h => `<Span>${h}</Span>`).join('');
nama3.innerHTML = huruf3;