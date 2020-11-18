//array

let nilai = [90, 80, 70, 100, 85];
for (let i = 0; i < array.length; i++) {
    console.log("Nilai =", nilai[i] + 5);
    
}

console.log(nilai);


//nilai[2] = 90;
//console.log(nilai[nilai.length - 1]);

let inka = ["Inka", "Tesa", 33, true];
let wangania = ["Wangania", "Tesa", 17, true];
let vicensia = ["Vicensia", "Tesa", 18, true];
console.log(inka[inka.length -1]);
console.log(inka);

//toString()
console.log(inka.toString());
//join()
console.log(inka.join(" - "));

//pop()
inka.pop();
console.log(inka.join(" - "));

//push()
inka.push(true);
inka.push("Hello");
console.log(inka.join(" - "));

//shift()
inka.shift()
console.log(inka.join(" - "));

//unshift()
inka.unshift("inka");
inka.unshift("Prof");
console.log(inka.join(" - "));

//splice()
inka.splice("inka");
console.log(inka.join(" - "));

//concat()
let nama = inka.concat(wangania, vicensia);
console.log(nama);

//slice()
let vicensia = ["vicensia", "tesa", 18, true];
let vinka = ["Vinka", "tesa", 19, true];
let wangania = ["wangania", "Tesa", 17, true];

console.log(vinka);
console.log(wangania);

//sort()
let vicensia = ["vicensia", "tesa", 18, true];
vicensia.sort();

console.log(vicensia);

let umur = [18, 17, 20, 30, 19];

umur.sort();
console.log(umur);

//reverse()
let vicensia = ["vicensia", "tesa", 18, true];

vicensia.reverse();

console.log(vicensia);