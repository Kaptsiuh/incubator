export type ManType = {
  name: string;
  age: number;
};

const people: Array<ManType> = [
  { name: "Andrew Ivanow", age: 33 },
  { name: "Dzmitry Kaptsiuh", age: 32 },
  { name: "Alex Petrov", age: 18 },
];

const dimycTransformator = (man: ManType) => ({
  stack: ["css", "html", "js", "tdd", "react"],
  firstName: man.name.split(" ")[0],
  lastName: man.name.split(" ")[1],
});

let d1 = dimycTransformator(people[0]);
let d2 = dimycTransformator(people[1]);
let d3 = dimycTransformator(people[2]);

const dev = [d1, d2, d3];

const dev3 = people.map((p) => dimycTransformator);

const dev4 = people.map((p) => ({
  stack: ["css", "html", "js", "tdd", "react"],
  firstName: p.name.split(" ")[0],
  lastName: p.name.split(" ")[1],
}));

let messages = people.map(
  (man) => `Hello ${man.name.split(" ")[0]}. Welcome motherfucker!`
);

export const createGreetingMessage = (people: Array<ManType>) => {
  return people.map(
    (man) => `Hello ${man.name.split(" ")[0]}. Welcome motherfucker!`
  );
};
