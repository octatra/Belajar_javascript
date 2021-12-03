var angka = [1,20,23,42,54,62,73,28,39,10];
var angka2 = angka.filter(function(x){
    return x > 5;
});

console.log(angka2.join(" - "));