const Manager = require("../lib/Manager")

test('creates a manager object', () =>
{
  const manager = new Manager('Lisa', '0', 'lisa@gmail.com', '101');

  expect(manager.name).toBe('Lisa');
  expect(manager.id).toBe('0');
  expect(manager.email).toBe('lisa@gmail.com');
  expect(manager.office).toBe('101');
})