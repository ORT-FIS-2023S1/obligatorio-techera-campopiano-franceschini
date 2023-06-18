import Group from "../../shared/domain/entities/Group";
import Cache from "../../shared/utils/cache";
import ENTITIES from "../../shared/domain/types/entities";

export default async (req, res) => {
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

    const updatedComensales = group.getMembers();

    return await res.status(200).json({ comensales: updatedComensales });
  } catch (error) {
    console.error("Error al eliminar el comensal del grupo:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
