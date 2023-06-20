import Diner from '../../shared/domain/entities/Diner';
import User from '../../shared/domain/entities/User';
import ENTITIES from '../../shared/domain/types/entities';
import Cache from '../../shared/utils/cache';

describe('Cache', () => {
  Cache.initialize();

  const dinerOne = new Diner('Juan', 'Pérez', '1');
  const dinerTwo = new Diner('María', 'González', '2');
  const dinerThree = new Diner('Carlos', 'López', '3');
  // Save diners
  Cache.saveEntity<Diner>(ENTITIES.DINERS, dinerOne);
  Cache.saveEntity<Diner>(ENTITIES.DINERS, dinerTwo);
  Cache.saveEntity<Diner>(ENTITIES.DINERS, dinerThree);

  it('should store in cache', () => {
    const user = new User('user@user2.com', 'user2', 'user2');
    // save users
    Cache.saveEntity<User>(ENTITIES.USERS, user);
    const recoveredUser = Cache.getEntity<User>(
      ENTITIES.USERS,
      user.getIdentifier(),
    );
    expect(recoveredUser).toEqual(user);
  });

  it('should store multiple entities', () => {
    const diners = Cache.getEntities<Diner>(ENTITIES.DINERS);
    expect(diners).toEqual([dinerOne, dinerTwo, dinerThree]);
  });

  it('should get items by their key', () => {
    const diner = Cache.getEntitiesByKeys<Diner>(ENTITIES.DINERS, ['1']);
    expect(diner).toEqual([dinerOne]);
  });

  it('I should delete an entity', () => {
    const entity = new Diner('Miguel', 'Soles', '4');
    Cache.saveEntity<Diner>(ENTITIES.DINERS, entity);
    expect(Cache.getEntities<Diner>(ENTITIES.DINERS)).toEqual([
      dinerOne,
      dinerTwo,
      dinerThree,
      entity,
    ]);

    Cache.removeEntity(ENTITIES.DINERS, '4');
    expect(Cache.getEntities<Diner>(ENTITIES.DINERS)).toEqual([
      dinerOne,
      dinerTwo,
      dinerThree,
    ]);
  });

  it('should update an entity', () => {
    const diner = Cache.getEntity<Diner>(ENTITIES.DINERS, '1');
    expect(diner).toEqual(dinerOne);
    diner.name = 'Pedro';
    Cache.updateEntity<Diner>(ENTITIES.DINERS, diner);
    const updatedDiner = Cache.getEntity<Diner>(ENTITIES.DINERS, '1');
    expect(updatedDiner).toEqual(diner);
  });

  it('should return null if the entity does not exist', () => {
    const diner = Cache.getEntity<Diner>(ENTITIES.ORDERS, '5');
    expect(diner).toBeNull();
  });

  it('should return null if the entities do not exist', () => {
    const orders = Cache.getEntities<Diner>(ENTITIES.ORDERS);
    expect(orders).toEqual([]);
  });

  it('should return null if the ids are not stored', () => {
    const diners = Cache.getEntitiesByKeys<Diner>(ENTITIES.ORDERS, ['1', '2']);
    expect(diners).toEqual([]);
  });
});
