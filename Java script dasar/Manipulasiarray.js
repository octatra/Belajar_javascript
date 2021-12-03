var arr = ["A",1, true];

arr[0] = "octa";
arr[1] = "travelian";
arr[2] = "purnomo";
arr[3] = 19;
arr[4] = "october";
arr[5] = 1999;

arr[5] = undefined;
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}