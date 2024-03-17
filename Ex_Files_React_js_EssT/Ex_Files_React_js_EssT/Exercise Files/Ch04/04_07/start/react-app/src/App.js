import "./App.css";
import { useReducer } from "react";

function App() {
 const [check, setChecked] = useReducer((check) => !check, false) //useReducer makes it so you can put function in once and call it
  return (
    <div className="App">
      <input type="checkbox" value={check} onChange={setChecked}></input>
      <label>{check ? "checked" : "unchecked"}</label>
    </div>
  );
}

export default App;
