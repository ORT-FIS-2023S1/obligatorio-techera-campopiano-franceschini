import { Router } from "express";
import path from "path";

const router = Router();

// Otras rutas de admin

router.get("/home", (req, res) => {
  //get user from locals
  const user = res.locals.user;
  res.render(path.join(__dirname, "../../admin/interface/views/dashboard"), {
    user,
    data: {},
    configs: {},
    view: "dashboard",
  });
});

router.get("/home/agregarPlato", (req, res) => {
  // Lógica para mostrar el formulario de agregar plato
  // ...
  res.render(path.join(__dirname, "../../admin/interface/views/dashboard"), {
    user: res.locals.user,
    data: {},
    configs: {},
    view: "agregarPlato",
  });
});

export default router;
