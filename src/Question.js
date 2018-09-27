import React from "react";
import PropTypes from "prop-types";

class Question extends React.Component {
  static propTypes = {
    style: PropTypes.object
  };
  render() {
    const { style } = this.props;
    return <div style={style}>{this.props.children}</div>;
  }
}

export default Question;
