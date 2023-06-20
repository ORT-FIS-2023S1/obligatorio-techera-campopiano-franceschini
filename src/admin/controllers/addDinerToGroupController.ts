import Cache from '../../shared/utils/cache';
import ENTITIES from '../../shared/domain/types/entities';
import Diner from '../../shared/domain/entities/Diner';
import Canteen from '../../shared/domain/entities/Canteen';

export default (req, res) => {
  try {
    const {comensalName, comensalSurname, groupId} = req.body;

    const cantina = Cache.getEntities<Canteen>(ENTITIES.CANTEENS)[0];

    if (!comensalName || !comensalSurname) {
      return res.status(400).json({error: 'Datos incompletos'});
    }
    if (!cantina) {
      return res.status(400).json({error: 'Cantina no encontrada'});
    }
    const group = cantina.getGroup(groupId);
    if (!group) {
      return res.status(404).json({error: 'Grupo no encontrado'});
    }

    const dinerData = new Diner(comensalName, comensalSurname);

    group.addMember(dinerData);

    Cache.saveEntity<Diner>(ENTITIES.DINERS, dinerData);
    Cache.updateEntity(ENTITIES.GROUPS, group);

    res.sendStatus(200);
  } catch (error) {
    console.error('Error al agregar el comensal al grupo:', error);
    return res.status(500).json({error: 'Error interno del servidor'});
  }
};
