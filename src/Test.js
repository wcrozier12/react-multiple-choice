import React from "react";
//@todo Make this component receive the answers from the children components and pass those back to the user. Similar to how multiplechoice.js does
//Will need to loop through children and provide a function and then hold form state to pass back to user.
import { QuestionGroup } from "./index";

class Test extends React.Component {
  answers = {};

  cacheAnswers = (activeValue, questionNumber) => {
    this.answers[questionNumber] = activeValue;
    this.props.getAnswers && this.props.getAnswers(this.answers);
  };
  render() {
    const children = React.Children.map(this.props.children, child => {
      if (child.type === QuestionGroup) {
        return React.cloneElement(child, {
          _onChange: (activeValue, activeQuestionNumber) =>
            this.cacheAnswers(activeValue, activeQuestionNumber)
        });
      } else {
        return child;
      }
    });
    return (
      <div style={{ display: "inline-block", width: "30%" }}>{children}</div>
    );
  }
}

export default Test;
