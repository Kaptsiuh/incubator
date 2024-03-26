import { ManType, createGreetingMessage } from "./05_01";

let people: Array<ManType> = [];

beforeEach(() => {
  people = [
    { name: "Andrew Ivanow", age: 33 },
    { name: "Dzmitry Kaptsiuh", age: 32 },
    { name: "Alex Petrov", age: 18 },
  ];
});

test("should get array of greeting messages", () => {
  const messages = createGreetingMessage(people);

  expect(messages.length).toBe(3);
  expect(messages[0]).toBe("Hello Andrew. Welcome motherfucker!");
  expect(messages[1]).toBe("Hello Dzmitry. Welcome motherfucker!");
  expect(messages[2]).toBe("Hello Alex. Welcome motherfucker!");
});
