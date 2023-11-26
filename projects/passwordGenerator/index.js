const inputSlider = document.querySelector("[data-lengthSlider]");
const data_length_num = document.querySelector(".pass-length-num");
const copy_msg = document.querySelector("[data-copy-msg]");
const display_data = document.querySelector("[display-pass]");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const data_indicator = document.querySelector("[data-indicator]");
const data_generate_btn = document.querySelector("[data-generate-btn]");
const data_copy_btn = document.querySelector("[data-copy-btn]");
const allcheckbox = document.querySelectorAll("input[type=checkbox]")


let password = "";
let checkcunt = 0;
let passLength = 10;
// set strength color gray

// let symbolarr = ["!","@","#","$","%","^","&","*","{","}",]

let symbol = "!@#$%^&*(){}[]+=_-<>?/|";
handleslider();

function handleslider(){
    inputSlider.value = passLength;
    data_length_num.innerText = passLength;

    const min = 1;
    const max = 20;
    inputSlider.style.backroundsize = ((passLength-min)*100/(max-min))+"% 100%"
}

function setIndicator(color){
    
    indcator.style.backgroundcolor = color;

}

function getRandInt(min,max){
    return  Math.floor(Math.random()*(max-min))+min;

}

function randNUmber(){
  return  getRandInt(0,9);
}

function getLowerCase(){
   return String.fromCharCode( getRandInt(97,123));
}

function getupperCase(){
    return String.fromCharCode( getRandInt(65,91));
 }

 function symbolgenrate(){
   const rand = getRandInt(0,symbol.length);
   return symbol.charAt(rand);
 }

 symbolgenrate();

 function  calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if(uppercase.checked) hasUpper = true;
    if(lowercase.checked) hasLower = true;
    if(numbers.checked) hasNum = true;
    if(symbols.checked) hasSym = true;

    if(hasUpper && hasLower & (hasNum || hasSym) && passLength>=8){
        setIndicator("#0f0");
    }else if(
        (hasLower || hasUpper) &&
        (hasNum || hasSym) && passlength>=6
    ){
        setIndicator("#ff0")
    }else{
        setIndicator("#f00");
    }
 }


 async function copycontent (){
    try{
          await navigator.clipboard.writeText(display_data.value);
          copy_msg.innerText = "copied";
    }
    catch(error){
        copy_msg.innerText = "failed";
    }

    copy_msg.classList.add("active");
    setTimeout(() => {
        copy_msg.classList.remove("active");
    }, 2000);
 }

 inputSlider.addEventListener('input',(e)=>{
    passLength = e.target.value;
    handleslider();
 });

 data_copy_btn.addEventListener('click',()=>{
    if(display_data.value){
        copycontent();
    }
 })

 function handlechkChange(){
    checkcunt = 0;
    allcheckbox.forEach((checkbox)=>{
        if(checkbox.checked){
            checkcunt++;
        }
    });
    if(passLength < checkcunt){
        passLength = checkcunt;
        handleslider();
    }
 }

 allcheckbox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handlechkChange);
 })

 data_generate_btn.addEventListener('click',()=>{
    //if no checkbox is checked
    if(checkcunt == 0) return ;
    if(passLength < checkcunt) {
        passLength = checkcunt;
        handleslider();
    }

    // let's start to make new password
    password = 0;
    //lets put the stuff 
    let funcarr = [];
    if(uppercase.checked){
        funcarr.push(getupperCase);
    }
    if(lowercase.checked){
        funcarr.push(getLowerCase);
    }
    if(numbers.checked){
        funcarr.push(randNUmber);
    }
    if(symbols.checked){
        funcarr.push(symbolgenrate);
    }


    for(let i = 0;i<funcarr.length;i++){
       password+=funcarr[i]();
    }
    for(let i = 0;i<passLength -funcarr.length;i++){
        let rand = getRandInt(0,funcarr.length-1);
        password+=funcarr[rand]();
     }

     //shuffle 
     password = shuffle(Array.from(password));

     //show in UI
     display_data.value = password;

     //calculate strength
     calcStrength();
 })

 function shuffle(array){
    for(let i = array.length-1;i>0;i--){
        const j = Math.floor(Math.random()*(i+1));
        const temp = array[i];
        array[i]=array[j];
        array[j]=temp;
    }
    let str ="";
    array.forEach((ele)=>(str+=ele));
    return str;
 }