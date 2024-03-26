type LessonType = {
  title: string;
};

type ManType = {
  name: string;
  age: number;
  lessons: Array<LessonType>;
  address: {
    street: {
      title: string;
    };
  };
};

let props: ManType;

beforeEach(() => {
  props = {
    name: "Dima",
    age: 32,
    lessons: [{ title: "1" }, { title: "2" }],
    address: {
      street: {
        title: "Tuwima street",
      },
    },
  };
});

test("sds", () => {
  const { age, lessons } = props;
  const { title } = props.address.street;

  expect(age).toBe(32);
  expect(lessons.length).toBe(2);

  expect(title).toBe("Tuwima street");
});

test("1", () => {});

test("2", () => {
  const l1 = props.lessons[0];
  const l2 = props.lessons[1];

  const [ls1, ...restLessons] = props.lessons;

  expect(l1.title).toBe("1");
  expect(l2.title).toBe("2");

  expect(ls1.title).toBe("1");
  //   expect(ls2.title).toBe("2");
  expect(restLessons.length).toBe(1);
  expect(restLessons[0].title).toBe("2");
});
