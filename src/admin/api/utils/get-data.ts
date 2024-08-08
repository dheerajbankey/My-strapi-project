import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: {q: '53.1,-0.13'},
  headers: {
    'x-rapidapi-key': '72a5e4f4femsh7b02d13373f3255p12f0a8jsn6e00f9219c56',
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
  }
};
 async function getData(){
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
 }
export default  getData;