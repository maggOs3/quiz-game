import React from "react";

export default function Quiz(props) {
  console.log(props);
  return (
    <div>
      <p>{props.item.category}</p>
    </div>
  );
}
