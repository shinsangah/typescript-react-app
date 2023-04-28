import React from "react";
import Props from "./Props";

export interface MyProps {
  name: string;
  age: number;
  hobbies?: string[];
}

export default function ParentProps() {
  const sangah: MyProps = {
    name: "신상아",
    age: 31,
    hobbies: ["술마시기", "자기"],
  };

  return (
    <>
      <Props name={sangah.name} age={sangah.age} hobbies={sangah.hobbies} />
    </>
  );
}
