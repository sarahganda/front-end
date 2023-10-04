// javascript function


// console.log (greetings());
// function greetings(){
//     return "Hello";
// }


// const greetings = function (){
//     return "Hai";
// }
// console.log (greetings());

// const age = 18; // Deklarasi Global

// const greetings = function (fullName){
//     // parameter
//     console.log (age); // local
//     const job = "teacher";
//     if (job === teacher){
//         const address ="Manado"; // Block
//     }
// }
// console.log (address);
// return "Hello";

(function(){
    console.log("Hello IIFE");
    }
)();

function createFun(name,callback){
    const fun = "Hell" + name;
    callback(fun);
}

createFun("Frank", function (fun)){
    console.log(fun);
}
