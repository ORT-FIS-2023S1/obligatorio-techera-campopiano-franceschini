import { Router } from "express";
import path from "path";
import Cache from "../../utils/cache";
import { v4 as uuidv4 } from "uuid";

const router = Router();
const cache = Cache.getInstance();
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
    platos: platos,
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
router.post("/index/agregarPlato", (req, res) => {
  const datosId = uuidv4();
  const datosPlato = new Map();
  datosPlato.set("nombre", req.body.nombre);
  datosPlato.set("precio", req.body.precio);
  datosPlato.set("ingredientes", req.body.ingredientes);
  datosPlato.set("porcion", req.body.porcion);
  datosPlato.set("nutricional", req.body.nutricional);
  cache.set(datosId, datosPlato);
  const platoObj = Object.fromEntries(datosPlato);
  platos.push(platoObj);
  res.sendStatus(200);
  // Envía una respuesta exitosa al cliente
});
cache.on("set", function (key, value) {
  console.log(`New Key ${key} inserted into cache`);
  console.log(cache.keys());
  console.log(cache.getStats());
});
export default router;
