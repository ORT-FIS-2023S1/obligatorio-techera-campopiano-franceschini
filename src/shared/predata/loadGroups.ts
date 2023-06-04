import Diner from "../domain/entities/Diner";
import Group from "../domain/entities/Group";
import ENTITIES from "../domain/types/entities";
import Cache from "../utils/cache";

export default () => {
  const members = Cache.getEntities<Diner>(ENTITIES.DINERS);
  const groupOne = new Group(
    "Grupo 1",
    "Este es el grupo 1",
    members.map((member) => member.getIdentifier()),
    "1"
  );

  //save groups
  Cache.saveEntity<Group>(ENTITIES.GROUPS, groupOne);
};
