import { useState } from "react";
export default function Counter() {
  let [count, setCount] = useState(0);
  return (
    <>
      {count}
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        Increment
      </button>
    </>
  );
}
