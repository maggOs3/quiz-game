import React from "react";
// import Welcome from "./components/welcome-page";
import Quiz from "./components/Quiz";
import data from "./data";

function App() {
  const quiz = data.map((item) => {
    return <Quiz item={item} />;
  });

  return (
    <div>
      <div className="quiz-size">
        <section>{quiz}</section>
      </div>
      {/* <button>Check answers</button> */}
    </div>
  );
}

export default App;
