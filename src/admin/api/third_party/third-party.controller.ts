// import  fetchedData from './third-party.service';
// import { Request, Response } from 'express';
// async function getData(req: Request, res: Response){
//    console.log("THis is getdata api");
//    try{
//     const response= await fetchedData();
//     res.status(200).json(response);
//  }catch(err){
//     console.log
//  }
// }
  
// export default getData

module.exports = {
  async fetchWeather(ctx: { body: { temperature: number; condition: string; location: string; country: string; }; badRequest: (arg0: string, arg1: { moreDetails: any; }) => void; }) {
    try {
      const data = await strapi
            .service("api::third-party.service.getWeatherData")
            .getWeatherData();
          console.log(data, "data");
      ctx.body = data;
    } catch (err) {
      ctx.badRequest('Weather data fetching error', { moreDetails: err });
    }
  },
};
