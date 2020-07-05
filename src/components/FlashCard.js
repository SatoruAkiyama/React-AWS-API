import React, { Component } from "react";
import MultiCard from "./MultiCard";
import RegularCard from "./RegularCard";
import RandomWheightCard from "./RandomWeight ";
import axios from "axios";
import FontAwesome from "./FontAwesome";

class FlashCard extends Component {
  constructor() {
    super();
    this.apiHostRoot = `https://aws-services.robertbunch.dev/services`;
    this.state = {
      flipClass: "",
      questionData: "",
    };
  }

  flip = (e) => {
    let newFlip = this.state.flipClass === "" ? "flip" : "";
    this.setState({
      flipClass: newFlip,
    });
  };

  newCard = () => {
    let path;
    console.log(this.props.cardStyle);
    const cardStyle = this.props.cardStyle;
    if (cardStyle === "Random" || cardStyle === "Regular") {
      path = this.apiHostRoot + "/all";
    } else if (cardStyle === "Weighted") {
      path = this.apiHostRoot + "/weighted";
    } else {
      path = this.apiHostRoot + "/multi";
    }
    axios.get(path).then((response) => {
      this.setState({
        questionData: response.data,
      });
      this.props.nowReady();
    });
  };
  render() {
    const cardStyle = this.props.cardStyle;
    let card;
    if (cardStyle === "Multi") {
      card = <MultiCard questionData={this.state.questionData} />;
    } else if (cardStyle === "Regular") {
      card = <RegularCard questionData={this.state.questionData} />;
    } else {
      card = <RandomWheightCard questionData={this.state.questionData} />;
    }

    if (!this.props.ready) {
      this.newCard();
      return (
        <div className="spinner-wrapper">
          <FontAwesome icon="spinner" size="4x" spin />
        </div>
      );
    }

    return (
      <div>
        <div className="row align-items-center card-holder">
          <div
            onClick={this.flip}
            className={`col-sm-6 offset-sm-3 card mb-3 ${this.state.flipClass}`}
          >
            {card}
          </div>
        </div>
        <button onClick={this.newCard} className="btn btn-primary btn-lg">
          Next Question
        </button>
      </div>
    );
  }
}

export default FlashCard;
