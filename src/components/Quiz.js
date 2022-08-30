import React from "react";

export default function Quiz(props) {
  console.log(props);
  const incAnswArr = props.item.incorrect_answers; /*mb use state*/
  const inAnsw = incAnswArr.map((answer) => {
    return <button>{answer}</button>;
  });
  return (
    <div>
      <h3>{props.item.question}</h3>
      <div>
        <button>{props.item.correct_answer}</button>
        {inAnsw}
      </div>

      <hr></hr>
    </div>
  );
}
