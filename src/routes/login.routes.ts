import { register, login } from "../controllers/loginController";

import { Router } from "express";

export default (function WorkspaceRoutes() {
  const router: Router = Router();

  //------------------------------------------------------
  router.get("/register", register);
  //------------------------------------------------------
  router.get("/login", login);
  //------------------------------------------------------
  return router;
})();
