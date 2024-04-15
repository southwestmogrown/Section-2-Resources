import { useContext, useState } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";
function Match() {
  const [match, setMatch] = useState(false);
  const { sign } = useContext(HoroscopeContext);

  console.log(sign);

  return (
    <div>
      <button onClick={() => setMatch((prevMatch) => !prevMatch)}>Match</button>
      <div>{match && sign.match}</div>
    </div>
  );
}

export default Match;
