// string literal
let fullName = "Jhon Doe";
let age = 33;
let address = "Manado";

// Helo nama saya John Doe, umur saya 33 tahun
// dan saya tinggal di manado

// //Contoh ES5
// let kalimat5 = "Halo nama saya " 
// + fullName 
// +"umur saya" +
// age + 
// "tahun dan saya tinggal di" +
// address;;

// //Contoh ES6
// let kalimat6 =`Halo nama saya ${fullName},umur saya ${age} tahun.`;
// console.log(kalimat5);
// console.log(kalimat6);

// Arrow Funtion
//Contoh ES 5
// function sayGreetings5(){
//     return 'Hello World5';
// }

// // Contoh ES6
// const sayGreetings6 = () => {
//     return 'Hello World6';
// }
// console.log(sayGreetings5());
// console.log(sayGreetings6());

// Implicit Return Value
const sayGreetings6 = (name) => `Hello ${name}`;

//Pada IIFE
(() =>
{
    console.log ("Hello Boy")
}
)();

let output1 = (()=> 'Hello BI')();
console.log(output1);

// Pada Callback
const numbers = [1,2,3,4,5];
let output = numbers.map((item) => item);
console.log(output);

// Default Parameter
const sayGreetings5 = (fullName="John Doe") => {
    if (fullName === undefined){
        fullName ="John Doe";
    }
    console.log(`Hello ${fullName}`);

};
sayGreetings5("Bogo");
