import {Router} from 'express';
import indexController from '../controllers/indexController';
import getCanteenController from '../controllers/getCanteenController';

export default (() => {
  const router: Router = Router();

  // ------------------------------------------------------
  router.get('/index', indexController);
  // ------------------------------------------------------
  router.get('/canteen/:id', getCanteenController);

  return router;
})();
