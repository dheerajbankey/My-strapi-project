export default {
  routes: [
    {
     method: 'GET',
     path: '/get-cricket-data',
     handler: 'get-weather-data.fetchData',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
