import React from "react";
import Timer from "./Timer";
import Counter from "./Counter";
export default function App() {
  return (
    <>
      <div>
        <Timer sec={30} />
        <br />
        <Counter />
      </div>
    </>
  );
}
