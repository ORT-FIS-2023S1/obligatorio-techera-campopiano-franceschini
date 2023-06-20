import Group from '../../shared/domain/entities/Group';
import Diner from '../../shared/domain/entities/Diner';

describe('Group', () => {
  let group: Group;
  let diner1: Diner;
  let diner2: Diner;
  let diner3: Diner;

  beforeEach(() => {
    diner1 = new Diner('Pedro', 'Gomez', '1');
    diner2 = new Diner('Carlos', 'Perez', '2');
    diner3 = new Diner('Jose', 'Rodriguez', '3');
    group = new Group(
      'Grupo 1',
      'Descripcion grupo',
      [diner1, diner2, diner3],
      '12345',
    );
  });

  it('should correctly initialize Group instance', () => {
    expect(group.name).toBe('Grupo 1');
    expect(group.description).toBe('Descripcion grupo');
    expect(group.members).toEqual([diner1, diner2, diner3]);
    expect(group.getIdentifier()).toBe('12345');
  });

  it('should create a default id', () => {
    const entity = new Group('Grupo 1', 'Descripcion grupo', [diner1, diner2]);
    expect(entity.getIdentifier()).toBeDefined();
  });

  it('should return null if the diner does not exist', () => {
    const diner = group.getDinerById('4');
    expect(diner).toBeNull();
  });

  it('should set name', () => {
    group.name = 'Grupo actualizado';
    expect(group.name).toBe('Grupo actualizado');
  });

  it('should set description', () => {
    group.description = 'Descripcion actualizada';
    expect(group.description).toBe('Descripcion actualizada');
  });

  it('should set members', () => {
    group.members = [diner1, diner2, diner3];
    expect(group.members).toEqual([diner1, diner2, diner3]);
  });

  it('should add member', () => {
    const diner4 = new Diner('Hector', 'Perez', '4');
    group.addMember(diner4);
    expect(group.members).toEqual([diner1, diner2, diner3, diner4]);
  });

  it('should remove member', () => {
    group.removeMember(diner1);
    expect(group.members).toEqual([diner2, diner3]);
  });

  it('should return identifier as id', () => {
    const identifier = group.getIdentifier();
    expect(identifier).toBe('12345');
  });

  it('shoud be recover diner by id', () => {
    const diner = group.getDinerById('1');
    expect(diner).toBe(diner1);
  });

  it('shoud be recover all members', () => {
    const diners = group.getMembers();
    expect(diners).toEqual([diner1, diner2, diner3]);
  });

  it('should return JSON representation', () => {
    const json = group.toJSON();
    expect(json).toEqual({
      name: 'Grupo 1',
      description: 'Descripcion grupo',
      members: [diner1, diner2, diner3],
    });
  });

  it('shoud create a group from JSON', () => {
    const json = {
      name: 'Grupo 1',
      description: 'Descripcion grupo',
      members: [diner1, diner2],
    };
    const groupFromJson = Group.fromJSON(json);
    expect(groupFromJson.name).toBe('Grupo 1');
    expect(groupFromJson.description).toBe('Descripcion grupo');
    expect(groupFromJson.members).toHaveLength(2);
    expect(groupFromJson).toBeInstanceOf(Group);
  });
});
