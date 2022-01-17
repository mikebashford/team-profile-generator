const Manager = require("../lib/Manager")
const manager = new Manager('Lisa', '0', 'lisa@gmail.com', '101');

test('creates a manager object', () =>
{
  expect(manager.name).toBe('Lisa');
  expect(manager.id).toBe('0');
  expect(manager.email).toBe('lisa@gmail.com');
  expect(manager.officeNumber).toBe('101');
})

test('tests the employees name using the getName() method', () =>
{
  expect(manager.getName()).toBe('Lisa');
})

test('tests the managers id using the getId() method', () =>
{
  expect(manager.getId()).toBe('0');
})

test('tests the managers email using the getEmail() method', () =>
{
  expect(manager.getEmail()).toBe('lisa@gmail.com');
})

test('tests the managers office number using the getOfficeNumber() method', () =>
{
  expect(manager.getOfficeNumber()).toBe('101');
})

test('tests the managers role using the getRole() method', () =>
{
  expect(manager.getRole()).toBe('Manager');
})