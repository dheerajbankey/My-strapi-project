//  // routes.ts
// import { Router } from 'express';
// import  getData  from './third-party.controller';

// const router = Router();
// router.get('/get-data', getData);

// export default router;

module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/weather',
        handler: 'third-party.controller.fetchWeather',
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
  