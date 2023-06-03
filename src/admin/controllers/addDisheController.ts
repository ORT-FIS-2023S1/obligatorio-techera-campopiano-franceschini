import Dishes from "../../shared/domain/entities/Dishes";
import ENTITIES from "../../shared/domain/types/entities";
import Cache from "../../shared/utils/cache";

export default (req, res) => {
  // Lógica para agregar un plato
  const dishes = new Dishes(
    req.body.nombre,
    req.body.precio,
    req.body.ingredientes,
    req.body.porcion,
    req.body.nutricional,
    req.body.imagen
  );

  Cache.saveEntity(ENTITIES.DISHES, req.body.nombre, dishes);
  res.sendStatus(200);
  // Envía una respuesta exitosa al cliente
};
