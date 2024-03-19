import "./App.css";
import { useRef } from "react";

function App() {
  const textTitle = useRef()
  const hexColor = useRef()
  function submit (e) {
    e.preventDefault()
    let title = textTitle.current.value
    let color = hexColor.current.value
    alert(`${title}, ${color}`)
    textTitle.current.value = ""
    hexColor.current.value = ""
  }
  
  return (
    <form onSubmit={submit}>
      <input ref={textTitle} type="text" placeholder="color...">
      </input>
      <input ref={hexColor} type="color"></input>
      <button>ADD</button>
    </form>
  );
}

export default App;
