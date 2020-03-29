import React from "react";

export default function PairList(props) {
  return (
    <table>
      <tbody>
        {props.pairs.map((pair, index) => {
          return (
            <tr key={index}>
              <td>{pair[0]}</td>
              <td>{pair[1]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
