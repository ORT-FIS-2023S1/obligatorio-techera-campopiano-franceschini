import ENTITIES from "../../shared/domain/types/entities";
import Order from "../../shared/domain/entities/Order";
import Cache from "../../shared/utils/cache";
export default (req, res) => {
  try {
    const { orderId } = req.body;

    if (!orderId) {
      return res.status(400).json({ error: "Falta el ID del pedido" });
    }

    const order = Cache.getEntity<Order>(ENTITIES.ORDERS, orderId);

    if (!order) {
      return res.status(400).json({ error: "Pedido no encontrado" });
    }

    order.processed = true;

    Cache.saveEntity<Order>(ENTITIES.ORDERS, order);

    res.sendStatus(200);
  } catch (error) {
    console.error("Error al procesar el pedido:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
