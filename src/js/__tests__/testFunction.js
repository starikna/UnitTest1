import healthIndicator from '../app';

test('test health', () => {
  const input = {
    name: 'маг',
    health: 100,
  };

  const expected = 'healthy';
  const received = healthIndicator(input);
  expect(received).toBe(expected);
});

test('test health', () => {
  const input = {
    name: 'мечник',
    health: 10,
  };

  const expected = 'critical';
  const received = healthIndicator(input);
  expect(received).toBe(expected);
});

test('test health', () => {
  const input = {
    name: 'лучник',
    health: 45,
  };

  const expected = 'wounded';
  const received = healthIndicator(input);
  expect(received).toBe(expected);
});
