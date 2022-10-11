import React, { useState } from "react";

function App() {
  setInterval(clicked, 1000);

  const now = new Date().toLocaleTimeString();
  let [time, setTime] = useState(now);

  function clicked() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  //const [time, setTime] = useState(new Date());

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={clicked}>Get Time</button>
    </div>
  );
}

export default App;
