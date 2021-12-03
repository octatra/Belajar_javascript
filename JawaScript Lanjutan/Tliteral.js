// const nama = 'Octa travelian';
// const umur = 21;

// console.log('Halo Nama saya' + nama + 'umur saya' + umur);

// Embedded Expression
// console.log(`${alert('Halo')}`)
const x = 10;
    console.log(`${(x % 2 == 0) ? 'Genap' : 'Ganijil'}`);


// Html Fragments
const mhs = {
    nama : 'Octa',
    umur : 21,
    nomer : '080989809'
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nomer}</span>
</div>`;

console.log(el);