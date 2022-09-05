import React from "react";
import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>You are good to go!</span>;
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{seconds}</span>;
  }
};

export default function Timer(props) {
  return (
    <>
      <Countdown date={Date.now() + props.sec * 1000} renderer={renderer}>
        <Completionist />
      </Countdown>
    </>
  );
}
