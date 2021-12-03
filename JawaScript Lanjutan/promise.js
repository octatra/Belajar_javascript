// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=8c2ca10d&s=Avengers',
//     success: movies => console.log(movies)
// });

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function (){
//     if (xhr.status === 200){
//         if (xhr.readyState === 4){
//             console.log(JSON.parse(xhr.response));
//         }
//     }else {
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('get','http://www.omdbapi.com/?apikey=8c2ca10d&s=Avengers');
// xhr.send();

// fetch('http://www.omdbapi.com/?apikey=8c2ca10d&s=Avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));

// contoh 1 promise
// let ditepati = false;
// const janji1 = new Promise((result, reject) => {
//     if(ditepati){
//         result('janji telah di tepati');
//     }else{
//         reject('Ingkar Janji....')
//     }
// });

// janji1
//     .then(response => console.log('OK : ' + response))
//     .catch(response => console.log('Not OK : '+ response));

// contoh 2 promise

// let ditepati = true;
// const janji2  = new Promise((resolve, reject) => {
//     if(ditepati){
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu');
//         }, 2000);
//     }else{
//         setTimeout(() => {
//             resolve('Tidak ditepati setelah beberapa waktu');
//         }, 2000);
//     }
// })

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log('Selesai Menunggu'))
//     .then(response => console.log('OK : ' + response))
//     .catch(response => console.log('Not OK : '+ response));

// console.log('selesai');


// contoh 3 promise.all()

const film = new Promise(resolve =>{
    setTimeout(() => {
        resolve([{
            judul : 'Avengers',
            release: '2019',
            pemeran: 'bllblblbl'
        }]);
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota : 'Mataram',
            temp : 25,
            kondisi : 'Mendung'
        }]);
    }, 500);
}) 

// film.then(resolve => console.log(resolve));
// cuaca.then(resolve => console.log(resolve));


Promise.all([film,cuaca])
    // .then(resolve => console.log(resolve));
    .then(resolve => {
        const [film,cuaca] = resolve;
        console.log(film);
        console.log(cuaca);
    });