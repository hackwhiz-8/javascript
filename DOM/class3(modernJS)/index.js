//  

for(let i = 1;i<=100;i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'this is para'+i;
    document.body.appendChild(newElement);
}


//OPTIMAL LOOP
const t1 = performance.now();
let mydiv = document.createElement('div');

for(let i = 1;i<=100;i++){
    let newElement1 = document.createElement('p');
    newElement1.textContent = "this is new para "+i;

    mydiv.append(newElement1);
}

document.body.appendChild(mydiv);
const t2 = performance.now();
console.log("webpage loaded in "+ (t2-t1)+"ms");

//DOCUMENT FRAGEMENT
//advantage -> this reduce the number of reflow and repaint . it's a kind of virtual DOM

let fragement = document.createDocumentFragment();

for(let i = 0;i<=100;i++){
    let newElement2 = document.createElement('p');
    newElement2.textContent = "this is a para "+i;
    fragement.append(newElement2);
}

document.body.appendChild(fragement);



//CALL STACK 