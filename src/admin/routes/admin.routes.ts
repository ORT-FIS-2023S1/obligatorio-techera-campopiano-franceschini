import { Router } from "express";
import path from "path";
import addDisheController from "../controllers/addDisheController";
import ENTITIES from "../../shared/domain/types/entities";
import Cache from "../../shared/utils/cache";
import Dishes from "../../shared/domain/entities/Dishes";
import logoutController from "../../shared/controllers/logoutController";

const router = Router();

// Otras rutas de admin
const platos = [];
router.get("/index", (req, res) => {
  const user = res.locals.user;
  res.render(path.join(__dirname, "../../admin/interface/views/index"), {
    user,
    data: {},
    configs: {},
    view: "dashboard",
  });
});

router.get("/index/dishe", (req, res) => {
  // Lógica para mostrar el formulario de agregar plato
  const dishes: Dishes[] = Cache.getEntities<Dishes>(ENTITIES.DISHES) ?? [];
  res.render(path.join(__dirname, "../../admin/interface/views/index"), {
    user: res.locals.user,
    data: {},
    configs: {},
    view: "addDishe",
    dishes: dishes,
  });
});

router.get("/index/listaItems", (req, res) => {
  res.render(path.join(__dirname, "../../admin/interface/views/index"), {
    user: res.locals.user,
    data: {},
    configs: {},
    view: "itemsMenu",
  });
});

router.get("/index/logout", logoutController);

router.post("/index/addDishe", addDisheController);

export default router;
