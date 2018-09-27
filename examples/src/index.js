import React from "react";
import { render } from "react-dom";
import { QuestionGroup } from "../../src";
import { Question } from "../../src";
import { Option } from "../../src";
import { MultipleQuestions } from "../../src";
const questions = [
  {
    question: "What is your name?",
    options: ["Cody", "Idk", "Joe", "lobe"]
  },
  {
    question: "What is his name?",
    options: ["Cody", "Idk", "Joe", "lobe"]
  }
];

class MultipleChoice extends React.Component {
  state = {
    answers: {}
  };

  getAnswers = answers => {
    this.setState({ answers });
  };
  render() {
    return (
      <MultipleQuestions
        questions={questions}
        getAnswers={answers => this.getAnswers(answers)}
      />
    );
  }
}

class App extends React.Component {
  state = {
    answers: {}
  };

  cacheAnswers = (questionNumber, value) => {
    const newAnswers = { ...this.state.answers };
    newAnswers[questionNumber] = value;
    this.setState({ answers: newAnswers });
  };
  render() {
    return (
      <div>
        <div> {JSON.stringify(this.state.answers)}</div>
        <QuestionGroup
          onChange={(questionNumber, value) =>
            this.cacheAnswers(questionNumber, value)}
          questionNumber={0}
        >
          <Question>What do you like?</Question>
          <Option value="0">Mac n cheese</Option>
          <Option value="1">Mac n cheese</Option>
          <Option value="2">Mac n cheese</Option>
          <div> Some tooltip or additional question context here </div>
          <Option value="3">Mac n cheese</Option>
        </QuestionGroup>
        <QuestionGroup
          onChange={(questionNumber, value) =>
            this.cacheAnswers(questionNumber, value)}
          questionNumber={1}
        >
          <Question>What dont you like?</Question>
          <Option value="0">boooo</Option>
          <Option value="1">ahhh</Option>
          <Option value="2">Mase</Option>
          <div> Some tooltip or additional question context here </div>
          <Option value="3">Maese</Option>
        </QuestionGroup>
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
