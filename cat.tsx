import React from "react";
import { v4 } from "uuid";

import type { Cat } from "./types";

interface CatFormProps {
  addCat: (cat: Cat) => void;
}

export const CatForm: React.FC<CatFormProps> = ({ addCat }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.namedItem("name") as HTMLInputElement;
    const age = form.elements.namedItem("age") as HTMLInputElement;

    addCat({
      id: v4(),
      name: name.value,
      age: parseInt(age.value, 10),
    });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Age
        <input type="number" name="age" />
      </label>
      <button type="submit">Add Cat</button>
    </form>
  );
};
