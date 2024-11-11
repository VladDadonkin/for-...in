import { orderByProps } from '../src/sort';

test('orderByProps with custom order', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
  const order = ["name", "level"];
  
  const expected = [
    { key: "name", value: "мечник" },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 }
  ];
  
  expect(orderByProps(obj, order)).toEqual(expected);
});

test('orderByProps with order not overlapping object keys (alphabetical order only)', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
  const order = ["nonexistentKey"];
  
  const expected = [
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 },
    { key: "level", value: 2 },
    { key: "name", value: "мечник" }
  ];
  
  expect(orderByProps(obj, order)).toEqual(expected);
});

test('orderByProps with an empty object', () => {
  const obj = {};
  const order = ["name", "level"];
  
  const expected = [];
  
  expect(orderByProps(obj, order)).toEqual(expected);
});

test('orderByProps with empty order array', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
  const order = [];
  
  const expected = [
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 },
    { key: "level", value: 2 },
    { key: "name", value: "мечник" }
  ];
  
  expect(orderByProps(obj, order)).toEqual(expected);
});

test('orderByProps with one property in object', () => {
  const obj = { name: 'мечник' };
  const order = ["name"];
  
  const expected = [
    { key: "name", value: "мечник" }
  ];
  
  expect(orderByProps(obj, order)).toEqual(expected);
});

test('orderByProps with full custom order matching object keys', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
  const order = ["name", "health", "level", "attack", "defence"];
  
  const expected = [
    { key: "name", value: "мечник" },
    { key: "health", value: 10 },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "defence", value: 40 }
  ];
  
  expect(orderByProps(obj, order)).toEqual(expected);
});

test('orderByProps with additional keys not specified in order array', () => {
  const obj = { name: 'мечник', health: 10, level: 2, speed: 30, attack: 80, defence: 40 };
  const order = ["name", "level"];
  
  const expected = [
    { key: "name", value: "мечник" },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 },
    { key: "speed", value: 30 }
  ];
  
  expect(orderByProps(obj, order)).toEqual(expected);
});