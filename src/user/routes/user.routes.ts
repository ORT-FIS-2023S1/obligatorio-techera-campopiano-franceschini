import path from "path";
import { Router } from "express";
import getUserFromToken from "../../utils/getUserFromToken";

export default (() => {
  const router: Router = Router();

  //------------------------------------------------------

  router.get("/home/:Authorization", (req, res) => {
    const Authorization = req.params.Authorization;
    const user = getUserFromToken(Authorization);
    res.render(path.join(__dirname, "../../user/interface/views/homePage"), {
      user: user.role,
      data: { user: user.toJSON() },
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
