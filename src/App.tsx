import { useState } from "react";
import "./App.css";

function App() {
  return <Homework />;
}

function Homework() {
  const [sign, setSign] = useState("");
  let name = "";
  const [signs, setSigns] = useState([]);
  return (
    <div className="App">
      <input
        onChange={(e) => {
          name = e.target.value;
        }}
      />
      <button
        onClick={() => {
          setSign(name);
          console.log(name);
          setSigns([...signs, name]);
        }}
      >
        click
      </button>
      <div>{sign}您好</div>
      <ul>
        {signs.map((sign) => (
          <li>{sign}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
