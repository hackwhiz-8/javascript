

const axiosRequest = require('axios');

async function getActivity(){
    try {
        let response = await axiosRequest.get('https://www.boredapi.com/api/activity');
        console.log(`you could ${response.data.activity}`);
    } catch (error) {
        console.log('error occured ${error}');
    }
}


// axiosRequest.get('https://www.boredapi.com/api/activity')
//       .then(response =>
//       {
//         console.log(`you could ${response.data.activity}`)
//       })
//       .catch(error =>{
//         console.log(`ERROR ${error}`)
//       });

//       console.log("hello hunny bunny");