import { useState , useRef} from "react";
export default function Player() {
  let enteredPlayerName = useRef()
  const [playerName, setPlayerName] = useState('')
  function handleClick() {
   setPlayerName(enteredPlayerName.current.value)
    enteredPlayerName.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "unkown entity"}</h2>
      <p>
        <input ref={enteredPlayerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
