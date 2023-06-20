import Order from '../../shared/domain/entities/Order';
import Diner from '../../shared/domain/entities/Diner';
import Dishes from '../../shared/domain/entities/Dishes';

describe('Order', () => {
  let order: Order;
  let diner: Diner;
  let dish: Dishes;
  let date: Date;

  beforeEach(() => {
    diner = new Diner('1', 'Pedro', 'Gomez');
    dish = new Dishes(
      'Pizza',
      10.99,
      ['Harina', 'queso', 'tomate'],
      6,
      '200Kcal',
      'urlimagen',
    );
    date = new Date();
    order = new Order(diner, dish, date, 'Additional info', false, '1');
  });

  it('should correctly initialize Order instance', () => {
    expect(order.diner).toBe(diner);
    expect(order.dish).toBe(dish);
    expect(order.date).toBe(date);
    expect(order.additionalInfo).toBe('Additional info');
    expect(order.processed).toBe(false);
    expect(order.id).toBeTruthy();
  });

  it('should create a default id', () => {
    const entity = new Order(diner, dish, date, 'Additional info', false);
    expect(entity.id).toBeDefined();
  });

  it('should set diner', () => {
    const newDiner = new Diner('1', 'Pedro', 'Gomez');
    order.diner = newDiner;
    expect(order.diner).toBe(newDiner);
  });

  it('should set dish', () => {
    const newDish = new Dishes(
      'Pizza',
      10.99,
      ['Harina', 'queso', 'tomate'],
      6,
      '200Kcal',
      'urlimagen',
    );
    order.dish = newDish;
    expect(order.dish).toBe(newDish);
  });

  it('should set date', () => {
    const newDate = new Date('2022-01-01');
    order.date = newDate;
    expect(order.date).toBe(newDate);
  });

  it('should set additionalInfo', () => {
    order.additionalInfo = 'Updated info';
    expect(order.additionalInfo).toBe('Updated info');
  });

  it('should set processed', () => {
    order.processed = true;
    expect(order.processed).toBe(true);
  });

  it('should return identifier as id', () => {
    const identifier = order.getIdentifier();
    expect(identifier).toBe(order.id);
  });

  it('should create a default id', () => {
    const entity = new Order(diner, dish, date, 'Additional info', false);
    expect(entity.getIdentifier()).toBeDefined();
  });

  it('should return JSON representation', () => {
    const json = order.toJSON();
    expect(json).toEqual({
      id: order.id,
      diner: diner.toJSON(),
      dish: dish.toJSON(),
      date: date.toISOString(),
      additionalInfo: 'Additional info',
      processed: false,
    });
  });

  it('should create Order from JSON', () => {
    const json = {
      id: '2',
      diner: diner.toJSON(),
      dish: dish.toJSON(),
      date: date.toISOString(),
      additionalInfo: 'Additional info',
      processed: false,
    };
    const order = Order.fromJSON(json);
    expect(order).toBeInstanceOf(Order);
    expect(order.diner).toBeInstanceOf(Diner);
    expect(order.dish).toBeInstanceOf(Dishes);
    expect(order.date).toBeInstanceOf(Date);
    expect(order.additionalInfo).toBe('Additional info');
    expect(order.processed).toBe(false);
    expect(order.id).toBe('2');
  });
});
