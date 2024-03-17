
import './App.css';
import {useState, useEffect} from "react";

// this is array descructuring, it makes it possibile to reference array elements by variable name
const [first, second] = [ 
  "Tokyo",
  "Utah",
  "LA"
]


function App() {

  const what = useState("happy"); // initial state is happy

  const [emotion, setEmotion] = useState("happy"); // can use array desctructuring to change the state. useState = (state, function())
  const [secondaryEmotion, setSecondEmotion] = useState("tired");

  useEffect(() => {
    console.log(`it's ${emotion} right now`);
  }, [emotion])  // blank array lets you only call this one time when it renders, give the array a variable and it will only render if this variables changes
  
  useEffect(() => {
    console.log(`It's ${secondaryEmotion} around here`)
  }, [secondaryEmotion])


  return (
    
    <div className="App">
      <h1>Currently feeling {emotion}</h1>
      <button onClick={()=>setEmotion("happy")}>Happy</button>
      <button onClick={()=>setEmotion("sad")}>Sad</button>
      <button onClick={()=>setEmotion("excited")}>Excited</button>
      <h1>Current secondary emotion is {secondaryEmotion}</h1>
      <button onClick={()=>setSecondEmotion("tired")}>Tired</button>
      <button onClick={()=>setSecondEmotion("sleepy")}>Sleepy</button>
    </div>
  );
}

export default App;
