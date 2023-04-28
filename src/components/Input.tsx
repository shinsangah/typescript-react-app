import React, { useRef, useState } from "react";

export default function Input() {
  const [string, setString] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  // 해당 DOM 요소 (input) 가 들어갈 것이다.
  // null은 의도된 빈 값

  const handleChange = (): void => {
    if (inputRef.current !== null) setString(inputRef.current.value);
  };

  const handleEventChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setString(e.target.value);
  };

  return (
    <>
      <h1>{string}</h1>
      <input ref={inputRef} onChange={handleEventChange} />
    </>
  );
}
