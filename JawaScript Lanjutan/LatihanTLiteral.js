// const mhs = [
//         {
//         nama : 'Octa Travelian',
//         umur : 21,
//         Nomer : '081907313664',
//         email : 'octatravelian@gmail.com'
//     },
//     {
//         nama : 'Rizky Fahly',
//         umur : 20,
//         Nomer : '081907313664',
//         email : 'Rizkyfahly@gmail.com'
//     },
//     {
//         nama : 'Jupri ahmad',
//         umur : 21,
//         Nomer : '081907313664',
//         email : 'jupri19@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.Nomer}</span>
// </div>`;

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//     <li>Nama  : ${m.nama}</li>
//     <li>Email : ${m.email}</li>
//     </ul>`).join('')}
//     <span class="nrp">${mhs.Nomer}</span>
// </div>`;

// const lagu = {
//         judul : `Surat Cinta Untuk Starla`,
//         Penyanyi : `Virgon`,
//         feat : `Starla`
// };


// const el = `<div class="lagu">
//     <ul>
//         <li>Penyanyi : ${lagu.Penyanyi}</li>
//         <li>Judul : ${lagu.judul}</li>
//     </ul>
// </div>;`

const mhs = {
    nama : 'Octa Travelian',
    semester : 5,
    matakuliah : [
        'Pemrograman Web',
        'Analisis Algoritma',
        'PBO',
        'Kalkulus'
    ]

}

function cetakMatakuliah(matakuliah){
    return `
    <ol>
        ${matakuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">${mhs.semester}</span>
    <h4>Mata Kuliah</h4>
    ${cetakMatakuliah(mhs.matakuliah)}
</div>`

document.body.innerHTML = el;