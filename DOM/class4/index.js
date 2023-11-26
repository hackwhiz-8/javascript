// //synchronus Code 
// function sync(){
//     console.log("first");
// }

// sync();
// console.log("second");


// //asynchronus Code 

// //here,setTImeout is async function which will print at last when callstack get empty
// setTimeout(function(){
//     console.log("third");
// },0);

// function sync(){
//     console.log("first");
// }

// sync();
// console.log("second");



// //PROMISE 
// let meraPromise = new Promise(function(resolve,reject){
//     console.log('im inside the promise');
//      // resolve(1999);
//       reject(new Error('error occured'));
// });


// meraPromise.then((value)=>{console.log(value)},(error)=>{console.log("recieved an error")});


// let task1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('set timout 1 started');
//     },6000);
//     resolve(1234);
// });


// task1.then(()=>{
//     let task2 = new Promise(function(resolve,reject){
//         setTimeout(() => {
//             console.log('inside second setTimeout');
//         }, 3000);
//         resolve('resolved');
//     });
//     return task2;

   
// }).then(()=>{
//     let task3 = new Promise(function(resolve,reject){
//         setTimeout(() => {
//             console.log('inside the third setTImeout');
//         }, 2000);
//     });
// });



// async function abcd(){
//     console.log("async function always return promise ");
// };

// abcd();

 async function utility(){

    let maha = new Promise((resolve,reject)=>{
           setTimeout(() => {
               resolve("mh is cool");
           }, 2000);
    });

    let delhi = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("dh is cool");
        }, 4000);
     });

 let Dh =  delhi;
 let Mh =  maha;

   return [Dh,Mh];
};