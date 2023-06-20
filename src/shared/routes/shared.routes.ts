import loginController from '../controllers/loginController';

import {Router} from 'express';
import loginValidations from '../validations/login.validations';

export default (() => {
  const router: Router = Router();

  // ------------------------------------------------------
  router.get('/', (req, res) => {
    res.render('index');
  });
  // ------------------------------------------------------
  router.get('/login', (req, res) =>
    res.render('login', {user: {}, data: {}, configs: {}}),
  );

  // ------------------------------------------------------
  router.post('/login', [loginValidations, loginController]);
  // ------------------------------------------------------
  return router;
})();
