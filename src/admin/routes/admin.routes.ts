import { Router } from "express";
import path from "path";

export default (() => {
  const router: Router = Router();

  router.get("/home", (req, res) => {
    //get user from locals
    const user = res.locals.user;
    res.render(path.join(__dirname, "../../admin/interface/views/dashboard"), {
      user,
      data: {},
      configs: {},
    });
  });
  return router;
})();
