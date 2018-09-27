import React from "react";
import PropTypes from "prop-types";
import Option from "./Option";
class QuestionGroup extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.string
  };

  state = {
    activeValue: this.props.defaultValue
  };

  handleSelect = value => {
    this.setState({ activeValue: value }, () => {
      this.props.onChange &&
        this.props.onChange(this.props.questionNumber, this.state.activeValue);
    });
  };
  render() {
    const { style } = this.props;

    const children = React.Children.map(this.props.children, child => {
      if (child.type === Option) {
        return React.cloneElement(child, {
          _isSelected: this.state.activeValue === child.props.value,
          _onSelect: value => this.handleSelect(value)
        });
      } else {
        return child;
      }
    });
    return <div style={style}>{children}</div>;
  }
}

export default QuestionGroup;
