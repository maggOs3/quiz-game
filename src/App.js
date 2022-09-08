import React from "react";
// import Welcome from "./components/welcome-page";
import Quiz from "./components/Quiz";
import data from "./data";

function App() {
  const [count, setCount] = React.useState(0);

  function Icrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function Decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  console.log(count);
  const quiz = data.map((item) => {
    return <Quiz item={item} inc={Icrement} dec={Decrement} />;
  });

  return (
    <div>
      <div className="quiz-size">
        <section>{quiz}</section>
      </div>
      {/* <button>Check answers</button> */}
      {count}
    </div>
  );
}

export default App;
