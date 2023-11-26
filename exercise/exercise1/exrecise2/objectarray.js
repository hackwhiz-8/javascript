let a = [
    {name:"mohit" ,age:21},
    {name:"ravi" ,age:31},
    {name:"rakesh" ,age:41}
]
console.log(a[2].age)


const func = function(a){
   
    let temp = 0 ;
    for(let i=0;i<=2;i++){
        if(temp < a[i].age){
            temp = a[i].age;
        }
    }

    let obj = { 
        name:"mohit",
        age:temp
    }
    console.log(obj);
      
}

func(a);