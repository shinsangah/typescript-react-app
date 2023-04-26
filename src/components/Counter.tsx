import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((cur: number) => cur + 1)}>+</button>
      <button onClick={() => setCount((cur: number) => cur - 1)}>-</button>
      {/* usestate는 이런식으로 사용하면 된다. */}
    </>
  );
}
