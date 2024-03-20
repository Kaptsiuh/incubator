import { CityType } from "./02_02";

let city: CityType;

beforeEach(() => {
  city = {
    title: "New Yourk",
    houses: [
      {
        buildedAt: 2012,
        repaired: false,
        address: { number: 100, street: { title: "White street" } },
      },
      {
        buildedAt: 2008,
        repaired: false,
        address: { number: 100, street: { title: "Happy street" } },
      },
      {
        buildedAt: 2020,
        repaired: false,
        address: { number: 101, street: { title: "Happy street" } },
      },
    ],
    govermentBuildings: [
      {
        type: "HOSPITAL",
        budget: 200000,
        staffCount: 200,
        address: {
          number: 20,
          street: {
            title: "Central Str",
          },
        },
      },
      {
        type: "FIRE-STATION",
        budget: 500000,
        staffCount: 1000,
        address: {
          number: 20,
          street: {
            title: "South Str",
          },
        },
      },
    ],
    citizensNumber: 1000000,
  };
});

test("test city should contains hospital and fire station", () => {
  expect(govermentBuildings.length).toBe(2);

  expect(govermentBuildings[0].type).toBe("HOSPITAL");
  expect(govermentBuildings[0].budget).toBe(200000);
  expect(govermentBuildings[0].staffCount).toBe(200);
  expect(govermentBuildings[0].address.street.title).toBe("Central Str");

  expect(govermentBuildings[1].buildedAt).toBe("FIRE-STATION");
  expect(govermentBuildings[1].repaired).toBe(500000);
  expect(govermentBuildings[1].address.number).toBe(1000);
  expect(govermentBuildings[1].address.street.title).toBe("South Str");
});

test("test city should contains 3 houses", () => {
  expect(city.houses.length).toBe(3);

  expect(city.houses[0].buildedAt).toBe(2012);
  expect(city.houses[0].repaired).toBe(false);
  expect(city.houses[0].address.number).toBe(100);
  expect(city.houses[0].address.street.title).toBe("White street");

  expect(city.houses[1].buildedAt).toBe(2008);
  expect(city.houses[1].repaired).toBe(false);
  expect(city.houses[1].address.number).toBe(100);
  expect(city.houses[1].address.street.title).toBe("Happy street");

  expect(city.houses[2].buildedAt).toBe(2020);
  expect(city.houses[2].repaired).toBe(false);
  expect(city.houses[2].address.number).toBe(101);
  expect(city.houses[2].address.street.title).toBe("Happy street");
});