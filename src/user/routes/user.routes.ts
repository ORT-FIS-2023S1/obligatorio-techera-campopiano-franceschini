import path from "path";
import { Router } from "express";

export default (() => {
  const router: Router = Router();

  //------------------------------------------------------

  router.get("/home", (req, res) => {
    //get user from locals
    const user = res.locals.user;
    res.render(path.join(__dirname, "../../user/interface/views/homePage"), {
      user,
      data: {},
      configs: {},
    });
  });

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
