import React, { Fragment } from "react";
import { render } from "react-dom";
import { QuestionGroup } from "../../src";
import { Question } from "../../src";
import { Option } from "../../src";
import { MultipleQuestions } from "../../src";
import { Test } from "../../src";

class App extends React.Component {
  state = {
    answers: {},
    questions: [],
    loading: true
  };

  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(r => r.json())
      .then(r => this.setState({ questions: r.results, loading: false }));
  }

  renderQuestions = questions => {
    return questions.map((q, i) => {
      const options = [...q.incorrect_answers, q.correct_answer];
      return (
        <QuestionGroup key={i} questionNumber={i}>
          <Question>{q.question}</Question>
          {options.map((op, i) => {
            return (
              <Option value={i.toString()} key={op}>
                {op}
              </Option>
            );
          })}
        </QuestionGroup>
      );
    });
  };
  render() {
    const { loading, questions, answers } = this.state;
    return loading ? (
      <div> Getting questions... </div>
    ) : (
      <Fragment>
        <div>Answers: {JSON.stringify(answers, null, 4)}</div>
        <Test getAnswers={answers => this.setState({ answers })}>
          {this.renderQuestions(questions)}
        </Test>
      </Fragment>
    );
  }
}
render(<App />, document.getElementById("root"));
