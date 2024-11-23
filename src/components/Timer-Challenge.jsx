import { useRef, useState } from "react";
import ResultPopUp from "./ResultPopUp";

export default function ({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  // const [startTime, setStartTime] = useState(false);
  // const [stopTime, setStopTime] = useState(false);
  const [remainingTime , setRemainingTime]= useState(targetTime * 1000)
  const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;
  if (remainingTime <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  function handleResetTime() {
    setRemainingTime(targetTime * 1000);
    
  }
  function handleStartTime() {
    // setStartTime(true);
    timer.current = setInterval(() => {
      setRemainingTime(prevRemainingTime=> prevRemainingTime-10)
    }, 10);
  }
  function handleStopTimer() {
    clearInterval(timer.current);
    dialog.current.open();
  
  }
  return (
    <>
      <ResultPopUp onReset={handleResetTime} timeRemaining={remainingTime} ref={dialog} result="lost" targetTime={targetTime} />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStopTimer : handleStartTime}>
            {timerIsActive ? "stop" : "start"} challenge
          </button>
        </p>
        <p>{timerIsActive ? "timer is runnig" : "time is inactive"} </p>
      </section>
    </>
  );
}
