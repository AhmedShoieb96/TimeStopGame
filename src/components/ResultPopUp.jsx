import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const result = forwardRef(function (
  { onReset, targetTime, timeRemaining },
  ref
) {
  const dialog = useRef();
  const formatedTimeRemaining = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {timeRemaining === 0 && <h2>you Lost</h2>}
      {timeRemaining > 0 && <h2>you win & score {score}</h2>}
      <p>
        your target time was <strong>{targetTime}</strong>{" "}
      </p>
      <p>you stoped the time in {formatedTimeRemaining} socends</p>
      <form action="dialog">
        <button>Close</button>
      </form>   
    </dialog>,
    document.getElementById("modal")
  );
});
export default result;
