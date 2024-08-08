// import getData from '../utils/get-data';

// interface ErrorResponse {
//   error: string;
// }

// async function fetchedData(): Promise<Record<string, any> | ErrorResponse> {
//   try {
//     const data = await getData();

//     if (typeof data === 'object' && data !== null) {
//       return data; 
//     } else {
//       throw new Error('Data is not in the expected format');
//     }
//   } catch (err) {
//     // Handle errors
//     console.error('Error fetching data:', err);
//     return { error: 'Failed to fetch data' }; // Return an error object
//   }
// }

// export default fetchedData;

import axios, { AxiosRequestConfig } from 'axios';

interface WeatherData {
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
  };
  location: {
    name: string;
    country: string;
  };
}

const options: AxiosRequestConfig = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: { q: '53.1,-0.13' },
  headers: {
    'x-rapidapi-key': '72a5e4f4femsh7b02d13373f3255p12f0a8jsn6e00f9219c56',
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
  },
};

async function getData(): Promise<WeatherData> {
  try {
    const response = await axios.request<WeatherData>(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error; // Re-throw the error to handle it in the caller
  }
}

export async function getWeatherData(): Promise<{
  temperature: number;
  condition: string;
  location: string;
  country: string;
}> {
  try {
    const data = await getData();

    // Transform the data to the format you want to return
    const formattedData = {
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
      location: data.location.name,
      country: data.location.country,
    };

    return formattedData;
  } catch (err) {
    throw err;
  }
}
