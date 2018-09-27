import React from "react";
import PropTypes from "prop-types";

class RadioIcon extends React.Component {
  static propTypes = {
    isSelected: PropTypes.bool
  };

  render() {
    const { _onSelect, value, style, isSelected, selectedStyle } = this.props;
    const defaultStyle = {
      borderColor: "#ccc",
      borderWidth: 0.5,
      borderRadius: "10px",
      borderStyle: this.props.isSelected ? "inset" : "outset",
      height: "66%",
      width: "66%",
      display: "inline-block",
      cursor: "pointer",
      background: isSelected ? "rgba(0, 0, 0, 0.05)" : "",
      visibility: isSelected ? "hidden" : "",
      position: isSelected ? "absolute" : ""
    };
    const appliedStyle =
      style && style.icon
        ? { ...style.icon, ...defaultStyle }
        : { ...defaultStyle };
    return (
      <div style={{ position: "relative", width: "24px", height: "24px" }}>
        <input
          type="radio"
          value={value}
          checked={isSelected}
          onChange={() => _onSelect(value)}
          style={
            isSelected && selectedStyle && selectedStyle.icon ? (
              { ...appliedStyle, ...selectedStyle.icon }
            ) : (
              appliedStyle
            )
          }
        />
        {isSelected && (
          <div
            style={{
              ...defaultStyle,
              width: "100%",
              height: "100%",
              visibility: ""
            }}
          >
            ✓
          </div>
        )}
      </div>
    );
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
    const { value, _isSelected, _onSelect, style, selectedStyle } = this.props;

    const defaultStyle = {
      boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
      margin: "5px 0",
      padding: "5px",
      display: "flex",
      alignItems: "center",
      backgroundColor: _isSelected ? "rgba(76,175,80,0.33)" : ""
    };
    const appliedStyle =
      style && style.option
        ? { ...style.option, ...defaultStyle }
        : { ...defaultStyle };

    return (
      <div
        style={
          _isSelected && selectedStyle && selectedStyle.option ? (
            { ...appliedStyle, ...selectedStyle.option }
          ) : (
            appliedStyle
          )
        }
      >
        <RadioIcon
          _onSelect={_onSelect}
          value={value}
          isSelected={_isSelected}
          selectedStyle={selectedStyle}
          style={style}
        />
        <label htmlFor={value} style={{ margin: "auto" }}>
          {this.props.children}
        </label>
      </div>
    );
  }
}

export default Option;
