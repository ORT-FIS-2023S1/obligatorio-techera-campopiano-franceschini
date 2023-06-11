import Diner from "../domain/entities/Diner";
import ENTITIES from "../domain/types/entities";
import Cache from "../utils/cache";

export default () => {
  const dinerOne = new Diner("Juan", "Pérez", "1");
  const dinerTwo = new Diner("María", "González", "2");
  const dinerThree = new Diner("Carlos", "López", "3");

  // Save diners
  Cache.saveEntity<Diner>(ENTITIES.DINERS, dinerOne);
  Cache.saveEntity<Diner>(ENTITIES.DINERS, dinerTwo);
  Cache.saveEntity<Diner>(ENTITIES.DINERS, dinerThree);
};
