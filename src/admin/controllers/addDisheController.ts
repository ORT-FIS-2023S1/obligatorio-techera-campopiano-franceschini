import Canteen from "../../shared/domain/entities/Canteen";
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
    req.body.imagen //"shared/public/temp/imagePlato.jpg" //LOS PLATOS TIENEN UNA IMAGEN, EL EL FORM DE AGREGAR PLATO HACELO POR multimart-form-data PARA CARGAR LA IMAGEN Y GUARDARLA EN LA CARPETA QUE TE PUSE AHI
  );

  //guardo el plato en el cache BORRAR ESTOS COMENTARIOS DESPUES QUE LOS VEAS
  Cache.saveEntity(ENTITIES.DISHES, dishes);

  //el plato pertenece a una cantina asi q obtengo la cantina
  const cantina = Cache.getEntity<Canteen>(ENTITIES.CANTEENS, req.body.cantina);
  //le agrego el plato
  cantina.addDishe(dishes.getIdentifier());
  //como modifique la cantina la actualizo en el cache
  Cache.updateEntity(ENTITIES.CANTEENS, cantina);
  res.sendStatus(200);
  // Envía una respuesta exitosa al cliente
};
