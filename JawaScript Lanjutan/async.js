// const coba=  new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai')        
//     }, 2000);

// });
// console.log(coba);
// coba.then(() => console.log(coba));


function cobapromise(){
    return new Promise((resolve, reject) =>{
        const waktu = 5000;
        if(waktu < 5000){
            setTimeout(() => {
                resolve('selesai')
            }, waktu);    
        }else{
            reject('kelamaan!');
        }
    });
}

// const coba = cobapromise();
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba));
// coba.then(() => console.log(coba));

async function cobaasync(){
    try {
        const coba = await cobapromise();
        console.log(coba);    
        
    } catch (error) {
        console.log(error);
    }
}

cobaasync();

