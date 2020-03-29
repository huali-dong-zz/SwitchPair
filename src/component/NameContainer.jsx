import React, { Component } from "react";

export default class NameContainer extends Component {
  render() {
    return (
      <div className={"nameContainer"}>
        <article>
          <h2 className={"names"}>Name List:</h2>
          <ul>
            {this.props.names.map((name, i) => (
              <li key={`name-${i}`}>{name}</li>
            ))}
          </ul>
        </article>
      </div>
    );
  }
}
