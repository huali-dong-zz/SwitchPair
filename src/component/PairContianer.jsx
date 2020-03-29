import React, { Component } from "react";
import PairList from "./PairList";

class PairContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pairs: []
    };
  }

  generatePairs() {
    let names = this.props.names;
    let shuffledNames = this.shuffle(names);
    let pairArray = [];
    shuffledNames.forEach((el, i) => {
      if (i % 2 !== 0) {
        pairArray.push([el, shuffledNames[i - 1]]);
      } else if (i === shuffledNames.length - 1) {
        pairArray.push([el, "No Partner Yet"]);
      }
    });
    this.setState({
      pairs: pairArray
    });
  }

  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex--);

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  render() {
    return (
      <div className={"pairContainer"}>
        <button className={"button"} onClick={this.generatePairs.bind(this)}>
          Generate Pairs
        </button>
        {this.state.pairs.length > 0 ? (
          <div className={"pairList"}>
            <h2 className={"pairHeader"}>Pair List:</h2>
            <PairList pairs={this.state.pairs} />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default PairContainer;
