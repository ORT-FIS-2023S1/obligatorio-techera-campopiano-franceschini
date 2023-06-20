import Group from '../../shared/domain/entities/Group';
import Cache from '../../shared/utils/cache';
import ENTITIES from '../../shared/domain/types/entities';
import Canteen from '../../shared/domain/entities/Canteen';
import Diner from '../../shared/domain/entities/Diner';

export default (req, res) => {
  try {
    const {groupName, groupDescription, groupMembers} = req.body;

    if (!groupName || !groupDescription || !groupMembers) {
      return res.status(400).json({error: 'Datos incompletos'});
    }
    const dinersCache = Cache.getEntities<Diner>(ENTITIES.DINERS);
    const group = new Group(groupName, groupDescription, []);

    if (Array.isArray(groupMembers)) {
      groupMembers.forEach((memberId) => {
        const member = dinersCache.find(
          (diner) => diner.getIdentifier() === memberId,
        );
        if (member) {
          group.addMember(member);
        }
      });
    } else {
      const memberId = groupMembers;
      const member = dinersCache.find(
        (diner) => diner.getIdentifier() === memberId,
      );
      if (member) {
        group.addMember(member);
      }
    }

    Cache.saveEntity<Group>(ENTITIES.GROUPS, group);

    const cantina = Cache.getEntities<Canteen>(ENTITIES.CANTEENS)[0];
    if (!cantina) {
      return res.status(400).json({error: 'Cantina no encontrada'});
    }

    cantina.addGroup(group.getIdentifier());

    // Como se modificó la cantina, se actualiza en la caché
    Cache.updateEntity(ENTITIES.CANTEENS, cantina);

    res.sendStatus(200);
  } catch (error) {
    console.error('Error al agregar el grupo:', error);
    res.status(500).json({error: 'Error interno del servidor'});
  }
};
