import User from '../../shared/domain/entities/User';

describe('User', () => {
  let user: User;

  beforeEach(() => {
    user = new User('test@example.com', 'password', 'role');
  });

  it('should correctly initialize User instance', () => {
    expect(user.email).toBe('test@example.com');
    expect(user.password).toBe('password');
    expect(user.role).toBe('role');
    expect(user.diners).toEqual([]);
    expect(user.canteens).toEqual([]);
  });

  it('should set email', () => {
    user.email = 'newemail@example.com';
    expect(user.email).toBe('newemail@example.com');
  });

  it('should set password', () => {
    user.password = 'newpassword';
    expect(user.password).toBe('newpassword');
  });

  it('should set role', () => {
    user.role = 'newrole';
    expect(user.role).toBe('newrole');
  });

  it('should add diner', () => {
    user.addDiner('diner1');
    user.addDiner('diner2');
    expect(user.diners).toEqual(['diner1', 'diner2']);
  });

  it('shoud get diners', () => {
    const diners = ['diner1', 'diner2', 'diner3'];
    diners.forEach((diner) => user.addDiner(diner));
    expect(user.diners).toEqual(['diner1', 'diner2', 'diner3']);
  });

  it('should add canteen', () => {
    user.addCanteen('canteen1');
    user.addCanteen('canteen2');
    expect(user.canteens).toEqual(['canteen1', 'canteen2']);
  });

  it('should remove diner', () => {
    user.diners = ['diner1', 'diner2', 'diner3'];
    user.removeDiner('diner2');
    expect(user.diners).toEqual(['diner1', 'diner3']);
  });

  it('should remove canteen', () => {
    user.canteens = ['canteen1', 'canteen2', 'canteen3'];
    user.removeCanteen('canteen2');
    expect(user.canteens).toEqual(['canteen1', 'canteen3']);
  });

  it('should return identifier as email', () => {
    const identifier = user.getIdentifier();
    expect(identifier).toBe('test@example.com');
  });

  it('should return JSON representation', () => {
    const json = user.toJSON();
    expect(json).toEqual({
      email: 'test@example.com',
      role: 'role',
      diners: [],
      canteens: [],
    });
  });

  it('should create User instance from JSON', () => {
    const json = {
      email: 'newemail@example.com',
      password: 'newpassword',
      role: 'newrole',
      diners: ['diner1', 'diner2'],
      canteens: ['canteen1', 'canteen2'],
    };
    const newUser = User.fromJSON(json);
    expect(newUser.email).toBe('newemail@example.com');
    expect(newUser.password).toBe('newpassword');
    expect(newUser.role).toBe('newrole');
    expect(newUser.diners).toEqual(['diner1', 'diner2']);
    expect(newUser.canteens).toEqual(['canteen1', 'canteen2']);
    expect(newUser).toBeInstanceOf(User);
  });
});
