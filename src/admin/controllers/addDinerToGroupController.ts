import Group from "../../shared/domain/entities/Group";
import Cache from "../../shared/utils/cache";
import ENTITIES from "../../shared/domain/types/entities";
import Diner from "../../shared/domain/entities/Diner";

export default (req, res) => {
  try {
    const { groupId } = req.params;
    const { comensalesId } = req.body;
    const dinersCache = Cache.getEntities<Diner>(ENTITIES.DINERS);
    const group = Cache.getEntity<Group>(ENTITIES.GROUPS, groupId);

    if (!group) {
      return res.status(404).json({ error: "Grupo no encontrado" });
    }

    comensalesId.forEach((memberId) => {
      const member = dinersCache.find(
        (diner) => diner.getIdentifier() === memberId
      );
      if (member) {
        group.addMember(member);
      }
    });

    Cache.updateEntity(ENTITIES.GROUPS, group);

    const updatedComensales = group.getMembers();

    return res.status(200).json({ comensales: updatedComensales });
  } catch (error) {
    console.error("Error al agregar el comensal al grupo:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};
