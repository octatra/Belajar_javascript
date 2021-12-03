// for...of
// const mhs = ['octa','jupri','juki'];

// for (let i = 0;i < mhs.length; i++){
//     console.log(mhs[i]);
// }


// mhs.forEach(m => console.log(m)); 

// for (const m of mhs){
//     console.log(m);
// }

// const linama = document.querySelectorAll('.nama');

// linama.forEach(m => console.log(m.textContent));

const mhs = {
    nama : 'Octa',
    Umur : 21,
    Email : 'octatravelian@gmail.com'
}

for(m in mhs){
    console.log(mhs[m])
}