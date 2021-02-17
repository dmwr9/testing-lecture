const { sum, sayHello } = require('../functions');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})

test('sayHello does infact say hello', () => {
    expect(sayHello()).toBe('hello');
})

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one:1, two:2})
})

test('Expect true to be truthy', () => {
    expect(true).toBeTruthy();
})

let names = ['cole', 'ben', 'adam'];

test('Expect names to contain adam', () => {
    expect(names).not.toContain('Carmen San Diego');
})