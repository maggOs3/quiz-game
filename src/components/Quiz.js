import React from "react";

export default function Quiz(props) {
  console.log(props);
  const incAnswArr = props.item.incorrect_answers; /*mb use state*/
  const inAnsw = incAnswArr.map((answer) => {
    return <button className="button-style">{answer}</button>;
  });
  return (
    <div className="q-and-var-container">
      <h3 className="question">{props.item.question}</h3>
      <div className="var-container">
        <button className="button-style">{props.item.correct_answer}</button>
        {inAnsw}
      </div>

      {/* <hr></hr> */}
    </div>
  );
}
