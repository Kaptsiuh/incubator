export const userArrey = ["Dimych", "Natasha", "Valera", "Katya"];

export const usersObj = {
  "0": "Dimych",
  "1": "Natasha",
  "2": "Valera",
  "3": "Katya",
};

// export type UsersType = {
//   [key: string]: { id: number; name: string };
// };

// export const users: UsersType = {
//   "101": { id: 101, name: "Dimych" },
//   "323232": { id: 323232, name: "Natasha" },
//   "12121": { id: 12121, name: "Valera" },
//   "3": { id: 3, name: "Katya" },
// };

let user = { id: 100500, name: "Igor" };

users[user.id] = user;
delete users[user.id];
users[user.id].name = "Vitya";

export const usersArray = [
  { id: 101, name: "Dimych" },
  { id: 323232, name: "Natasha" },
  { id: 12121, name: "Valera" },
  { id: 3, name: "Katya" },
];

// let usersCopy = [...usersArray.filter(), user]
