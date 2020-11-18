console.log("Basic java script");

//conditional javaScript

let firstname = "inka";
let itsMarried = false;

if (itsMarried)
{
    console.log(firstname + " is married ");
}
else
{
    console.log(firstname + "is not married");
} 

/*
    jika umur < 13 tahun maka tampilkan kategori anak-anak
    jika umur 13 sampai 16 tahun tampilkan kategori remaja
    jika umur 17 sampai 25 tampilkan kategori anak muda
    jika umur 25 sampai 50 tahun tampilkan orang dewasa
*/



// let firstname = "inka"
// let job = "teacher";

// switch(job)
// {
//     case "teacher": console.log(firstname + "is a teacher");
//     break;
//     case "driver" : console.log(firstname + "is a driver");
//     break;
//     case "instructor ": console.log(firstname + "is a instructor");
//     break;
//     default: console.log(firstname + "does somthing else");
//     break;
// }

let umur = 18;

// if (umur < 13)
// {
//     console.log("Kategori anak-anak");
// }
// else if (umur >= 13 && umur <17)
// {
//     console.log("kategori remaja");
// }
// else if (umur >=17 && umur <26);
// {
//     console.log("kategori anak muda");
// }
// else if (umur >=26 && umur <51)
// {
//     console.log("Kategori orang dewasa");
// }

// switch(true)
// {
//     case umur < 13:
//         console.log("Kategori anak-anak");
//         break;
//     case umur >= 13 && umur <17:
//         console.log("kategori remaja");
//         break;
//     case umur >=17 && umur <26:
//         console.log("kategori anak muda");
//         break;
//     case umur >=26 && umur <51:
//         console.log("Kategori orang dewasa");
//         break;
//     default:
//         console.log("tidak ada dalam range");
//         break;
// }

//javascript function

// function helloWorld()
// {
//     console.log("Hello world function declaration");
// }
let helloworld = function(nama)
{
    let age = 21;
    console.log("Halo nama saya " + nama + ". Umur saya adalah " + age + " tahun.");
};

helloworld("Inka Wangania");