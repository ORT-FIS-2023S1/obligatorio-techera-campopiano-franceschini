import Dishes from "../../shared/domain/entities/Dishes";
import ENTITIES from "../../shared/domain/types/entities";
import Cache from "../../shared/utils/cache";
import { v4 as uuidv4 } from "uuid";

export default (req, res) => {
  try {
    // Validar los datos de entrada si es necesario

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
      return res.status(400).json({ error: "Datos incompletos" });
    }

    const id = uuidv4();

    const dishesData = new Dishes(
      id,
      name,
      price,
      ingredients,
      portions,
      nutritionalInformation,
      imageURL
    );

    Cache.saveEntity(ENTITIES.DISHES, id, dishesData);

    res.sendStatus(200);
  } catch (error) {
    console.error("Error al agregar el plato:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
