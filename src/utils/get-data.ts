import axios from 'axios';

const fetchMatchData = async (): Promise<any> => {
  const options = {
    method: 'GET',
    url: 'https://api.saphiregames.com/api/get-series-redis/1',
    // No params or headers needed, so they are omitted
  };
  
  
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchMatchData;

