import { usersObj } from "./08_01";

type UsersType = {
  [key: string]: { id: number; name: string };
};

let users: UsersType = {};

beforeEach(() => {
  users = {
    "101": { id: 101, name: "Dimych" },
    "323232": { id: 323232, name: "Natasha" },
    "12121": { id: 12121, name: "Valera" },
    "3": { id: 3, name: "Katya" },
  };
});

test("should select corresponding user from obj", () => {
  users["1"].name = "Ekaterina";

  expect(users["1"]).toEqual("Ekaterinah");
});

test("should delete corresponding user from obj", () => {
  delete users["1"];

  expect(users["1"]).toBeUndefined();
});
