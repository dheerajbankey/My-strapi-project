 
export default {
  fetchData: async (ctx) => {
    try {
      // Fetch the data from the service
      const data = await strapi
        .service("api::get-weather-data.get-weather-data")
        .fetchData();
      ctx.body = data;
      ctx.status = 200; // Set HTTP status code to 200 (OK)
    } catch (err) {
      // Log the error
      console.error("Error in fetchData controller:", err);
      
      // Set the response body and the status code for errors
      ctx.body = {
        message: "An error occurred while fetching data.",
        details: err.message
      };
      ctx.status = 500; // Set HTTP status code to 500 (Internal Server Error)
    }
  }
};
