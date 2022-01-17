const Engineer = require("../lib/Engineer")
const engineer = new Engineer('John', '1', 'John@gmail.com', 'john@github.com');

test('creates an engineer object', () =>
{
  expect(engineer.name).toBe('John');
  expect(engineer.id).toBe('1');
  expect(engineer.email).toBe('John@gmail.com');
  expect(engineer.github).toBe('john@github.com');
});

test('tests the engineers name using the getName() method', () =>
{
  expect(engineer.getName()).toBe('John');
})

test('tests the engineers id using the getId() method', () =>
{
  expect(engineer.getId()).toBe('1');
})

test('tests the engineers email using the getEmail() method', () =>
{
  expect(engineer.getEmail()).toBe('John@gmail.com');
})

test('tests the engineers github using the getGithub() method', () =>
{
  expect(engineer.getGithub()).toBe('john@github.com');
})

test('tests the engineers role using the getRole() method', () =>
{
  expect(engineer.getRole()).toBe('Engineer');
})