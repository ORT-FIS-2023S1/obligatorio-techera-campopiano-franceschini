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
  const diner1 = new Diner("Diner 1", "Surname diner 1");
  const diner2 = new Diner("Diner 2", "Surname diner 2");
  const diner3 = new Diner("Diner 3", "Surname diner 3");
  const diner4 = new Diner("Diner 4", "Surname diner 4");
  const diner5 = new Diner("Diner 5", "Surname diner 5");

  //save entities
  Cache.saveEntity<Diner>(ENTITIES.DINERS, diner1);
  Cache.saveEntity<Diner>(ENTITIES.DINERS, diner2);
  Cache.saveEntity<Diner>(ENTITIES.DINERS, diner3);
  Cache.saveEntity<Diner>(ENTITIES.DINERS, diner4);
  Cache.saveEntity<Diner>(ENTITIES.DINERS, diner5);
};