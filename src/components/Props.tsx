import React from "react";
import { MyProps } from "./ParentProps";

export default function Props({ name, age, hobbies }: MyProps) {
  return (
    <>
      <h1>할 일 목록</h1>
      <h1>나이 : {age}</h1>
      {hobbies?.map((el: string, idx: number) => (
        <p key={idx}>{el}</p>
      ))}
    </>
  );
}
