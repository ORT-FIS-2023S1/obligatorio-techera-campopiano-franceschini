import Group from "../domain/entities/Group";
import loadDiners from "./loadDiners";

export default () => {
  const groupOne = new Group("Grupo 1", "Este es el grupo 1", []);
  const diners = loadDiners();

  diners.forEach((diner) => {
    groupOne.addMember(diner);
  });

  return [groupOne];
};
