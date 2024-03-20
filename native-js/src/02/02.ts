type TechnologiesType = {
  id: number;
  title: string;
};

type LocalCityType = {
  title: string;
  countryTitle: string;
};

type AddressType = {
  streetTitle: string;
  city: LocalCityType;
};

type StudentType = {
  id: number;
  name: string;
  "my name": string;
  age: number;
  isActive: boolean;
  address: AddressType;
  technologies: Array<TechnologiesType>;
};

const student: StudentType = {
  id: 1,
  name: "Dima",
  "my name": "Byll",
  age: 32,
  isActive: false,
  address: {
    streetTitle: "Tuwima 64A",
    city: {
      title: "Lodz",
      countryTitle: "Poland",
    },
  },
  technologies: [
    { id: 1, title: "HTML" },
    { id: 2, title: "JS" },
    { id: 3, title: "React" },
  ],
};

console.log(student.age);
console.log(student.name);
console.log(student.address.city.title);
console.log(student.technologies[3].title);
