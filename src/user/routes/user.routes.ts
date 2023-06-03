import { Router } from "express";
import indexController from "../controllers/indexController";

export default (() => {
  const router: Router = Router();

  //------------------------------------------------------

  router.get("/index", indexController);

  //------------------------------------------------------
  router.get("/diners", (req, res) =>
    res.render(`<h1> Diners </h1>`, {
      role: req.header("x-role"),
      data: {},
      configs: {},
    })
  );

  return router;
})();
