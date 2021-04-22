//Promise has 3 state

//1. Pending 
//2. Fullfilled ->  then
//3. Rejected   ->  Catch


//Lets create a async function

function y(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve('Anil');
        },3000);       
    });
}

async function x(){
    //async function alway return a promise
    let z = await y(); // await alway wait for promise
    return z 
}
let a = x();
//console.log(a);

//Display the result using promise chaining
// po.then.then.then.catch.finally
console.log('Hello');

a.then(function(r){
    console.log(r);
}).catch(function(e){
    console.log(e);
}).finally(function(){
    console.log('How are you?');
});

//Finally always execute
//console.log('I am fine. Thanks');
