import React, { useState } from "react";

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <div>{good}</div>
      <button onClick={() => setGood(good + 1)}>good</button>
      <div>{neutral}</div>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <div>{bad}</div>
      <button onClick={() => setBad(bad + 1)}>bad</button>
    </div>
  );
};

export default App;
