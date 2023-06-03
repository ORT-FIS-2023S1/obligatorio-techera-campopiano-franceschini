import Diner from "../domain/entities/Diner";

export default () => {
  const diners: Diner[] = [];
  const diner1 = new Diner(1, "Diner 1", "Surname diner 1");
  const diner2 = new Diner(2, "Diner 2", "Surname diner 2");
  const diner3 = new Diner(3, "Diner 3", "Surname diner 3");
  const diner4 = new Diner(4, "Diner 4", "Surname diner 4");
  const diner5 = new Diner(5, "Diner 5", "Surname diner 5");

  diners.push(diner1);
  diners.push(diner2);
  diners.push(diner3);
  diners.push(diner4);
  diners.push(diner5);

  return diners;
};
