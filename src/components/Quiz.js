import React from "react";

export default function Quiz(props) {
  console.log(props);
  const incAnswArr = props.item.incorrect_answers; /*mb use state*/
  const inAnsw = incAnswArr.map((answer) => {
    return (
      <button className="button-style" onClick={() => setCurAnsw(false)}>
        {answer}
      </button>
    );
  });
  const [currentAnsw, setCurAnsw] = React.useState(false);
  // function toogleAnsw() {
  //   setCurAnsw((oldAnsw) => !oldAnsw);
  //   console.log(currentAnsw);
  // }
  let count = 0;
  if (currentAnsw === true) {
    count++;
  } else if (currentAnsw === false) {
    count--;
  }
  console.log(currentAnsw);
  return (
    <div className="q-and-var-container">
      <h3 className="question">{props.item.question}</h3>
      <div className="var-container">
        <button className="button-style" onClick={() => setCurAnsw(true)}>
          {props.item.correct_answer}
        </button>
        {inAnsw}
      </div>
      {currentAnsw}
      {count}
      {/* <hr></hr> */}
    </div>
  );
}
