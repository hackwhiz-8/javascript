let a = [1,2,3,4,5];
let b = [3,4,5,6];

let c=[];

for(let i = 0;i<5;i++){
    let temp = a[i];
    for(let j = 0;j<4;j++){
         if(temp == b[j]){
            c.push(temp);
         }
    }
}
console.log(c);