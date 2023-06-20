import DailyMenu from '../../shared/domain/entities/DailyMenu';

describe('DailyMenu', () => {
  let dailyMenu: DailyMenu;

  beforeEach(() => {
    const date = new Date('2023-06-11');
    dailyMenu = new DailyMenu(date, 'Breakfast', 'Lunch', 'Snack', '12345');
  });

  it('should correctly initialize DailyMenu instance', () => {
    expect(dailyMenu.date).toEqual(new Date('2023-06-11'));
    expect(dailyMenu.breakfast).toBe('Breakfast');
    expect(dailyMenu.lunch).toBe('Lunch');
    expect(dailyMenu.snack).toBe('Snack');
    expect(dailyMenu.getIdentifier()).toBe('12345');
  });

  it('should set date', () => {
    const newDate = new Date('2023-06-12');
    dailyMenu.date = newDate;
    expect(dailyMenu.date).toEqual(newDate);
  });

  it('should set breakfast', () => {
    dailyMenu.breakfast = 'New Breakfast';
    expect(dailyMenu.breakfast).toBe('New Breakfast');
  });

  it('should set lunch', () => {
    dailyMenu.lunch = 'New Lunch';
    expect(dailyMenu.lunch).toBe('New Lunch');
  });

  it('should set snack', () => {
    dailyMenu.snack = 'New Snack';
    expect(dailyMenu.snack).toBe('New Snack');
  });

  it('should return identifier as id', () => {
    const identifier = dailyMenu.getIdentifier();
    expect(identifier).toBe('12345');
  });

  it('should return JSON representation', () => {
    const json = dailyMenu.toJSON();
    expect(json).toEqual({
      date: dailyMenu.date,
      breakfast: 'Breakfast',
      lunch: 'Lunch',
      snack: 'Snack',
    });
  });

  it('should create DailyMenu from JSON', () => {
    const json = {
      date: new Date('2023-06-11'),
      breakfast: 'Breakfast',
      lunch: 'Lunch',
      snack: 'Snack',
    };
    const dailyMenu = DailyMenu.fromJSON(json);
    expect(dailyMenu).toBeInstanceOf(DailyMenu);
    expect(dailyMenu.date).toEqual(new Date('2023-06-11'));
    expect(dailyMenu.breakfast).toBe('Breakfast');
    expect(dailyMenu.lunch).toBe('Lunch');
    expect(dailyMenu.snack).toBe('Snack');
  });
});
