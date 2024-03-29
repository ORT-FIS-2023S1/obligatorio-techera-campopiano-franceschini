import Canteen from '../../shared/domain/entities/Canteen';
import Dishes from '../../shared/domain/entities/Dishes';
import ENTITIES from '../../shared/domain/types/entities';
import Cache from '../../shared/utils/cache';

export default (req, res) => {
  try {
    const {
      name,
      price,
      ingredients,
      portions,
      nutritionalInformation,
      imageURL,
    } = req.body;

    if (
      !name ||
      !price ||
      !ingredients ||
      !portions ||
      !nutritionalInformation ||
      !imageURL
    ) {
      return res.status(400).json({error: 'Datos incompletos'});
    }

    const dishesData = new Dishes(
      name,
      Number(price),
      ingredients.trim().toLowerCase().split(','),
      portions,
      nutritionalInformation,
      imageURL,
    );

    Cache.saveEntity<Dishes>(ENTITIES.DISHES, dishesData);
    // el plato pertenece a una cantina asi q obtengo la cantina
    const cantina = Cache.getEntities<Canteen>(ENTITIES.CANTEENS)[0];
    if (!cantina) {
      return res.status(400).json({error: 'Cantina no encontrada'});
    }

    // le agrego el plato
    cantina.addDishe(dishesData.getIdentifier());
    // como modifique la cantina la actualizo en el cache
    Cache.updateEntity(ENTITIES.CANTEENS, cantina);

    res.sendStatus(200);
  } catch (error) {
    console.error('Error al agregar el plato:', error);
    res.status(500).json({error: 'Error interno del servidor'});
  }
};
