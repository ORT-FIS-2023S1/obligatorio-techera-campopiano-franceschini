import Group from "../../shared/domain/entities/Group";
import Cache from "../../shared/utils/cache";
import ENTITIES from "../../shared/domain/types/entities";
import Canteen from "../../shared/domain/entities/Canteen";
import Diner from "../../shared/domain/entities/Diner";

export default (req, res) => {
  try {
    const { groupId, comensalId } = req.params;

    const group = Cache.getEntity<Group>(ENTITIES.GROUPS, groupId);

    if (!group) {
      return res.status(404).json({ error: "Grupo no encontrado" });
    }

    const member = group
      .getMembers()
      .find((diner) => diner.getIdentifier() === comensalId);

    if (!member) {
      return res
        .status(404)
        .json({ error: "Comensal no encontrado en el grupo" });
    }

    group.removeMember(member);

    Cache.updateEntity(ENTITIES.GROUPS, group);

    res.sendStatus(200);
  } catch (error) {
    console.error("Error al eliminar el comensal del grupo:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
