import Order from "../../shared/domain/entities/Order";
import Diner from "../../shared/domain/entities/Diner";
import Dishes from "../../shared/domain/entities/Dishes";
import ENTITIES from "../../shared/domain/types/entities";
import Cache from "../../shared/utils/cache";

export default (req, res) => {
  try {
    const { dinerId, dishId, additionalInfo } = req.body;

    if (!dinerId || !dishId || !additionalInfo) {
      return res.status(400).json({ error: "Datos incompletos" });
    }

    const diner = Cache.getEntity<Diner>(ENTITIES.DINERS, dinerId);
    const dish = Cache.getEntity<Dishes>(ENTITIES.DISHES, dishId);

    if (!diner || !dish) {
      return res.status(400).json({ error: "Comensal o plato no encontrado" });
    }

    const date = new Date();
    const processed = false;

    const order = new Order(diner, dish, date, additionalInfo, processed);

    Cache.saveEntity<Order>(ENTITIES.ORDERS, order);

    res.sendStatus(200);
  } catch (error) {
    console.error("Error al agregar el pedido:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
