import { Router } from "express";
import path from "path";
import addDisheController from "../controllers/addDisheController";
import ENTITIES from "../../shared/domain/types/entities";
import Cache from "../../shared/utils/cache";

const router = Router();
// Otras rutas de admin
const platos = [];
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
  //ESTA RUTA NO SE PUEDE LLAMAR ASI (SERIA ASI /dishe)
  // Lógica para mostrar el formulario de agregar plato
  // ...
  const dishes = Cache.getEntities(ENTITIES.DISHES); //aqui tenes los platos, hacele un toJson y mandalo a la vista
  res.render(path.join(__dirname, "../../admin/interface/views/index"), {
    user: res.locals.user,
    data: {},
    configs: {},
    view: "agregarPlato",
    platos: platos,
  });
});
router.post("/index/agregarPlato", addDisheController); //esta seria /dishe tambien
export default router;
