import { Router } from "express";
import path from "path";
import addDisheController from "../controllers/addDisheController";
import addOrderController from "../controllers/addOrderController";
import processOrderController from "../controllers/processOrderController";
import addGroupController from "../controllers/addGroupController";
import delDinerFromGroupController from "../controllers/delDinerFromGroupController";
import ENTITIES from "../../shared/domain/types/entities";
import Cache from "../../shared/utils/cache";
import Dishes from "../../shared/domain/entities/Dishes";
import Order from "../../shared/domain/entities/Order";
import Diner from "../../shared/domain/entities/Diner";
import Group from "../../shared/domain/entities/Group";
import logoutController from "../../shared/controllers/logoutController";

const router = Router();

// Otras rutas de admin
router.get("/index", (req, res) => {
  const orders: Order[] = Cache.getEntities<Order>(ENTITIES.ORDERS) ?? [];
  const user = res.locals.user;
  res.render(path.join(__dirname, "../../admin/interface/views/index"), {
    user,
    data: {},
    configs: {},
    view: "dashboard",
    orders: orders,
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

router.get("/index/group/add", (req, res) => {
  const diners: Diner[] = Cache.getEntities<Diner>(ENTITIES.DINERS) ?? [];
  const groups: Group[] = Cache.getEntities<Group>(ENTITIES.GROUPS) ?? [];
  res.render(path.join(__dirname, "../../admin/interface/views/index"), {
    user: res.locals.user,
    data: {},
    configs: {},
    view: "addGroup",
    members: diners,
    groups: groups,
  });
});

router.get("/index/group/edit", (req, res) => {
  const diners: Diner[] = Cache.getEntities<Diner>(ENTITIES.DINERS) ?? [];
  const groups: Group[] = Cache.getEntities<Group>(ENTITIES.GROUPS) ?? [];
  res.render(path.join(__dirname, "../../admin/interface/views/index"), {
    user: res.locals.user,
    data: {},
    configs: {},
    view: "editGroup",
    members: diners,
    groups: groups,
  });
});

router.get("/index/logout", logoutController);

router.post("/index/addDishe", addDisheController);
router.post("/index/addOrder", addOrderController);
router.post("/index/processOrder", processOrderController);
router.post("/index/group/addGroup", addGroupController);
router.delete(
  "/index/group/:groupId/member/:comensalId",
  delDinerFromGroupController
);
export default router;
