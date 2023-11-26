//EVENTLISTENER

function eventPrint(){
    console.log("i clicked on the document");
};

// ADDEVENTLISTENER
document.addEventListener('click',eventPrint);

//REMOVEEVENTLISTENER
document.removeEventListener('click',eventPrint);

//DEFAULT ACTION
//prevent from doing defualt action 

let link = document.querySelectorAll('a');
console.log(link);
let thirdlink = link[2];
// console.log(link);
thirdlink.addEventListener('click',function(event){
    event.preventDefault();
    console.log('maja aaya');
});



//AVOID TOO MANY EVENTS 

let mydiv = document.createElement('div');

//here all the events using the same object called para status and no need to create the same objects again and again 
//but it does'nt provide individuality  
function parastatus(event){
    console.log('para ' + event.target.textContent);
}

for(let i = 0;i<=50;i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'new para '+i;
    newElement.addEventListener('click',parastatus);
    mydiv.append(newElement);
}

document.body.appendChild(mydiv);


let art = document.querySelector('#wrapper2');

art.addEventListener('click',function(event){

    if(event.target.nodeName === 'SPAN'){
    console.log('span pr click kia h '+ event.target.textContent);
    } 
});