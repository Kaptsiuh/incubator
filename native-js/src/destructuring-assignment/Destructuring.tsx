import React, { useState } from "react";

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

type PropsType = {
  title: string;
  man: ManType;
  food: Array<string>;
  car: { model: string };
};

function useDimaState(m: string) {
  return [m, function () {}];
}

const ManComponent: React.FC<PropsType> = ({ title, man, ...props }) => {
  const [message, setMessage] = useDimaState("hello");

  return (
    <div>
      <h1>{title}</h1>
      <hr />
      <div>{props.car.model}</div>
      <div>{man.name}</div>
    </div>
  );
};
