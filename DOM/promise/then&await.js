// const url = `https://jsonplaceholder.typicode.com/posts/1`;

//  THEN AND CATCH KEYWORD

// fetch(url)
//    .then((res)=>{
//     return res.json();
//    })
//    .then((data)=>{
//     console.log(data);
//    })
//    .catch((err)=>{
//     console.log(err);
//    });

//    AWAIT KEYWORD

const loaddata = async () => {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts/1`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(`error occured ${error}`);
  }
};

loaddata();

// MAKING 3 API REQUESTS THAT REQUIRE DIFFRENT VARIABLE TO ACCESS THE DATA FROM THE API THAT IS 
// VERY CLUMSY WAY TO PRINT THIS IS THE EXAMPLE .
const loaddata1 = async () => {
   try {
      const url = `https://jsonplaceholder.typicode.com/posts/1`;
      const url2 = `https://jsonplaceholder.typicode.com/posts/2`;
      const url3 = `https://jsonplaceholder.typicode.com/posts/3`;
      const res = await fetch(url);
      const data = await res.json();

      const res2 = await fetch(url2);
      const data2 = await res2.json();

      const res3 = await fetch(url3);
      const data3 = await res3.json();

      return [data,data2,data3];


   } catch (error) {
      console.log(`error occured ${error}`);
   }
};
//  SO TO PREVENT THE UPPER WAY OF ACCESSING WE CAN USE PROMISE.ALL()

// **DON'T LOOK HERE **

// await is required before the promise.all to get fully loaded before moving ahead
//otherwise it will fetch only one request an move forward 

const loaddata2 = async () => {
   try {
      const url1 = `https://jsonplaceholder.typicode.com/posts/1`;
      const url2 = `https://jsonplaceholder.typicode.com/posts/2`;
      const url3 = `https://jsonplaceholder.typicode.com/posts/3`;

      const results = await Promise.all([
         fetch(url1),
         fetch(url2),
         fetch(url3)
      ]);
      // console.log(results);
      // const data1 = results[0].json();
      // const data2 = results[1].json();
      // const data3 = results[2].json(); 

      // return [data1,data2,data3];
      const dataPromises = results.map(result => result.json());
      const finalData = await Promise.all(dataPromises);
      console.log(finalData);


   } catch (error) {
      console.log(`error occured ${error}`);
   }
};


( async ()=>{
   const data = await loaddata2();
   console.log(data);
})();