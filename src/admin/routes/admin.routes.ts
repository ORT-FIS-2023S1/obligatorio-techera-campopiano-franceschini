import { Router } from "express";
import path from "path";
import addDisheController from "../controllers/addDisheController";
import addOrderController from "../controllers/addOrderController";
import ENTITIES from "../../shared/domain/types/entities";
import Cache from "../../shared/utils/cache";
import Dishes from "../../shared/domain/entities/Dishes";
import Order from "../../shared/domain/entities/Order";
import Diner from "../../shared/domain/entities/Diner";
import logoutController from "../../shared/controllers/logoutController";

const router = Router();

// Otras rutas de admin
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

router.get("/index/order", (req, res) => {
  // Lógica para mostrar el formulario de registrar un pedido

  const dishes: Dishes[] = Cache.getEntities<Dishes>(ENTITIES.DISHES) ?? [];
  const orders: Order[] = Cache.getEntities<Order>(ENTITIES.ORDERS) ?? [];
  const diners: Diner[] = Cache.getEntities<Diner>(ENTITIES.DINERS) ?? [];
  res.render(path.join(__dirname, "../../admin/interface/views/index"), {
    user: res.locals.user,
    data: {},
    configs: {},
    view: "addOrder",
    diners: diners,
    dishes: dishes,
    orders: orders,
  });
});

router.get("/index/logout", logoutController);

router.post("/index/addDishe", addDisheController);
router.post("/index/addOrder", addOrderController);
export default router;
