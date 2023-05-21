import { Router } from "express";

export default (() => {
  const router: Router = Router();

  //------------------------------------------------------
  router.get("/orders", (req, res) =>
    res.render(`<h1> this is the order view!</h1>`, {
      role: req.header("x-role"),
      data: {},
      configs: {},
    })
  );

  return router;
})();
