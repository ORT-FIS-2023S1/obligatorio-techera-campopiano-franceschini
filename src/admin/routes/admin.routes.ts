import { Router } from "express";
import path from "path";

const router = Router();

// Otras rutas de admin

router.get("/index", (req, res) => {
  //get user from locals
  const user = res.locals.user;
  res.render(path.join(__dirname, "../../admin/interface/views/index"), {
    user,
    data: {},
    configs: {},
    view: "dashboard",
  });
});

router.get("/index/agregarPlato", (req, res) => {
  // Lógica para mostrar el formulario de agregar plato
  // ...
  res.render(path.join(__dirname, "../../admin/interface/views/index"), {
    user: res.locals.user,
    data: {},
    configs: {},
    view: "agregarPlato",
  });
});

export default router;
