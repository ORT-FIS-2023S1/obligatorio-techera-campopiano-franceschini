import login from "../controllers/loginController";

import { Router } from "express";
import loginValidations from "../validations/login.validations";

export default (() => {
  const router: Router = Router();

  //------------------------------------------------------
  router.get("/login", (req, res) =>
    res.render("login", { role: req.header("x-role"), data: {}, configs: {} })
  );

  //------------------------------------------------------
  router.post("/login", [loginValidations, login]);
  //------------------------------------------------------
  return router;
})();
