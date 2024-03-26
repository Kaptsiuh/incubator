// const callback = (): number => {
//   alert("hey");
//   return 12;
// };
// window.setTimeout(callback, 1000);

import { ChangeEvent, MouseEvent } from "react";

export const User = () => {
  const search = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.name);
  };

  const onNameChanged = () => {
    console.log("name");
  };

  const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("age" + e.currentTarget.value);
  };

  const focusLostHandler = () => {
    console.log("lost");
  };

  return (
    <div>
      <textarea onChange={onNameChanged} onBlur={focusLostHandler}>
        Dima
      </textarea>
      <input onChange={onAgeChanged} />
      <button name="delete" onClick={search}>
        search
      </button>
    </div>
  );
};
