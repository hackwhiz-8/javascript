

const url = 'https://love-calculator.p.rapidapi.com/getPercentage?sname=mohit&fname=kumkum';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2692c35dd4msh15a7b60b169948dp12f95bjsnbd531ac31b08',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};

async function showdetails(){
      try {
        
        let data = await fetch(url,options);

        let result =await data.json();
        console.log(result);

      } catch (error) {
        console.log(`error occured ${error}`);
      }
}