import React, { useRef, useState } from "react";

export default function Input() {
  const [string, setString] = useState<string>("");
  //   꺽쇠가 무슨 뜻이였는지?
  const inputRef = useRef<HTMLInputElement>(null);
  //   HTMLinputelement 까지 가져올 것을 선언해줘야 한다.
  // html div Element, button element 이렇게 일일이 지정해줘야 한다.
  //   자바스크립트에서 differ 옵션 배우기 전에 페이지 그려지기 전에
  //   자바스크립트가 dom에 접근하려고 했었는데 null을 리턴했다. 초기값으로 null 지정해야 에러가 안뜬다.

  const handleChange = (): void => {
    if (inputRef.current !== null) setString(inputRef.current.value);
    // 버그 가능성을 narrowing 좁혀주는 것이다.
  };

  return (
    <>
      <h1>{string}</h1>
      <input ref={inputRef} onChange={handleChange} />
    </>
  );
}
