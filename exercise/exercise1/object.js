let mohit={
    name: "mohit",
    age:20,
};

let c = [];
let j = 0;
for(let i in mohit){
     c[j++] = mohit[i];
}

console.log(c);