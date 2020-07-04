import healthCondition from '../app';

test('should show health condition for number of hitpoints', () => {
  const input = { name: 'Маг', health: 90 };
  const expected = 'healthy';
  const recieved = healthCondition(input);
  expect(recieved).toBe(expected);
});

test('should show health condition for number of hitpoints', () => {
  const input = { name: 'Воин', health: 50 };
  const expected = 'wounded';
  const recieved = healthCondition(input);
  expect(recieved).toBe(expected);
});

test('should show health condition for number of hitpoints', () => {
  const input = { name: 'Вор', health: 15 };
  const expected = 'critical';
  const recieved = healthCondition(input);
  expect(recieved).toBe(expected);
});
