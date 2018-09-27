import React from "react";
import PropTypes from "prop-types";

class RadioIcon extends React.Component {
  static propTypes = {
    isSelected: PropTypes.bool
  };

  render() {
    const { _onSelect, value, style } = this.props;
    const defaultStyle = {
      borderColor: "#ccc",
      borderWidth: 3,
      borderRadius: "10px",
      borderStyle: this.props.isSelected ? "inset" : "outset",
      height: 16,
      width: 16,
      display: "inline-block",
      cursor: "pointer",
      background: this.props.isSelected ? "rgba(0, 0, 0, 0.05)" : ""
    };
    const appliedStyle =
      style && style.icon
        ? { ...style.icon, ...defaultStyle }
        : { ...defaultStyle };
    return <div onClick={() => _onSelect(value)} style={appliedStyle} />;
  }
}

class Option extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    _onSelect: PropTypes.func
  };

  componentDidMount() {
    const { _onSelect } = this.props;
    if (!_onSelect) {
      console.error("<Option /> must be wrapped in a <QuestionGroup /> ");
    }
  }
  render() {
    const { value, _isSelected, _onSelect, style } = this.props;
    return (
      <div style={style && style.option}>
        <RadioIcon
          _onSelect={_onSelect}
          value={value}
          isSelected={_isSelected}
          style={style}
        />
        {this.props.children}
      </div>
    );
  }
}

export default Option;
