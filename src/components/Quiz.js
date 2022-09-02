import React from "react";

export default function Quiz(props) {
  console.log(props);
  const incAnswArr = props.item.incorrect_answers; /*mb use state*/

  const [z, zz] = React.useState(false);
  React.useEffect(() => {
    let pepe = 0;
    if (z === true) {
      pepe = pepe + 1;
    } else {
      pepe = pepe - 1;
    }
    console.log(pepe);
  });

  console.log(z);
  const inAnsw = incAnswArr.map((answer) => {
    return (
      <button className="button-style" onClick={() => zz((fl) => false)}>
        {answer}
      </button>
    );
  });
  return (
    <div className="q-and-var-container">
      <h3 className="question">{props.item.question}</h3>
      <div className="var-container">
        <button className="button-style" onClick={() => zz((tr) => true)}>
          {props.item.correct_answer}
        </button>
        {inAnsw}
      </div>

      <hr className="hr-question"></hr>
    </div>
  );
}
