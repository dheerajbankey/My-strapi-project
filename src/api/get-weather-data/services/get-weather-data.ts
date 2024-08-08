/**
 * get-weather-data service
 */
import fetchMatchData from "../../../utils/get-data";

export default {
 fetchData: async():Promise<any>=>{
    try {
      const data = await fetchMatchData();
      return data;
    } catch (err) {
      console.log("This is error", err);
      return err;
    }
  }
};

