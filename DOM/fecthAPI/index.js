// let content = fetch('https://jsonplaceholder.typicode.com/todos/1'); 
// let output = content.json();





async function helper(){
    let options ={
        method:'POST',
        body:JSON.stringify({
            title:'foo',
            body:'bar',
            userId:1,
        }),
        headers: {
            'Content-type':'application/json;charset=UTF-8',
        },
    };
    
    
    let content = fetch('https://jsonplaceholder.typicode.com/posts/1',options);
    let response = await content.json();
    return response;
}

async function uti(){
    let ans = helper();
    console.log(ans);
}

uti();




//CLOSURE
// A closure is the combination of a function bundled together (enclosed)
//  with references to its surrounding state (the lexical environment).
//   In other words, a closure gives you access to an outer function's 
//   scope from an inner function. In JavaScript, 
// closures are created every time a function is created, at function creation time.

function abcd(){
    let name = 'mohit';
    function display(){
        console.log(name);
    }
    display();
}
abcd();