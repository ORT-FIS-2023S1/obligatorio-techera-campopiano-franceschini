import Group from "../../shared/domain/entities/Group";
import Cache from "../../shared/utils/cache";
import ENTITIES from "../../shared/domain/types/entities";
import Canteen from "../../shared/domain/entities/Canteen";

export default (req, res) => {
  try {
    const { groupId } = req.params;

    const cantina = Cache.getEntities<Canteen>(ENTITIES.CANTEENS)[0];
    if (!cantina) {
      return res.status(400).json({ error: "Cantina no encontrada" });
    }

    const group = cantina.getGroupd(groupId);
    if (!group) {
      return res.status(404).json({ error: "Grupo no encontrado" });
    }
    Cache.removeEntity(ENTITIES.GROUPS, groupId);

    cantina.removeGroup(groupId);
    
    Cache.updateEntity(ENTITIES.CANTEENS, cantina);

    res.sendStatus(200);
  } catch (error) {
    console.error("Error al eliminar el grupo:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
