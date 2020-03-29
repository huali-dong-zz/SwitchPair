import React from "react";

export default function PairItem(props) {
  var pair = props.pair;
  return (
    <article>
      <div>{pair[0]}</div>
      <div>{pair[1]}</div>
    </article>
  );
}
