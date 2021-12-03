// Rest Parameter

// function myfuntion (...angka){
//     return angka;
    // return Array.from(arguments);
    // return arguments;
    // return [...arguments];
// }


// console.log(myfuntion(1,2,3,4,5));


// function jumlahkan(...angka){
    // let total = 0;
    // for (const m  of angka){
    //     total += m;
    // }
    // return total;

    // return angka.reduce((a,b) => a + b);
// }

// console.log(jumlahkan(1,2,3,4,5));

// const team = {
//     pm : 'Naufal',
//     frontend: 'Octa',
//     backend: 'Ziad',
//     Uiux: 'Ibjan',
//     devops: 'Dayat'
// }

// const {pm, ...myteams} = team;
// console.log(pm);

// function filterby(type, ...values){
//     return values.filter(v => typeof v === type);
// }

// console.log(filterby('number',1,2,'sandika',false,10,true,'dody'));
