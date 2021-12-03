// const nama = 'Octa Travelian';
// const umur = 21;

// function coba(string, ...values){
    // let result ='';
    // string.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`;
    // });
    // return result;
//     return string.reduce((result, str, i) => `${result} ${str}${values[i] || ''}`, '');
// }

// const str = coba `Halo, nama saya ${nama}, saya ${umur} tahun`;
// console.log(str);


const nama = 'Octa Travelian';
const umur = 21;
const email = 'octatravelian@gmail.com'

function higlight(string, ...values){
    return string.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = higlight `Halo, nama saya ${nama} saya ${umur} tahun, dan email saya adalah ${email}.`;

document.body.innerHTML = str;
